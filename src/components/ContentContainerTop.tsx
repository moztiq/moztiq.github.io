import React, { ReactNode } from 'react';
import styled from 'styled-components';

const TopWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 60px;
  min-height: 60px;
  color: ${(props) => props.theme.colors.textPrimary};
  background-color: ${(props) => props.theme.colors.gray100};
  z-index: 5;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray200};
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Title = styled.h1`
  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: 1px;
  padding-right: 25px;
`;

export default function ContentContainerTop({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <TopWrapper>
      <TitleWrapper>
        <Title>{children}</Title>
      </TitleWrapper>
    </TopWrapper>
  );
}
