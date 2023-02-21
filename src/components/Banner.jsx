import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { getBannerUrl } from '../gameSlicer';

const Banner = () => {
  const { currentFetchedGames, status } = useSelector((state) => state.game);
  const getRandomBanner = () => {
    if (status === 'fulfilled') {
      const randomNum = Math.floor(Math.random() * (18 - 1)) + 1;
      const imageAddress = currentFetchedGames[randomNum].background_image;
      return imageAddress;
    } else return '';
  };

  const src = getRandomBanner();

  return (
    <BannerWrapper>
      {currentFetchedGames && <StyledBanner src={src} alt={currentFetchedGames.name} />}
    </BannerWrapper>
  );
};

const StyledBanner = styled.img`
  height: 22rem;
  border-radius: 100px;
  padding: 0 2rem 0 0;
  width: 50vw;
  object-fit: cover;
`;
const BannerWrapper = styled.div`
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export default Banner;
