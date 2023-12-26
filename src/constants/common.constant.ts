import {
  faBookOpen,
  faFlask,
  faHammer,
  faQuoteLeft,
  faSmile,
} from '@fortawesome/free-solid-svg-icons';
import { faItunesNote } from '@fortawesome/free-brands-svg-icons';

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
    return 'AI 와 춤을';
  } else if (category == Category.LAB) {
    return '실험실';
  }
  return '';
};
export const SectionIcon = (category: string) => {
  if (category == Category.MUSIC) {
    return faItunesNote;
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
