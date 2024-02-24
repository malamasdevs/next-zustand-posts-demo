"use client";
import { usePosts } from "@/hooks/usePosts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";

// Example of a component displaying posts
const PostFeed = () => {
  const { posts } = usePosts();

  // Check if there are no posts and display a message if true
  if (posts.length === 0) {
    return <div>No posts to display.</div>;
  }

  return (
    <section className="h-full flex flex-col items-center justify-center relative">
      <div className="flex items-start flex-col gap-4">
        {posts.map((post) => (
          <div key={post.id} className="w-full max-w-md rounded-lg shadow-md">
            <Card>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-xl">
                  {post.content}
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PostFeed;
