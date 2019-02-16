import React from 'react';

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
              <a
                href={link.url}
                className="nav-link"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </SideBarWrapper>
  );
}
