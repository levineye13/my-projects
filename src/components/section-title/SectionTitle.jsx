import React from 'react';
import './SectionTitle.scss';

const SectionTitle = function ({text, className}) {
  return (
		<h2 className={`section-title ${className}`}>{text}</h2>
  )
}

export default SectionTitle;