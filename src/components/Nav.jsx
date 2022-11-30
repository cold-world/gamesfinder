import React from 'react';
import styled from 'styled-components';
import { reloadGames } from '../gameSlicer';
import {
  newLast30Days,
  bestOfTheYear,
  newsTranding,
  newNext30Days,
  bestOfTheLastYear,
  allTimeTop,
  filterPlaystation5,
  filterPlaystation4,
  filterNintendo,
} from '../api';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Nav = ({ setPageNumber, open }) => {
  // const { currentFetchUrl } = useSelector((state) => state.game);
  // const pageSetup = (num) => {
  //   currentFetchUrl.slice(0, -1) + num;
  // };
  const dispatch = useDispatch();
  const fetchGamesHandler = (url) => {
    setPageNumber(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    dispatch(reloadGames(url(1)));
  };

  return (
    <StyledNav open={open}>
      <Logo className='logo'>
        <Link to='/'>
          <h2 onClick={() => fetchGamesHandler(newsTranding)}>GamesFinder</h2>
        </Link>
      </Logo>
      <Menu>
        <ul>
          <Link to='/'>
            <li onClick={() => fetchGamesHandler(newsTranding)}>
              <h3>Home</h3>
            </li>
          </Link>
          <li>
            <h3>New Releases</h3>
          </li>
          <Link to='/last-30-days'>
            <li onClick={() => fetchGamesHandler(newLast30Days)}>
              <p>Last 30 days</p>
            </li>
          </Link>
          <Link to='/next-30-days'>
            <li onClick={() => fetchGamesHandler(newNext30Days)}>
              <p>Next 30 days</p>
            </li>
          </Link>

          <li>
            <h3>Top</h3>
          </li>
          <Link to='/best-of-the-year'>
            <li onClick={() => fetchGamesHandler(bestOfTheYear)}>
              <p>Best of the year</p>
            </li>
          </Link>
          <Link to='/popular-in-last-year'>
            <li onClick={() => fetchGamesHandler(bestOfTheLastYear)}>
              <p>Popular in {new Date().getFullYear() - 1}</p>
            </li>
          </Link>
          <Link to='/all-games'>
            <li onClick={() => fetchGamesHandler(allTimeTop)}>
              <h3>All games</h3>
            </li>
          </Link>
          <li>
            <h3>Platforms</h3>
          </li>
          {/* <Link to='/pc-games'>
            <li onClick={() => fetchGamesHandler(filterPC)}>
              <p>PC</p>
            </li>
          </Link> */}
          <Link to='/playstation-4-games'>
            <li onClick={() => fetchGamesHandler(filterPlaystation4)}>
              <p>PlayStation 4</p>
            </li>
          </Link>
          <Link to='/playstation-5-games'>
            <li onClick={() => fetchGamesHandler(filterPlaystation5)}>
              <p>PlayStation 5</p>
            </li>
          </Link>
          {/* <Link to='/xbox-one-games'>
            <li onClick={() => fetchGamesHandler(filterXbox)}>
              <p>Xbox One</p>
            </li>
          </Link> */}
          <Link to='/nintendo-switch-games'>
            <li onClick={() => fetchGamesHandler(filterNintendo)}>
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
  padding: 2rem 2rem;
  @media screen and (max-width: 1460px) {
    padding: 2rem 0 0 2rem;
  }
  @media screen and (max-width: 1200px) {
    z-index: 1000;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
    transition: transform 0.3s ease-in-out;
    min-width: 15rem;
  }
  h2 {
    font-size: 2rem;
    font-family: 'Carter One', sans-serif;
  }
  li {
    margin-bottom: 1.5rem;
  }
`;
const Logo = styled.div`
  @media screen and (max-width: 1200px) {
  margin-top: 5rem;
  h2 {
    font-size: 1.5rem;
  }
  }
  @media screen and (max-width: 560px) {
    margin-top: 2rem;
  }

`;

const Menu = styled.div`
  margin-top: 3rem;
  @media screen and (max-width: 1200px) {
    margin-top: 5rem;
  }
  @media screen and (max-width: 560px) {
    margin-top: 2rem;
    h3 {
      font-size: 1rem;
    }
    overflow-y: scroll;
  }

`;

export default Nav;
