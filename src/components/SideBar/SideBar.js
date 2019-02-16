import React from 'react';
import { Link } from 'react-router-dom';

// Implemented Components
import SideBarWrapper from 'components/SideBar/SideBarWrapper';

export default function SideBar() {
  const links = [
    {
      url: '/',
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
      <nav className="sidebar bg-light">
        <ul className="nav flex-column">
          {links.map((link, index) => (
            <li
              key={index}
              className="nav-item"
            >
              <Link
                to={link.url}
                className="nav-link"
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </SideBarWrapper>
  );
}
