import { create } from "zustand";

interface useCreatePostModal {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useCreatePostModal = create<useCreatePostModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
