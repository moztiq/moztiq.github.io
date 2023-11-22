import React, { Fragment, useContext, useEffect } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'gatsby';
import backgroundImage from '../assets/images/bg.jpg';
import { useRecoilState } from 'recoil';
import { isViewMobileMenuState } from '../atoms/atoms';
import { IMobileProps } from '../interface/interfaces';

const MenuWrapper = styled(motion.nav)<IMobileProps>`
  //width: 350px;
  //min-width: 350px;
  width: 25%;
  min-width: 25%;
  height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  padding: 30px 0 0 0;
  position: relative;
  z-index: 10;
  display: block;

  @media screen and (max-width: 768px) {
    width: 75%;
    min-width: 75%;
    display: ${(props) => (props.isViewMobileMenu ? 'block' : 'none')};
  }
`;

const Icons = styled.div`
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    margin: 0 10px;
  }
`;

const IntroTitle = styled(motion.div)`
  font-size: 1.7rem;
  font-weight: 600;
  letter-spacing: 5px;
  color: ${(props) => props.theme.colors.black};
  margin-top: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IntroDescription = styled(motion.div)`
  font-size: 0.9rem;
  letter-spacing: 3px;
  color: ${(props) => props.theme.colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0 100px 0;
`;

const MenuList = styled.ul`
  a {
    text-decoration: none;
  }
`;

const MenuItem = styled(motion.li)`
  color: ${(props) => props.theme.colors.textPrimary};
  height: 65px;
  font-size: 1.7rem;
  font-weight: 800;
  letter-spacing: 3px;
  border-bottom: 1px dashed ${(props) => props.theme.colors.light};
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.gray100};
`;

const HomeIcon = styled(motion.svg)`
  font-size: 1.2rem;
`;

const GithubIcon = styled(motion.svg)`
  font-size: 1.4rem;
`;

const CopyRight = styled.div`
  width: 100%;
  position: absolute;
  color: ${(props) => props.theme.colors.light};
  bottom: 30px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.7rem;
  letter-spacing: 3px;
`;

function Navigation() {
  const theme = useContext(ThemeContext);
  const menuList = ['tech', 'book'];
  const location = typeof window !== 'undefined' ? window.location.href : '';

  const menuAnimation = useAnimation();

  const [isViewMobileMenu, setIsViewMobileMenu] = useRecoilState(
    isViewMobileMenuState,
  );

  const menuItemVariants = {
    initial: {
      color: theme?.colors.textLight,
      backgroundColor: theme?.colors.textPrimary,
    },
    whileHover: {
      color: theme?.colors.textPrimary,
      backgroundColor: theme?.colors.textLight,
    },
  };

  return (
    <MenuWrapper
      isViewMobileMenu={isViewMobileMenu}
      className={isViewMobileMenu ? 'slide' : ''}
    >
      <Icons>
        <Link to={`/`}>
          <HomeIcon
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 576 512"
            onClick={() => {
              setIsViewMobileMenu(false);
            }}
          >
            <path d="M543.8 287.6c17 0 32-14 32-32.1c1-9-3-17-11-24L512 185V64c0-17.7-14.3-32-32-32H448c-17.7 0-32 14.3-32 32v36.7L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1h32v69.7c-.1 .9-.1 1.8-.1 2.8V472c0 22.1 17.9 40 40 40h16c1.2 0 2.4-.1 3.6-.2c1.5 .1 3 .2 4.5 .2H160h24c22.1 0 40-17.9 40-40V448 384c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v64 24c0 22.1 17.9 40 40 40h24 32.5c1.4 0 2.8 0 4.2-.1c1.1 .1 2.2 .1 3.3 .1h16c22.1 0 40-17.9 40-40V455.8c.3-2.6 .5-5.3 .5-8.1l-.7-160.2h32z" />
          </HomeIcon>
        </Link>
        <a href="https://github.com/moztiq" target="_blank">
          {/*<FontAwesomeIcon icon={faGithub} size="2x" />*/}
          <GithubIcon
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 496 512"
          >
            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
          </GithubIcon>
        </a>
      </Icons>
      <IntroTitle>MOZTIQ</IntroTitle>
      <IntroDescription drag>Life is a journey ..</IntroDescription>
      <MenuList
        onClick={() => {
          setIsViewMobileMenu(false);
        }}
      >
        {menuList.map((menu, idx) => (
          <Fragment key={idx}>
            {location.includes(menu) ? (
              <MenuItem>{menu.toUpperCase()}</MenuItem>
            ) : (
              <Link to={`/${menu}`}>
                <MenuItem
                  variants={menuItemVariants}
                  initial="initial"
                  whileHover="whileHover"
                >
                  {menu.toUpperCase()}
                </MenuItem>
              </Link>
            )}
          </Fragment>
        ))}
      </MenuList>
      <CopyRight>Designed by MOZTIQ</CopyRight>
    </MenuWrapper>
  );
}

export default Navigation;