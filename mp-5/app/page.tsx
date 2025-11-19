"use client";

import styled from "styled-components";
import NewPostForm from "@/components/newUrlForm"; // adjust path if needed
import { useState } from "react";
import { UrlProps } from "@/types";

// Styled components
const MainWrapper = styled.main`
  padding: 2rem;
`;

const Heading = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const SubHeading = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const PostList = styled.ul`
  list-style: none;
  padding: 0;
`;

const PostItem = styled.li`
  margin-bottom: 0.5rem;
  font-size: 1rem;

  a {
    color: #1d4ed8; /* blue-700 */
    text-decoration: underline;

    &:hover {
      color: #2563eb; /* blue-600 */
    }
  }
`;

const PostsContainer = styled.div`
  margin-top: 2rem;
`;

export default function Home() {
  const [posts, setPosts] = useState<UrlProps[]>([]);

  const appendPost = (post: UrlProps) => {
    setPosts((prev) => [...prev, post]);
  };

  return (
    <MainWrapper>
      <Heading>Create a New Short URL</Heading>
      <NewPostForm append={appendPost} />

      {posts.length > 0 && (
        <PostsContainer>
          <SubHeading>Created URLs</SubHeading>
          <PostList>
            {posts.map((post) => (
              <PostItem key={post.id || post.alias}>
                <strong>{post.alias}</strong> →{" "}
                <a href={post.url} target="_blank" rel="noopener noreferrer">
                  {post.url}
                </a>
              </PostItem>
            ))}
          </PostList>
        </PostsContainer>
      )}
    </MainWrapper>
  );
}
