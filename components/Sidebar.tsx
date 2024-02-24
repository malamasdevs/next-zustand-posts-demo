"use client";

import { Plus } from "lucide-react";
import { Button } from "./ui/Button";
import { useCreatePostModal } from "@/hooks/useCreatePostModal";

export const Sidebar = () => {
  const createNewPost = useCreatePostModal();

  return (
    <div className="relative max-w-xs  text-primary bg-secondary border-r-2 p-4 h-full">
      <div className="space-y-4 transition ease-in-out delay-150 ">
        {/* CREATE NEW POST MODAL TRIGGER  */}
        <Button
          onClick={() => createNewPost.onOpen()}
          className="text-muted-foreground border-gray-800  dark:border-white  border-4 text-xs group bg-transparent dark:text-white flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition"
        >
          <div className="flex justify-center gap-y-2 items-center flex-1">
            <Plus className="h-5 w-5" />
            <p>New Post</p>
          </div>
        </Button>
      </div>
    </div>
  );
};
