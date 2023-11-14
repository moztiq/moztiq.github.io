import * as React from 'react';
import styled from 'styled-components';
import PostCard, { IPostProps } from './PostCard';

const BlogWrapper = styled.ul`
  width: 90%;
  overflow-y: auto;
  a {
    text-decoration: none;
  }
`;

export default function PostList({ posts }: { posts: [] }) {
  return (
    <BlogWrapper>
      {posts && posts.map((post: IPostProps) => <PostCard post={post} />)}
    </BlogWrapper>
  );
}
