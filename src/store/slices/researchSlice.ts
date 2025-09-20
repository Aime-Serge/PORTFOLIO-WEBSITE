import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Research {
  id: string;
  title: string;
  abstract: string;
  pdfUrl?: string;
  createdAt: string;
}

interface ResearchState { items: Research[] }

const STORAGE_KEY = "research_v1";

function loadFromStorage(): Research[] | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Research[]) : null;
  } catch { return null; }
}
function saveToStorage(items: Research[]) {
  if (typeof window === "undefined") return;
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(items)); } catch {}
}

const initialState: ResearchState = { items: loadFromStorage() ?? [] };

const researchSlice = createSlice({
  name: "research",
  initialState,
  reducers: {
    addResearch(state, action: PayloadAction<Research>) {
      state.items.unshift(action.payload);
      saveToStorage(state.items);
    },
    editResearch(state, action: PayloadAction<Research>) {
      const idx = state.items.findIndex(r => r.id === action.payload.id);
      if (idx !== -1) state.items[idx] = action.payload;
      saveToStorage(state.items);
    },
    deleteResearch(state, action: PayloadAction<string>) {
      state.items = state.items.filter(r => r.id !== action.payload);
      saveToStorage(state.items);
    },
    importResearch(state, action: PayloadAction<Research[]>) {
      state.items = action.payload;
      saveToStorage(state.items);
    },
    resetResearch(state) {
      state.items = [];
      saveToStorage(state.items);
    },
    // NEW
    restoreResearchAt(state, action: PayloadAction<{ item: Research; index: number }>) {
      const { item, index } = action.payload;
      const safeIndex = Math.max(0, Math.min(index, state.items.length));
      state.items.splice(safeIndex, 0, item);
      saveToStorage(state.items);
    }
  }
});

export const { addResearch, editResearch, deleteResearch, importResearch, resetResearch, restoreResearchAt } = researchSlice.actions;
export default researchSlice.reducer;
