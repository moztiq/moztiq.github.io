export enum Category {
  ABOUT = 'about',
  BOOK = 'book',
  TECH = 'tech',
  QUOTE = 'quote',
  MUSIC = 'music',
}

export const SectionTitle = (category: string) => {
  if (category == Category.ABOUT) {
    return '나, MOZTIQ';
  } else if (category == Category.MUSIC) {
    return '음악은 나의 열정';
  } else if (category == Category.BOOK) {
    return '책은 나의 힘';
  } else if (category == Category.TECH) {
    return '기술은 나의 도구';
  } else if (category == Category.QUOTE) {
    return '짧은 글, 긴 여운';
  }
  return '';
};
