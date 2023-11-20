import React, { ReactNode } from 'react';
import styled from 'styled-components';
import PostContainerTop from './PostContainerTop';

const ContentContainerWrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.background};
  overflow-y: scroll;
  overflow-x: hidden;
  scroll-behavior: smooth;
`;

interface IContentContainerProps {
  children: ReactNode;
  title: string;
}

export default function ContentContainer({
  title,
  children,
}: IContentContainerProps) {
  return (
    <ContentContainerWrapper>
      <PostContainerTop>{title}</PostContainerTop>
      {children}
    </ContentContainerWrapper>
  );
}
