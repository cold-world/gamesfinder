import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Banner = () => {
  const { currentFetchedGames, status } = useSelector((state) => state.game);
  const getRandomBanner = (stateArray) => {
    const randomNum = Math.floor(Math.random() * (19 - 0)) + 0;
    const imageAddress = stateArray[randomNum].background_image;
    return imageAddress;
  };
  return (
    <div>
      {status === 'fulfilled' && (
        <StyledBanner src={getRandomBanner(currentFetchedGames)} alt={currentFetchedGames.name} />
      )}
    </div>
  );
};

const StyledBanner = styled.img`
  height: 22rem;
  border-radius: 100px;
  padding: 0 2rem 0 0;
  width: 50vw;
  object-fit: cover;
`;

export default Banner;
