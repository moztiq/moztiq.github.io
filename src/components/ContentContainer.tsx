import React from 'react';
import styled from 'styled-components';
import PostListTopTitle from './PostListTopTitle';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${(props) => props.theme.colors.background};
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
      <PostListTopTitle>{title}</PostListTopTitle>
      {children}
    </Content>
  );
}
