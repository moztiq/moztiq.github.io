import * as React from 'react';
import type { PageProps } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import ContentContainer from '../components/ContentContainer';
import { Category, SectionTitle } from '../constants/common.constant';
import styled from 'styled-components';
import meImage from '../assets/images/me.jpg';

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

const ContentWrapper = styled.div`
  padding: 100px 20%;
  font-size: 1rem;
  text-align: justify;

  p {
    line-height: 2;
    margin: 25px 0;
  }

  @media screen and (max-width: 768px) {
    padding: 100px 10%;
    width: 80%;
  }
`;

const AboutPage: React.FC<PageProps> = () => {
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
                MOZTIQ 은 Mozart 가 비창 (Pathetique) 이라는 제목의 곡을
                작곡했다면 어땠을까 하고 생각하며 지은 이름입니다.
              </MoztiqDescription>
              <ProfileImage />
            </MoztiqWrapper>
          </TopBackground>
          <ContentWrapper>
            <p>
              개발자로 오랫동안 살아왔지만 언제나 개발자가 아닌 삶을 꿈꾸며
              살아가고 있습니다. 프로그램 개발하는 일은 참 재미있어요. 하지만
              다양한 삶을 경험해보고 싶기 때문이죠. 그리고 기술이 인문 안에
              자리잡아야 인간이 더 나은 삶을 살아갈 수 있다고 믿어요. 그래서
              제가 가진 기술이 그런 가치를 가질 수 있도록 노력하고 있습니다.
            </p>
            <p>
              음악의 장르를 가리진 않지만 클래식음악을 좋아하며 그 중에서도
              모차르트를 들을 때 가장 행복합니다. 모차르트가 없는 삶은 생각할
              수조차 없죠. 하지만 가끔 모차르트 음악에서 느끼는 이상과 내 삶이
              너무 동떨어져 있다고 느낄 때가 있습니다. 그럴때마다 음악을
              멀리하곤 해요. 그래서 슬퍼요.
            </p>
            <p>
              책을 좋아하지만 정작 책을 많이 읽지는 않는 것 같네요. 하지만 책이
              우리의 삶을 훨씬 더 낫게 만든다고 확신합니다. 삶이 불안하고 우울할
              때 책은 우리에게 위안을 주고 스스로 방향을 찾을 수 있도록 돕는 것
              같아요.
            </p>
            <p>
              사회에 도움이 되는 삶을 살고 싶어요. 하지만 데카르트의 말처럼
              세상을 바꾸려는 노력 이전에 자신의 그릇된 욕망을 다스리는 데
              주력하라고 하니 저도 사회에 도움이 되기 이전에 저 자신을 먼저 잘
              다스려야할 것 같습니다.
            </p>
            <p>끝이 어디인지 몰라도 인생은 갈 길은 참 멀기만 하네요.</p>
          </ContentWrapper>
        </AboutWrapper>
      </ContentContainer>
    </Layout>
  );
};

export default AboutPage;

export const Head = () => {
  return (
    <Seo
      title={'About'}
      description={'MOZTIQ, Experimental Personal Logs'}
      url={`/about`}
    />
  );
};
