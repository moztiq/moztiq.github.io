import * as React from 'react';
import styled from 'styled-components';
import GalleryCard from './GalleryCard';
import { IGalleryProps } from '../../interface/interfaces';

const GalleryListWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  width: 85%;
  a {
    text-decoration: none;
  }
  margin: 30px 0;

  @media screen and (max-width: 1024px) {
    width: 95%;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
  }

  @media screen and (max-width: 430px) {
    width: 95%;
    grid-template-columns: 1fr;
  }
`;

export default function GalleryList(props: { list: IGalleryProps[] }) {
  return (
    <GalleryListWrapper>
      {props.list &&
        props.list.map((gallery: IGalleryProps) => (
          <GalleryCard key={gallery.slug} gallery={gallery} />
        ))}
    </GalleryListWrapper>
  );
}
