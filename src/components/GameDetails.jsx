import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resizeImg } from '../utils';
import Spinner from '../components/Spinner';
import { clearDetails, disableTitleWhenDetails } from '../detailsSlicer';

const GameDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { gameDetails, status, screenshots, screenStatus, disableTitle } = useSelector(
    (store) => store.details
  );
  const exitDetailsHandler = (e) => {
    const element = e.target;
    if (element.classList.contains('wrapper')) {
      document.body.style.overflow = 'auto';
      navigate('/');
      dispatch(clearDetails());
      dispatch(disableTitleWhenDetails(false));
    }
  };
  return (
    <>
      {screenStatus === 'pending' && <Spinner />}
      {screenStatus === 'fulfilled' && status === 'fulfilled' && (
        <Wrapper className='wrapper' onClick={exitDetailsHandler}>
          <StyledDetails>
            <h2>{gameDetails.name}</h2>
            <img
              src={resizeImg(gameDetails.background_image, 1280)}
              alt={gameDetails.name}
            />
            <h3>About</h3>
            {status === 'fulfilled' && (
              <p>{gameDetails.description}</p>
            )}
            {screenshots.map((screen) => (
              <img key={screen.id} src={resizeImg(screen.image, 1280)} />
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
  box-shadow: inset 0 0 0 150vw rgba(0, 0, 0, 0.5);

  p {
    padding: 2rem 6rem;
  }

  img {
    width: 80%;
    padding-bottom: 3rem;
  }
  @media screen and (max-width:760px) {
  h2 {
    font-size: 2rem;
    padding-bottom: 2rem;
  }
  p{
    padding: 2rem 0rem;
  }
  }
`;

export default GameDetails;
