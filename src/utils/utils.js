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
