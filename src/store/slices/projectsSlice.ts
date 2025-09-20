import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Project {
  id: string;
  title: string;
  description: string;
  link?: string;
  createdAt: string;
}

interface ProjectsState { items: Project[] }

const STORAGE_KEY = "projects_v1";

function loadFromStorage(): Project[] | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Project[]) : null;
  } catch { return null; }
}
function saveToStorage(items: Project[]) {
  if (typeof window === "undefined") return;
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(items)); } catch {}
}

const initialState: ProjectsState = { items: loadFromStorage() ?? [] };

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addProject(state, action: PayloadAction<Project>) {
      state.items.unshift(action.payload);
      saveToStorage(state.items);
    },
    editProject(state, action: PayloadAction<Project>) {
      const idx = state.items.findIndex(p => p.id === action.payload.id);
      if (idx !== -1) state.items[idx] = action.payload;
      saveToStorage(state.items);
    },
    deleteProject(state, action: PayloadAction<string>) {
      state.items = state.items.filter(p => p.id !== action.payload);
      saveToStorage(state.items);
    },
    importProjects(state, action: PayloadAction<Project[]>) {
      state.items = action.payload;
      saveToStorage(state.items);
    },
    resetProjects(state) {
      state.items = [];
      saveToStorage(state.items);
    },
    // NEW restore at index
    restoreProjectAt(state, action: PayloadAction<{ item: Project; index: number }>) {
      const { item, index } = action.payload;
      const safeIndex = Math.max(0, Math.min(index, state.items.length));
      state.items.splice(safeIndex, 0, item);
      saveToStorage(state.items);
    }
  }
});

export const { addProject, editProject, deleteProject, importProjects, resetProjects, restoreProjectAt } = projectsSlice.actions;
export default projectsSlice.reducer;
