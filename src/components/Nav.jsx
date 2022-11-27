import React from 'react';
import styled from 'styled-components';

const Nav = () => {
  return (
    <StyledNav>
      <div className='logo'>
        <a href='/'>
          <h2>GamesFinder</h2>
        </a>
      </div>
      <Menu>
        <ul>
          <a href='/'>
            <li>
              <h3>Home</h3>
            </li>
          </a>
          <a href='/'>
            <li>
              <h3>New Releases</h3>
            </li>
          </a>
          <a href='/'>
            <li>
              <p>Last 30 days</p>
            </li>
          </a>
          <a href='/'>
            <li>
              <p>This week</p>
            </li>
          </a>
          <a href='/'>
            <li>
              <p>Next week</p>
            </li>
          </a>
          <a href='/'>
            <li>
              <h3>Top</h3>
            </li>
          </a>
          <a href='/'>
            <li>
              <p>Best of the year</p>
            </li>
          </a>
          <a href='/'>
            <li>
              <p>Popular in</p>
            </li>
          </a>
          <a href='/'>
            <li>
              <p>All time top 250</p>
            </li>
          </a>
          <a href='/'>
            <li>
              <h3>All games</h3>
            </li>
          </a>
          <a href='/'>
            <li>
              <h3>Platforms</h3>
            </li>
          </a>
          <a href='/'>
            <li>
              <p>PC</p>
            </li>
          </a>
          <a href='/'>
            <li>
              <p>PlayStation 4</p>
            </li>
          </a>
          <a href='/'>
            <li>
              <p>Xbox One</p>
            </li>
          </a>
          <a href='/'>
            <li>
              <p>Nintendo Switch</p>
            </li>
          </a>
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
  margin-top: 5rem;
`;

export default Nav;
