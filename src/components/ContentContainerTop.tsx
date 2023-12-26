import React, { ReactNode } from 'react';
import styled from 'styled-components';

const TopWrapper = styled.div`
  width: 100%;
  height: 70px;
  min-height: 70px;
  color: ${(props) => props.theme.colors.textPrimary};
  background-color: ${(props) => props.theme.colors.gray100};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 5;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray200};
`;

const Title = styled.h1`
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 1px;
  padding-right: 35px;
`;

export default function ContentContainerTop({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <TopWrapper>
      <Title>{children}</Title>
    </TopWrapper>
  );
}
