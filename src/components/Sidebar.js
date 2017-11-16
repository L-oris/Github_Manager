import React from 'react'

export default function Sidebar (props){

  return (
    <div className="sidebar">
      <ul className="os-buttons">
        <li></li>
        <li></li>
        <li></li>
      </ul>

      <ul className="menu">
        <li className="menu--highlight">
          <div className="menu__title">
            <img src="./assets/icon-github.svg"/>
            <h4>All</h4>
          </div>
          <h4 className="menu__number">
            12
          </h4>
        </li>

        <li className="menu__item">
          <div className="menu__title">
            <img src="./assets/icon-open-issue.svg"/>
            <h4>Open</h4>
          </div>
          <h4 className="menu__number">
            8
          </h4>
        </li>

        <li className="menu__item">
          <div className="menu__title">
            <img src="./assets/icon-closed-issue.svg"/>
            <h4>Closed</h4>
          </div>
          <h4 className="menu__number">
            4
          </h4>
        </li>
      </ul>
    </div>
  )

}
