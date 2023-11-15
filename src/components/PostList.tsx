import * as React from 'react';
import styled from 'styled-components';
import PostCard from './PostCard';
import { IPostProps } from '../interface/interfaces';

const BlogWrapper = styled.ul`
  width: 90%;
  a {
    text-decoration: none;
  }
`;

export default function PostList({ posts }: any) {
  return (
    <BlogWrapper>
      {posts &&
        posts.map((post: IPostProps) => (
          <PostCard key={post.slug} post={post} />
        ))}
    </BlogWrapper>
  );
}
