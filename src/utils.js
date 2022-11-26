export const resizeImg = (imagePath, newSize) => {
  const image = imagePath.match(/media\/screenshots/)
    ? imagePath.replace(
        'media/screenshots',
        `media/resize/${newSize}/-/screenshots`
      )
    : imagePath.replace('/media/games', `/media/resize/${newSize}/-/games`);
  return image;
};

export const deletePtags = (text) => {
  const newNext = text.replace(/<\/?p[^>]*>/g, '');
  return newNext;
};
