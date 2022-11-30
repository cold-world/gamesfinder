import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
const TitlePage = ({disableTitle}) => {
  const location = useLocation();

  const titleHandler = () => {
    if (location.pathname === '/') {
      return 'New and trending';
    } else if (disableTitle) { ''
    } else {
      const str = location.pathname.split('/').pop().split('-').join(' ');
      return str[0].toUpperCase() + str.slice(1);
    }
  };
  return <StyledTitle>{titleHandler()}</StyledTitle>;
};

const StyledTitle = styled.h2`
  @media screen and (max-width:560px) {
    font-size: 2rem;
  }
`

export default TitlePage;
