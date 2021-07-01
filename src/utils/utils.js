export const getAge = (birthday) => {
  if (typeof birthday === 'string') {
    birthday = new Date(birthday);
  }

  let thisYear = 0;
  const currentDate = new Date();

  if (
    currentDate.getMonth() < birthday.getMonth() ||
    (currentDate.getMonth() === birthday.getMonth() &&
      currentDate.getDate() < birthday.getDate())
  ) {
    thisYear = 1;
  }

  return currentDate.getFullYear() - birthday.getFullYear() - thisYear;
};

export const createStars = (quantityStars, starClass = '') => {
  return new Array(quantityStars).fill(null).map(() => {
    const star = {
      className: '',
      style: {
        left: 0,
        top: 0,
      },
    };

    star.className = starClass;
    star.style.left = `${Math.floor(Math.random() * 100)}%`;
    star.style.top = `${Math.floor(Math.random() * 100)}%`;

    return star;
  });
};
