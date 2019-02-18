import React from 'react';
import { NavLink } from 'react-router-dom';

// Implemented Components
import SideBarWrapper from 'components/SideBar/SideBarWrapper';

export default function SideBar() {
  const links = [
    {
      url: '/dashboard',
      text: 'Dashboard',
    },
    {
      url: '/inventory',
      text: 'Inventory',
    },
    {
      url: '/customers',
      text: 'Customers',
    },
  ];

  return (
    <SideBarWrapper>
      <nav className="sidebar">
        <ul className="nav">
          {links.map((link, index) => (
            <li
              key={index}
              className="nav-item"
            >
              <NavLink
                to={link.url}
                className="nav-link"
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </SideBarWrapper>
  );
}
