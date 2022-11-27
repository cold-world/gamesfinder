import apple from './img/apple.svg';
import gamepad from './img/gamepad.svg';
import logo from './img/logo.svg';
import nintendo from './img/nintendo.svg';
import playstation from './img/playstation.svg';
import steam from './img/steam.svg';
import xbox from './img/xbox.svg';
import gamepadsvg from './img/gamepad.svg';
import ps5 from './img/ps5.svg';
import star from './img/star-full.png';
import starempty from './img/star-empty.png';
import mac from './img/mac.svg';

export const resizeImg = (imagePath, newSize) => {
  try {
    const image = imagePath.match(/media\/screenshots/)
      ? imagePath.replace(
          'media/screenshots',
          `media/resize/${newSize}/-/screenshots`
        )
      : imagePath.replace('/media/games', `/media/resize/${newSize}/-/games`);
    return image;
  } catch (error) {
    return imagePath;
  }
};

export const deletePtags = (text) => {
  const newNext = text.replace(/<\/?p[^>]*>/g, '');
  return newNext;
};

export const getIconPlatforms = (platform) => {
  switch (platform) {
    case 'PC':
      return steam;
    case 'PlayStation 4':
      return playstation;
    case 'PlayStation 5':
      return ps5;
    case 'Nintendo Switch':
      return nintendo;
    case 'Xbox One':
      return xbox;
    case 'iOS':
      return apple;
    case 'macOS':
      return mac;
    default:
      return gamepadsvg;
  }
};

export const getStarsRating = (gameRating) => {
  const stars = [];
  const rating = Math.floor(gameRating);
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<img alt='star' src={star} key={i} />);
    } else {
      stars.push(<img alt='star' src={starempty} key={i} />);
    }
  }
  return stars;
};
