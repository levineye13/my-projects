import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import translationData from '../../translation';
import './ButtonBack.scss';

const ButtonBack = ({ mix = '' }) => {
  const history = useHistory();
  const language = useSelector((state) => state.language);

  const translation = translationData.about[language];

  return (
    <button
      className={`button-back ${mix}`}
      type="button"
      onClick={history.goBack}
    >
      &larr; {translation.back}
    </button>
  );
};

export default ButtonBack;
