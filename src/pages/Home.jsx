import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGames } from '../gameSlicer';
import { useEffect } from 'react';
import Game from '../components/Game';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Spinner from '../components/Spinner';
import GameDetails from '../components/GameDetails';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useLocation } from 'react-router-dom';
import Banner from '../components/Banner';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGames());
  }, []);

  const location = useLocation();
  const pathId = location.pathname.split('/')[2];
  const { popular, status, error } = useSelector((state) => state.game);
  const [pageNumber, setPageNumber] = useState(2);
  const pageNumberCounter = () => {
    dispatch(fetchGames(pageNumber));
    setPageNumber(pageNumber + 1);
  };

  return (
    <>
      <GamesContainer>
        {status === 'pending' && <Spinner />}
        {error && <h2>{error}</h2>}
        <form action='submit'>
          <input type='text' />
        </form>
        <TextAndBanner>
          <h2>New and trending</h2>
          <Banner />
        </TextAndBanner>
        {pathId && <GameDetails />}
        <InfiniteScroll
          dataLength={popular.length}
          next={pageNumberCounter}
          hasMore={true}
          pullDownToRefreshThreshold={50}
        >
          <Games>
            {popular &&
              popular.map((game) => (
                <Game
                  key={game.id}
                  id={game.id}
                  name={game.name}
                  image={game.background_image}
                  rating={game.rating}
                  platforms={game.platforms}
                />
              ))}
          </Games>
        </InfiniteScroll>
      </GamesContainer>
    </>
  );
};

const GamesContainer = styled(motion.div)`
  padding: 2.3rem 2rem 0 0;
  margin-left: 14rem;
  h2 {
    padding-left: 2rem;
    padding-top: 3rem;
  }
  input {
    margin-left: 2rem;
    width: 50%;
    border-radius: 20px;
    height: 40px;
    padding: 1rem;
    font-size: 1.5rem;
    font-family: 'Roboto', sans-serif;
  }
`;
const TextAndBanner = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 2rem;
  padding: 2rem 2rem;
`;

export default Home;
