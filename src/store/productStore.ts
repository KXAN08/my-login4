import { create } from "zustand";

interface ProductState {
  page: number;
  setPage: (page: number) => void;
}

export const useProductStore = create<ProductState>((set) => ({
  page: 0,
  setPage: (page) => set({ page }),
}));
