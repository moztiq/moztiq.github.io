import React, { ReactNode, useState } from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { IMobileProps } from '../interface/interfaces';

const Main = styled.main<IMobileProps>`
  width: 100vw;
  height: 100vh;
  display: flex;
  font-family: 'Pretendard', sans-serif;
  position: fixed;
  background-color: ${(props) => props.theme.colors.background};

  @media screen and (max-width: 768px) {
    flex-direction: column;
    position: ${(props) =>
      props.isViewMobileNavigation ? 'fixed' : 'relative'};
  }
`;

const HamburgerWrapper = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.4rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.background};
    z-index: 8;
    position: absolute;
    top: 24px;
    left: 35px;
  }
`;

interface IOverlayProps {
  isViewMobileNavigation: boolean;
}

const OverLay = styled.div<IOverlayProps>`
  @media screen and (max-width: 768px) {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    z-index: 9;
    display: ${(props) => (props.isViewMobileNavigation ? 'block' : 'none')};
  }
`;

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  const [isViewMobileNavigation, setIsViewMobileNavigation] = useState(false);

  const handleToggle = () => {
    setIsViewMobileNavigation((prev) => !prev);
  };

  return (
    <Main isViewMobileNavigation={isViewMobileNavigation}>
      <HamburgerWrapper>
        <FontAwesomeIcon icon={faBars} onClick={handleToggle} />
      </HamburgerWrapper>
      <OverLay
        isViewMobileNavigation={isViewMobileNavigation}
        onClick={() => {
          setIsViewMobileNavigation(false);
        }}
      />
      <Navigation isViewMobileNavigation={isViewMobileNavigation} />
      {children}
    </Main>
  );
}
