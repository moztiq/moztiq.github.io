import { Link } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';
import { IGalleryProps } from '../../interface/interfaces';
import { shakeVariant } from '../../constants/animation.constant';
import { motion } from 'framer-motion';

const Gallery = styled(motion.li)<{ image: string }>`
  background-image: url(${(props) => props.image});
  background-size: cover;
  box-shadow: 0 2px 3px 1px rgba(0, 0, 0, 0.15);
  border-radius: 0.5rem;
  transition: all 0.2s;
  height: 200px;

  &:hover {
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.35);
  }
`;

const Title = styled.span`
  margin-top: 20px;
  padding: 0 10px;
  line-height: 2.5;
  font-size: 0.85rem;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  color: ${(props) => props.theme.colors.white};
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 0.5rem 0.5rem 0 0;
`;

export default function GalleryCard({ gallery }: { gallery: IGalleryProps }) {
  return (
    <Link to={`/gallery/${gallery.slug}`}>
      <Gallery {...shakeVariant} image={gallery.headerImage.url}>
        <Title>{gallery.title}</Title>
      </Gallery>
    </Link>
  );
}
