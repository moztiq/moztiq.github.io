import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Hamburger from '../Hamburger';

const TopWrapper = styled.div`
  width: 100%;
  height: 70px;
  min-height: 70px;
  color: ${(props) => props.theme.colors.textPrimary};
  background-color: ${(props) => props.theme.colors.gray100};
  //position: fixed;
  top: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 5;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray200};

  @media screen and (max-width: 768px) {
    justify-content: space-between;
  }
`;

const Title = styled.h1`
  font-size: 1.4rem;
  font-weight: bold;
  letter-spacing: 3px;
  padding-right: 35px;
`;

export default function PostContainerTop({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <TopWrapper>
      <Hamburger />
      <Title>{children}</Title>
    </TopWrapper>
  );
}
