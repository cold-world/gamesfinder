const baseUrl = `https://api.rawg.io/api/games`;
const apiKey = `key=${import.meta.env.VITE_API_KEY}`;

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, '0');
const currentDay = currentDate.getDate().toString().padStart(2, '0');

const currentDateFormatted = `${currentYear}-${currentMonth}-${currentDay}`;
const currentDateMonthAgo = new Date(currentYear, currentDate.getMonth() - 1, currentDay);
const currentMonthAgoYear = currentDateMonthAgo.getFullYear();
const currentMonthAgoMonth = (currentDateMonthAgo.getMonth() + 1).toString().padStart(2, '0');
const currentMonthAgoDay = currentDateMonthAgo.getDate().toString().padStart(2, '0');
const currentDateMonthAgoFormatted = `${currentMonthAgoYear}-${currentMonthAgoMonth}-${currentMonthAgoDay}`;

const nextDateMonth = new Date(currentYear, currentDate.getMonth() + 1, currentDay);
const nextMonthYear = nextDateMonth.getFullYear();
const nextMonthMonth = (nextDateMonth.getMonth() + 1).toString().padStart(2, '0');
const nextMonthDay = nextDateMonth.getDate().toString().padStart(2, '0');
const nextDateMonthFormatted = `${nextMonthYear}-${nextMonthMonth}-${nextMonthDay}`;

const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;

export const newsTranding = (page) =>
  `${baseUrl}?${apiKey}&dates=${currentDateMonthAgoFormatted},${currentDateFormatted}&order=rating&page_size=20&page=${page}`;

export const newLast30Days = (page) =>
  `${baseUrl}?${apiKey}&dates=${currentDateMonthAgoFormatted},${currentDateFormatted}&order=rating&page_size=20&page=${page}`;

export const newNext30Days = (page) =>
  `${baseUrl}?${apiKey}&dates=${currentDateFormatted},${nextDateMonthFormatted}&order=rating&page_size=20&page=${page}`;

export const bestOfTheYear = (page) =>
  `${baseUrl}?${apiKey}&dates=${lastYear},${currentDateFormatted}&order=rating&page_size=20&page=${page}`;

export const bestOfTheLastYear = (page) =>
  `${baseUrl}?${apiKey}&dates=${currentYear - 1}-01-01,${
    currentYear - 1
  }-12-31&order=rating&page_size=20&page=${page}`;

export const allTimeTop = (page) =>
  `${baseUrl}?${apiKey}&dates=1980-01-01,${currentYear},${currentDateFormatted}&order=rating&page_size=20&page=${page}`;

export const filterPC = (page) =>
  `${baseUrl}?${apiKey}&dates=1995-01-01,${currentYear},${currentDateFormatted}&order=rating&platforms=0&page_size=20&page=${page}`;

export const filterPlaystation5 = (page) =>
  `${baseUrl}?${apiKey}&dates=1980-01-01,${currentYear},${currentDateFormatted}&order=rating&platforms=1&page_size=20&page=${page}`;

export const filterXbox = (page) =>
  `${baseUrl}?${apiKey}&dates=2010-01-01,${currentYear},${currentDateFormatted}&order=rating&platforms=2&page_size=20&page=${page}`;

export const filterPlaystation4 = (page) =>
  `${baseUrl}?${apiKey}&dates=1980-01-01,${currentYear},${currentDateFormatted}&order=rating&platforms=3&page_size=20&page=${page}`;

export const filterNintendo = (page) =>
  `${baseUrl}?${apiKey}&dates=1980-01-01,${currentYear},${currentDateFormatted}&order=rating&platforms=5&page_size=20&page=${page}`;

export const search = (page, search) =>
  `${baseUrl}?${apiKey}&dates=1980-01-01,${currentYear},${currentDateFormatted}&order=rating&search=${search}&page_size=20&page=${page}`;

export const gameDetails = (id) => `${baseUrl}/${id}?${apiKey}`;
export const gameScreenshots = (id) => `${baseUrl}/${id}/screenshots?${apiKey}`;
