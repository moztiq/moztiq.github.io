import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import { useRecoilState } from 'recoil';
import { isViewMobileMenuState } from '../atoms/atoms';

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  font-family: 'Noto Sans KR', sans-serif;
  position: fixed;
  background-color: ${(props) => props.theme.colors.background};

  @media screen and (max-width: 768px) {
    flex-direction: column;
    position: relative;
  }
`;

interface IOverLayProps {
  isViewMobileMenu: boolean;
}

const OverLay = styled.div<IOverLayProps>`
  @media screen and (max-width: 768px) {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    z-index: 9;
    display: ${(props) => (props.isViewMobileMenu ? 'block' : 'none')};
  }
`;

interface ILayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  const [isViewMobileMenu, seTisViewMobileMenu] = useRecoilState(
    isViewMobileMenuState,
  );

  return (
    <Main>
      <Navigation />
      <OverLay
        isViewMobileMenu={isViewMobileMenu}
        onClick={() => {
          seTisViewMobileMenu(false);
        }}
      />
      {children}
    </Main>
  );
}
