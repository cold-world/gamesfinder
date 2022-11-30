import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGames, reloadGames } from '../gameSlicer';
import { useEffect } from 'react';
import Game from '../components/Game';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Spinner from '../components/Spinner';
import GameDetails from '../components/GameDetails';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useLocation } from 'react-router-dom';
import Banner from '../components/Banner';
import { newsTranding, search } from '../api';
import Nav from '../components/Nav';
import TitlePage from '../components/TitlePage';
import Burger from '../components/Burger';
import { details } from '../detailsSlicer';

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
  const { disableTitle } = useSelector(
    (state) => state.details
  );
  const [pageNumber, setPageNumber] = useState(2);
  const [input, setInput] = useState('');
  const [open, setOpen] = useState(false);
  const pageNumberCounter = () => {
    currentFetchUrl;
    setPageNumber(pageNumber + 1);
    const pageSetup = () => currentFetchUrl.slice(0, -1) + pageNumber;
    dispatch(fetchGames(pageSetup()));
  };
  const searchHandler = (e) => {
    e.preventDefault();
    dispatch(reloadGames(search(1, input)));
    setInput('');
  };

  return (
    <>
      <Nav open={open} setPageNumber={setPageNumber} />
      <Burger open={open} setOpen={setOpen} />
      <GamesContainer>
        {status === 'pending' && <Spinner />}
        {error && <h2>{error}</h2>}
        <TextInputBanner>
          <TextAndInput>
            <form onSubmit={searchHandler} action='submit'>
              <input
                value={input}
                onChange={(e) => setInput(e.currentTarget.value)}
                type='text'
              />
            </form>
            <TitlePage location={location} disableTitle={disableTitle} />

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
  @media screen and (max-width: 1200px) {
    margin-left: 3rem;
    padding-left: 2rem;
  }
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
  @media screen and (max-width: 1200px) {
    justify-content: center;
    padding-right: 2rem;
  }
`;

const TextAndInput = styled.div`
  @media screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 2rem;
  padding: 2rem 2rem;
  @media screen and (max-width:560px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  
  }

`;

export default Home;
