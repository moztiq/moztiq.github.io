import React from 'react';
import styled from 'styled-components';
import { ILayoutProps } from '../../interface/interfaces';
import ContentContainer from '../ContentContainer';
import {
  Category,
  SectionDescription,
  SectionTitle,
} from '../../constants/common.constant';
import meImage from '../../assets/images/me.jpg';
import Layout from './Layout';
import { Link } from 'gatsby';

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TopBackground = styled.div`
  display: flex;
  justify-content: center;
  height: 300px;
  background-color: ${(props) => props.theme.colors.gray200};
  border-bottom: 1px solid ${(props) => props.theme.colors.gray300};
`;

const MoztiqWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  position: relative;
`;

const MoztiqTitle = styled.div`
  font-size: 28px;
  color: ${(props) => props.theme.colors.gray500};
  letter-spacing: 1px;
  span {
    color: ${(props) => props.theme.colors.gray800};
    font-weight: bold;
    font-size: 40px;
  }
  span.accent {
    margin: 0 20px;
    color: ${(props) => props.theme.colors.accentColor};
    font-size: 28px;
  }

  @media screen and (max-width: 768px) {
    font-size: 18px;
    span {
      font-size: 28px;
    }
  }
`;

const MoztiqDescription = styled.div`
  margin-top: 20px;
  font-size: 14px;
  color: ${(props) => props.theme.colors.gray500};
  line-height: 1.5;
`;

const ProfileImage = styled.div`
  position: absolute;
  top: 260px;
  width: 80px;
  height: 80px;
  background-image: url(${meImage});
  background-size: cover;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.colors.gray400};
`;

const MenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  a {
    text-decoration: none;
  }
`;

const Menu = styled.div<{ active: boolean }>`
  margin: 100px 10px 0 10px;
  padding: 5px 10px;
  color: ${(props) => props.theme.colors.gray800};
  font-weight: ${(props) => (props.active ? 'bold' : '')};
  border-bottom: 2px solid
    ${(props) =>
      props.active
        ? props.theme.colors.accentColor
        : props.theme.colors.gray300};
`;

export default function AboutLayout({ children }: ILayoutProps) {
  const pathname =
    typeof window !== 'undefined' ? window.location.pathname : '';

  return (
    <Layout>
      <ContentContainer title={SectionTitle(Category.ABOUT)}>
        <AboutWrapper>
          <TopBackground>
            <MoztiqWrapper>
              <MoztiqTitle>
                <span>MOZ</span>art <span className="accent">+</span> pathe
                <span>TIQ</span>ue
              </MoztiqTitle>
              <MoztiqDescription>
                {SectionDescription(Category.ABOUT)}
              </MoztiqDescription>
              <ProfileImage />
            </MoztiqWrapper>
          </TopBackground>
          <MenuWrapper>
            <Link to={`/about/`}>
              <Menu active={pathname === `/about/`}>About</Menu>
            </Link>
            {/*<Menu active={false}>Dev Logs</Menu>*/}
            <Link to={`/about/subscribe/`}>
              <Menu active={pathname === `/about/subscribe/`}>Subscribe</Menu>
            </Link>
          </MenuWrapper>
          {children}
        </AboutWrapper>
      </ContentContainer>
    </Layout>
  );
}
