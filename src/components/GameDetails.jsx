import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resizeImg, deletePtags } from '../utils';

const GameDetails = () => {
  const navigate = useNavigate();
  const { gameDetails, status, screenshots } = useSelector(
    (store) => store.details
  );
  const exitDetailsHandler = (e) => {
    const element = e.target;
    if (element.classList.contains('wrapper')) {
      document.body.style.overflow = 'auto';
      navigate('/');
    }
  };
  return (
    <>
      {status === 'fulfilled' && (
        <Wrapper className='wrapper' onClick={exitDetailsHandler}>
          <StyledDetails
            style={{
              background: `url(${gameDetails.background_image})`,
            }}
          >
            <h2>{gameDetails.name}</h2>
            <img src={resizeImg(gameDetails.background_image, 640)} alt={gameDetails.name} />
            <h3>About</h3>
            <p>{deletePtags(gameDetails.description)}</p>
            {screenshots.map((screen) => (
              <img key={screen.id} src={resizeImg(screen.image, 640)} />
            ))}
          </StyledDetails>
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  min-height: 100vh;
  max-height: calc(100vh - 200px);
  overflow-y: auto;
  box-shadow: inset 0 0 0 150vw rgba(0, 0, 0, 0.4);
`;

const Div = styled.div`
  max-width: 60%;
`;

const StyledDetails = styled(motion.div)`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 80%;
  margin: auto;
  border-radius: 1rem;
  padding: 2rem 4rem;
  color: white;
  min-height: 100vh;
  overflow-y: initial;
  backdrop-filter: blur(4px);
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.9);
  box-shadow: inset 0 0 0 150vw rgba(0, 0, 0, 0.7);

  img {
    width: 80%;
  }
`;

export default GameDetails;
