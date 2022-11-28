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
import { newsTranding, newLast30Days, bestOfTheYear } from '../api';
import Nav from '../components/Nav';
import TitlePage from '../components/TitlePage';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGames(newsTranding(1)));
  }, []);

  const location = useLocation();
  const pathId = location.pathname.split('/')[2];
  const { currentFetchedGames, status, error, currentFetchUrl } = useSelector(
    (state) => state.game
  );
  const [pageNumber, setPageNumber] = useState(2);
  const pageNumberCounter = async () => {
    await currentFetchUrl;
    setPageNumber(pageNumber + 1);
    const pageSetup = () => currentFetchUrl.slice(0, -1) + pageNumber;
    dispatch(fetchGames(pageSetup()));
  };
  return (
    <>
      <Nav setPageNumber={setPageNumber} />
      <GamesContainer>
        {status === 'pending' && <Spinner />}
        {error && <h2>{error}</h2>}
        <TextInputBanner>
          <TextAndInput>
            <form action='submit'>
              <input type='text' />
            </form>
            <TitlePage location={location} />
          </TextAndInput>
            <Banner />
        </TextInputBanner>
        {pathId && <GameDetails />}
        <InfiniteScroll
          dataLength={currentFetchedGames.length}
          next={pageNumberCounter}
          hasMore={true}
          pullDownToRefreshThreshold={50}
        >
          <Games>
            {currentFetchedGames &&
              currentFetchedGames.map((game) => (
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
    width: 95%;
    border-radius: 20px;
    height: 40px;
    padding: 1rem;
    font-size: 1.5rem;
    font-family: 'Roboto', sans-serif;
    box-shadow: 5px 0px 10px rgba(0, 0, 0, 0.2);
  }
`;
const TextInputBanner = styled.div`
display: flex;
justify-content: space-between;
`;

const TextAndInput = styled.div`
`
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 2rem;
  padding: 2rem 2rem;
`;

export default Home;
