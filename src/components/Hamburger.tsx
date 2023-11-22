import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
import { isViewMobileMenuState } from '../atoms/atoms';

const HamburgerWrapper = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.4rem;
    font-weight: bold;
    padding-left: 35px;
    background-color: ${(props) => props.theme.colors.background};
    z-index: 8;
  }
`;

export default function Hamburger() {
  const setIsViewMobileMenu = useSetRecoilState(isViewMobileMenuState);

  const handleClick = () => {
    setIsViewMobileMenu(true);
  };

  return (
    <HamburgerWrapper>
      <FontAwesomeIcon icon={faBars} onClick={handleClick} />
    </HamburgerWrapper>
  );
}
