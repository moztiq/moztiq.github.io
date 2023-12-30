import * as React from 'react';
import type { PageProps } from 'gatsby';
import styled from 'styled-components';
import AboutLayout from '../../components/layout/AboutLayout';

const ContentWrapper = styled.div`
  padding: 50px 20%;
  font-size: 1rem;
  text-align: justify;

  p {
    line-height: 2;
    margin: 25px 0;

    strong {
      font-weight: 600;
      font-size: 1.5rem;
      color: ${(props) => props.theme.colors.accentColor};
    }
  }

  @media screen and (max-width: 768px) {
    padding: 100px 10%;
    width: 80%;
  }
`;

const AboutPage: React.FC<PageProps> = () => {
  return (
    <AboutLayout>
      <ContentWrapper>
        <p>
          <strong>개발</strong>자로 오랫동안 살아왔지만 언제나 개발자가 아닌
          삶을 꿈꾸며 살아가고 있습니다. 프로그램 개발하는 일은 참 재미있어요.
          하지만 다양한 삶을 경험해보고 싶기 때문이죠. 그리고 기술이 인문 안에
          자리잡아야 인간이 더 나은 삶을 살아갈 수 있다고 믿어요. 그래서 제가
          가진 기술이 그런 가치를 가질 수 있도록 노력하고 있습니다.
        </p>
        <p>
          <strong>음악</strong>의 장르를 가리진 않지만 클래식이 음악의
          정점이라고 생각하며 그 중에서도 모차르트를 들을 때 가장 행복합니다.
          모차르트가 없는 삶은 상상할 수조차 없어요. 아인슈타인이 죽음을 그렇게
          정의했다죠. 죽는다는 것은 곧 모차르트를 듣지 못하는 것이라고. 제가
          그렇습니다. 하지만 가끔 음악에서 느끼는 이상과 제 삶이 너무 동떨어져
          있다고 느낄 때가 있는데 그럴때마다 음악을 멀리하곤 해요. 그래서
          슬퍼요.
        </p>
        <p>
          <strong>책</strong>을 좋아하지만 정작 책을 많이 읽지는 않는 것 같네요.
          하지만 책이 우리의 삶을 훨씬 더 낫게 만든다고 확신합니다. 삶이
          불안하고 우울할 때 책은 우리에게 위안을 주고 스스로 방향을 찾을 수
          있도록 돕는 것 같아요.
        </p>
        <p>
          <strong>세상</strong>에 도움이 되는 삶을 살고 싶어요. 하지만
          데카르트의 말처럼 세상을 바꾸려는 노력 이전에 자신의 그릇된 욕망을
          다스리는 데 주력하라고 하니 저도 사회에 도움이 되기 이전에 저 자신부터
          먼저 잘 다스려야할 것 같습니다.
        </p>
        <p>
          <strong>인생</strong>의 끝이 어디인지 몰라도 갈 길은 참 멀기만 하네요.
        </p>
      </ContentWrapper>
    </AboutLayout>
  );
};

export default AboutPage;
