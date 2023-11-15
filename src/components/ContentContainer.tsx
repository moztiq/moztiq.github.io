import React from 'react';
import styled from 'styled-components';
import PostDetailTop from './PostDetailTop';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${(props) => props.theme.colors.background};
  overflow-y: scroll;
`;

const PostDetailBottom = styled.div`
  width: 100%;
  height: 50px;
  min-height: 50px;
`;

interface IContentContainerProps {
  children: React.ReactNode;
  title: string;
}

export default function ContentContainer({
  title,
  children,
}: IContentContainerProps) {
  return (
    <Content>
      <PostDetailTop>{title}</PostDetailTop>
      {children}
      <PostDetailBottom></PostDetailBottom>
    </Content>
  );
}
