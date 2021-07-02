import React from 'react';
import Menu from '../menu/Menu';
import './Sidebar.scss';

const Sidebar = ({ isOpen = false, onClose }) => {
  return (
    <aside className={`sidebar ${isOpen ? 'sidebar_opened' : ''}`}>
      <div className="sidebar__container">
        <Menu type="column" mix="sidebar__menu" callback={onClose} />
      </div>
    </aside>
  );
};

export default Sidebar;
