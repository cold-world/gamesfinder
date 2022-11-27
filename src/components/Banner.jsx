import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Banner = () => {
  const { popular, status } = useSelector((state) => state.game);
  const getRandomBanner = (stateArray) => {
    const randomNum = Math.floor(Math.random() * (19 - 0)) + 0;
    const imageAddress = stateArray[randomNum].background_image;
    return imageAddress;
  };
  return (
    <div>
      {status === 'fulfilled' && (
        <StyledBanner src={getRandomBanner(popular)} alt={popular.name} />
      )}
    </div>
  );
};

const StyledBanner = styled.img`
  height: 20rem;
  border-radius: 70px;
  padding: 2rem;
  width: 54vw;
  object-fit: cover;
`;

export default Banner;
