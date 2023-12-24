import * as React from 'react';
import styled from 'styled-components';
import PostCard from './PostCard';
import { IPostProps } from '../../interface/interfaces';

const PostListContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const PostListWrapper = styled.ul`
  width: 75%;
  a {
    text-decoration: none;
  }
  padding-bottom: 50px;

  @media screen and (max-width: 768px) {
    width: 95%;
  }
`;

export default function PostList({ posts }: { posts: IPostProps[] }) {
  return (
    <PostListContainer>
      <PostListWrapper>
        {posts &&
          posts.map((post: IPostProps) => (
            <PostCard key={post.slug} post={post} />
          ))}
      </PostListWrapper>
    </PostListContainer>
  );
}
