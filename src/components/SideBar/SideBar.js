import React from 'react';

import SideBarWrapper from 'components/SideBar/SideBarWrapper';

export default function SideBar() {
  return (
    <SideBarWrapper>
      <nav className="sidebar">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Customers
            </a>
          </li>
        </ul>
      </nav>
    </SideBarWrapper>
  );
}
