import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fetchGameDitails, fetchGameScreenshots } from '../detailsSlicer';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { resizeImg } from '../utils';
import { getIconPlatforms, getStarsRating } from '../utils';

const Game = ({ name, image, platforms, rating, id }) => {
  const dispatch = useDispatch();
  const showDetailsHandler = () => {
    document.body.style.overflow = 'hidden';
    dispatch(fetchGameDitails(id));
    dispatch(fetchGameScreenshots(id));
  };

  return (
    <StyledGame
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1, translateY: 20 }}
      initial={{ opacity: 0.7, scale: 0.9 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: { ease: 'easeOut', duration: 0.4 },
      }}
      viewport={{ once: true }}
      onClick={showDetailsHandler}
    >
      <Link to={`/game/${id}`}>
        <img src={resizeImg(image, 640)} alt={name} />
        <Description>
          <Platforms>
            {platforms &&
              platforms.map((item) => (
                <img src={getIconPlatforms(item.platform.name)}></img>
              ))}
          </Platforms>
          <Rating>
            <p>Rating: {getStarsRating(rating)}</p>
          </Rating>
        </Description>
        <h3>{name}</h3>
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  border-radius: 10px;
  background-color: #f6f6f6;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  img {
    border-radius: 10px 10px 0 0;
    width: 100%;
    height: 15rem;
    object-fit: cover;
  }
  h3 {
    padding: 0 2rem 2rem 1rem;
  }
`;
const Description = styled.div`
  display: flex;
  padding: 1rem;
  align-items: center;
  justify-content: space-between;
`;

const Rating = styled.div`
  justify-content: flex-start;
  img {
    width: 1rem;
    height: 1rem;
  }
`;

const Platforms = styled.div`
  img {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.5rem;
  }
`;

export default Game;
