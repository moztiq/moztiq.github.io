import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  width: 100%;
  height: 150px;
  min-height: 150px;
  color: antiquewhite;
  background-color: tomato;
  font-size: 40px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function PostListTopTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Title>{children}</Title>;
}
