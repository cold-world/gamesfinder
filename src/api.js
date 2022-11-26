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
const currentDateMonthAgo = `${currentYear}-${currentMonth -1}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

export const newsTranding = (page) =>
  `${baseUrl}?${apiKey}&dates=${currentDateMonthAgo},${nextYear}&order=rating&page_size=20&page=${page}`;


export const gameDetails = (id) => `${baseUrl}/${id}?${apiKey}`;
export const gameScreenshots = (id) => `${baseUrl}/${id}/screenshots?${apiKey}`;
export const gameMovies = (id) => `${baseUrl}/${id}/movies?${apiKey}`;

