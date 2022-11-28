import React from 'react';
import { useLocation } from 'react-router-dom';

const TitlePage = () => {
  const location = useLocation();
  console.log(location.pathname);

  const titleHandler = () => {
    if (location.pathname === '/') {
      return 'New and tranding';
    } else {
      const str = location.pathname.split('/').pop().split('-').join(' ');
      return str[0].toUpperCase() + str.slice(1);
    }
  };
  return <h2>{titleHandler()}</h2>;
};

export default TitlePage;
