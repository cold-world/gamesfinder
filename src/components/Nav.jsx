import React from 'react';
import styled from 'styled-components';
import { fetchGames, reloadGames } from '../gameSlicer';
import { newLast30Days, bestOfTheYear } from '../api';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';

const Nav = ({ setPageNumber }) => {
  const { currentFetchUrl } = useSelector((state) => state.game);
  const pageSetup = (num) => {
    currentFetchUrl.slice(0, -1) + num;
  };
  const dispatch = useDispatch();
  const fetchGamesHandler = () => {
    setPageNumber(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    switch (key) {
      case value:
        
        break;
    
      default:
        break;
    }
    dispatch(reloadGames(bestOfTheYear(1)));
  };

  return (
    <StyledNav>
      <div className='logo'>
        <Link to='/'>
          <h2 onClick={fetchGamesHandler}>GamesFinder</h2>
        </Link>
      </div>
      <Menu>
        <ul>
          <Link to='/'>
            <li onClick={fetchGamesHandler}>
              <h3>Home</h3>
            </li>
          </Link>
          <li>
            <h3>New Releases</h3>
          </li>
          <Link href='/discover/last-30-days'>
            <li onClick={fetchGamesHandler}>
              <p>Last 30 days</p>
            </li>
          </Link>
          <Link to='/'>
            <li>
              <p>This week</p>
            </li>
          </Link>
          <Link to='/'>
            <li>
              <p>Next week</p>
            </li>
          </Link>
          <Link to='/'>
            <li>
              <h3>Top</h3>
            </li>
          </Link>
          <Link to='/discover/best-of-the-year'>
            <li onClick={fetchGamesHandler}>
              <p>Best of the year</p>
            </li>
          </Link>
          <Link to='/'>
            <li>
              <p>Popular in</p>
            </li>
          </Link>
          <Link to='/'>
            <li>
              <p>All time top 250</p>
            </li>
          </Link>
          <Link to='/'>
            <li>
              <h3>All games</h3>
            </li>
          </Link>
          <Link to='/'>
            <li>
              <h3>Platforms</h3>
            </li>
          </Link>
          <Link to='/'>
            <li>
              <p>PC</p>
            </li>
          </Link>
          <Link to='/'>
            <li>
              <p>PlayStation 4</p>
            </li>
          </Link>
          <Link to='/'>
            <li>
              <p>PlayStation 5</p>
            </li>
          </Link>
          <Link to='/'>
            <li>
              <p>Xbox One</p>
            </li>
          </Link>
          <Link to='/'>
            <li>
              <p>Nintendo Switch</p>
            </li>
          </Link>
        </ul>
      </Menu>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: fixed;
  float: left;
  background: white;
  width: 12%;
  padding: 2rem;
  h2 {
    font-size: 2rem;
    font-family: 'Carter One', sans-serif;
  }
  li {
    margin-bottom: 1.5rem;
  }
`;

const Menu = styled.div`
  margin-top: 3rem;
`;

export default Nav;
