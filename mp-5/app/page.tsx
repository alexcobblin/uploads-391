"use client";

import NewPostForm from "@/components/newUrlForm"; // adjust path if needed
import { useState } from "react";
import { UrlProps } from "@/types";

export default function Home() {
  const [posts, setPosts] = useState<UrlProps[]>([]);

  const appendPost = (post: UrlProps) => {
    setPosts((prev) => [...prev, post]);
  };

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Create a New Short URL</h1>
      <NewPostForm append={appendPost} />

      {posts.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Created URLs</h2>
          <ul>
            {posts.map((post) => (
              <li key={post.id || post.alias}>
                <strong>{post.alias}</strong> → <a href={post.url}>{post.url}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}
