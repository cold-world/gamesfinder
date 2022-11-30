const baseUrl = `https://api.rawg.io/api/games`;
const apiKey = `key=${import.meta.env.VITE_API_KEY}`;

const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else return month;
};
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else return day;
};

const currentMonth = getCurrentMonth();
const currentYear = new Date().getFullYear();
const currentDay = getCurrentDay();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const currentDateMonthAgo = `${currentYear}-${currentMonth - 1}-${currentDay}`;
const nextDateMonth = `${currentYear}-${currentMonth + 1}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

export const newsTranding = (page) =>
  `${baseUrl}?${apiKey}&dates=${currentDateMonthAgo},${nextYear}&order=rating&page_size=20&page=${page}`;

export const newLast30Days = (page) =>
  `${baseUrl}?${apiKey}&dates=${currentDateMonthAgo},${currentDate}&order=rating&page_size=20&page=${page}`;

export const newNext30Days = (page) =>
  `${baseUrl}?${apiKey}&dates=${currentDate},${nextDateMonth}&order=rating&page_size=20&page=${page}`;

export const bestOfTheYear = (page) =>
  `${baseUrl}?${apiKey}&dates=${lastYear},${currentDate}&order=rating&page_size=20&page=${page}`;

export const bestOfTheLastYear = (page) =>
  `${baseUrl}?${apiKey}&dates=${currentYear-1}-01-01,${currentYear-1}-12-31&order=rating&page_size=20&page=${page}`;

  export const allTimeTop = (page) =>
  `${baseUrl}?${apiKey}&dates=1980-01-01,${currentYear},${currentDate}&order=rating&page_size=20&page=${page}`;
  
  export const filterPC = (page) =>
  `${baseUrl}?${apiKey}&dates=1995-01-01,${currentYear},${currentDate}&order=rating&platforms=0&page_size=20&page=${page}`;
  
  export const filterPlaystation5 = (page) =>
  `${baseUrl}?${apiKey}&dates=1980-01-01,${currentYear},${currentDate}&order=rating&platforms=1&page_size=20&page=${page}`;
  
  export const filterXbox = (page) =>
  `${baseUrl}?${apiKey}&dates=2010-01-01,${currentYear},${currentDate}&order=rating&platforms=2&page_size=20&page=${page}`;
  
  export const filterPlaystation4 = (page) =>
  `${baseUrl}?${apiKey}&dates=1980-01-01,${currentYear},${currentDate}&order=rating&platforms=3&page_size=20&page=${page}`;
  
  export const filterNintendo = (page) =>
  `${baseUrl}?${apiKey}&dates=1980-01-01,${currentYear},${currentDate}&order=rating&platforms=5&page_size=20&page=${page}`;
  
  export const search = (page, search) =>
  `${baseUrl}?${apiKey}&dates=1980-01-01,${currentYear},${currentDate}&order=rating&search=${search}&page_size=20&page=${page}`;

export const gameDetails = (id) => `${baseUrl}/${id}?${apiKey}`;
export const gameScreenshots = (id) => `${baseUrl}/${id}/screenshots?${apiKey}`;
