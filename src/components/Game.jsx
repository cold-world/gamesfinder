import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fetchGameDitails, fetchGameScreenshots } from '../detailsSlicer';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { resizeImg } from '../utils';

const Game = ({ name, image, platforms, rating, id }) => {
  const dispatch = useDispatch();
  const showDetailsHandler = () => {
    document.body.style.overflow = 'hidden';
    dispatch(fetchGameDitails(id));
    dispatch(fetchGameScreenshots(id));
  };
  return (
    <StyledGame onClick={showDetailsHandler}>
      <Link to={`/game/${id}`}>
        <img src={resizeImg(image, 640)} alt='name' />
        {platforms &&
          platforms.map((item) => (
            <span key={item.platform.name}>{item.platform.name}</span>
          ))}
        <p>Rating: {rating}</p>
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
`;

export default Game;
