"use client";
import React, { useState } from "react";
import { usePosts } from "@/hooks/usePosts";
import { useCreatePostModal } from "@/hooks/useCreatePostModal";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/Dialog";
import { Button } from "./ui/Button";
import { Label } from "./ui/Label";
import { Input } from "./ui/Input";
import { Textarea } from "./ui/TextArea";

interface PostFormValues {
  id: number;
  title: string;
  content: string;
}

export const AddPostModal: React.FC = () => {
  const { posts, setPosts } = usePosts();
  const createPostModal = useCreatePostModal();
  const [formData, setFormData] = useState<PostFormValues>({
    id: 0,
    title: "",
    content: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Create a new post object
    const newPost = {
      ...formData,
      id: Math.random(), // Simple unique ID generator for demonstration
    };

    // Update posts in global state using Zustand
    setPosts([...posts, newPost]);

    // Optionally: Sync with backend here or elsewhere in your application

    setIsLoading(false);
    alert("Post added successfully");
    // Reset formData to initial state
    setFormData({
      id: 0, // or the next ID in sequence or simply reset to initial form state
      title: "",
      content: "",
    });

    // Close the modal
    createPostModal.onClose();
  };

  return (
    <Dialog
      open={createPostModal.isOpen}
      onOpenChange={createPostModal.onClose}
    >
      <DialogContent>
        <DialogHeader className="space-y-4">
          <DialogTitle className="text-center">Create a Post</DialogTitle>
        </DialogHeader>
        <div>
          <h2>Create a Post</h2>
          <form className="flex flex-col gap-2 mt-2" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                name="title"
                type="text"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                required
              />
            </div>

            <Button className="mt-4" type="submit" disabled={isLoading}>
              {isLoading ? "Adding..." : "Add Post"}
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};
