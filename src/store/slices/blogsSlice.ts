
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Blog {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

interface BlogsState { items: Blog[] }

const STORAGE_KEY = "blogs_v1";

function loadFromStorage(): Blog[] | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Blog[]) : null;
  } catch { return null; }
}
function saveToStorage(items: Blog[]) {
  if (typeof window === "undefined") return;
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(items)); } catch {}
}

const initialState: BlogsState = { items: loadFromStorage() ?? [] };

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    addBlog(state, action: PayloadAction<Blog>) {
      state.items.unshift(action.payload);
      saveToStorage(state.items);
    },
    editBlog(state, action: PayloadAction<Blog>) {
      const idx = state.items.findIndex(b => b.id === action.payload.id);
      if (idx !== -1) state.items[idx] = action.payload;
      saveToStorage(state.items);
    },
    deleteBlog(state, action: PayloadAction<string>) {
      state.items = state.items.filter(b => b.id !== action.payload);
      saveToStorage(state.items);
    },
    importBlogs(state, action: PayloadAction<Blog[]>) {
      state.items = action.payload;
      saveToStorage(state.items);
    },
    resetBlogs(state) {
      state.items = [];
      saveToStorage(state.items);
    },
    // NEW
    restoreBlogAt(state, action: PayloadAction<{ item: Blog; index: number }>) {
      const { item, index } = action.payload;
      const safeIndex = Math.max(0, Math.min(index, state.items.length));
      state.items.splice(safeIndex, 0, item);
      saveToStorage(state.items);
    }
  }
});

export const { addBlog, editBlog, deleteBlog, importBlogs, resetBlogs, restoreBlogAt } = blogsSlice.actions;
export default blogsSlice.reducer;
