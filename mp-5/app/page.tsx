"use client";

import styled from "styled-components";
import NewPostForm from "@/components/newUrlForm"; // adjust path if needed
import { useState } from "react";
import { UrlProps } from "@/types";

const MainWrapper = styled.main`
  padding: 2rem;
  display: grid;
  place-items: center;
  background-color: #e0e0e0ff;

`;

const Heading = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
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
    color: #ff8888ff; /* blue-700 */
    text-decoration: underline;

    &:hover {
      color: #ff8888ff; /* blue-600 */
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
