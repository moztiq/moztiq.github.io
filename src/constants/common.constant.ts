import {
  faBookOpen,
  faFlask,
  faHammer,
  faMusic,
  faQuoteLeft,
  faSmile,
} from '@fortawesome/free-solid-svg-icons';

export enum Category {
  ABOUT = 'about',
  BOOK = 'book',
  TECH = 'tech',
  QUOTE = 'quote',
  MUSIC = 'music',
  AI = 'ai',
  LAB = 'lab',
}

export const SectionTitle = (category: string) => {
  if (category == Category.ABOUT) {
    return '나, MOZTIQ';
  } else if (category == Category.MUSIC) {
    return '음악은 나의 영혼';
  } else if (category == Category.BOOK) {
    return '책은 나의 힘';
  } else if (category == Category.TECH) {
    return '기술은 나의 도구';
  } else if (category == Category.QUOTE) {
    return '짧은 글, 긴 여운';
  } else if (category == Category.AI) {
    return 'Dances with AI';
  } else if (category == Category.LAB) {
    return '실험실';
  }
  return '';
};

export const SectionDescription = (category: string) => {
  if (category == Category.ABOUT) {
    return 'MOZTIQ 은 Mozart 가 비창 (Pathetique) 이라는 제목의 곡을 작곡했다면 어땠을까 라고 생각하며 만든 닉네임입니다.';
  } else if (category == Category.MUSIC) {
    return '제 마음 속엔 언제나 음악이 있습니다. 음악과 함께할 때만큼 벅찬 감동을 느껴본 적이 없는 것 같아요.';
  } else if (category == Category.BOOK) {
    return '책이 없었다면 지금의 나보다 더 나은 사람은 되지 못했을 거예요. 언제든 책을 곁에 두면 힘이 납니다.';
  } else if (category == Category.TECH) {
    return '기술에 대한 깊이가 부족해 항상 허덕입니다. 기록해두면 조금 나아지지 않을까 싶어요.';
  } else if (category == Category.QUOTE) {
    return '때론 짧은 시 한편, 누군가의 한마디, 책 속의 짧은 글귀만으로 가슴이 벅찰 때가 있습니다. 그런 글을 찾아 모아두고 싶었어요.';
  } else if (category == Category.AI) {
    return 'AI 때문에 요즘 정신 못차리고 있습니다. 급변하는 세상에 동참하려면 AI 와 좀 친해져야 할 것 같아요.';
  } else if (category == Category.LAB) {
    return '해야할 것도 많고 알아야할 것도 많고 하고싶은 것도 많네요. 해야지 하고 맘 속에만 담아두었던 것들을 꺼내어 하나씩 시도해 봅니다.';
  }
  return '';
};

export const SectionIcon = (category: string) => {
  if (category == Category.MUSIC) {
    return faMusic;
  } else if (category == Category.BOOK) {
    return faBookOpen;
  } else if (category == Category.TECH) {
    return faHammer;
  } else if (category == Category.QUOTE) {
    return faQuoteLeft;
  } else if (category == Category.LAB) {
    return faFlask;
  }
  return faSmile;
};
