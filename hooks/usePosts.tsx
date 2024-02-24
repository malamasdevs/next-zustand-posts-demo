import { create } from "zustand";

interface Post {
  id: number;
  title: string;
  content: string;
}

// Update the store interface to use the Post interface
interface usePosts {
  posts: Post[];
  setPosts: (newArray: Post[]) => void;
}

export const usePosts = create<usePosts>((set) => ({
  posts: [],
  setPosts: (newArray) => set({ posts: newArray }),
}));
