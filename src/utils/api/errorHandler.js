export const handleError = (err) => {
  if (err.responce) {
    console.error(`Ошибка: ${err.responce.status} - ${err.responce.data}`);
  } else {
    console.error(`Ошибка: ${err.message}`);
  }
};
