import React, { ReactNode, useEffect } from 'react';
import styled from 'styled-components';
import ContentContainerTop from './ContentContainerTop';

const ContentContainerWrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.background};
  overflow-y: scroll;
  overflow-x: hidden;
  scroll-behavior: smooth;

  @media screen and (max-width: 768px) {
    position: absolute;
  }
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
      <ContentContainerTop>{title}</ContentContainerTop>
      {children}
    </ContentContainerWrapper>
  );
}
