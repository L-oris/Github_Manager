import React from 'react'

export default function Sidebar (props){
  const {selectedBoard,handleSelectedBoard} = props
  return (
    <div className="sidebar">
      <ul className="os-buttons">
        <li></li>
        <li></li>
        <li></li>
      </ul>

      <ul className="menu">
        <li
          className={selectedBoard==='all' ? 'menu__item menu__item--current' : 'menu__item'}
          onClick={e => handleSelectedBoard('all')}
        >
          <div className="menu__title">
            <img src="/icon-github.svg" alt="github-icon"/>
            <h4>All</h4>
          </div>
          <h4 className="menu__number">
            {props.allIssuesLength}
          </h4>
        </li>

        <li
          className={selectedBoard==='open' ? 'menu__item menu__item--current' : 'menu__item'}
          onClick={e => handleSelectedBoard('open')}
        >
          <div className="menu__title">
            <img src="/icon-open-issue.svg" alt="open-icon"/>
            <h4>Open</h4>
          </div>
          <h4 className="menu__number">
            {props.openIssuesLength}
          </h4>
        </li>

        <li
          className={selectedBoard==='closed' ? 'menu__item menu__item--current' : 'menu__item'}
          onClick={e => handleSelectedBoard('closed')}
        >
          <div className="menu__title">
            <img src="/icon-closed-issue.svg" alt="closed-icon"/>
            <h4>Closed</h4>
          </div>
          <h4 className="menu__number">
            {props.closedIssuesLength}
          </h4>
        </li>
      </ul>
    </div>
  )

}
