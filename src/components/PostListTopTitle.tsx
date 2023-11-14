import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  width: 100%;
  height: 70px;
  min-height: 70px;
  color: antiquewhite;
  background-color: tomato;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 5px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 35px;
`;

export default function PostListTopTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Title>{children}</Title>;
}
