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

      <ul className="options">
        <li
          className={selectedBoard==='all' ? 'option option--current' : 'option'}
          onClick={e => handleSelectedBoard('all')}
        >
          <div className="option__title">
            <img src="/icon-github.svg" alt="github-icon"/>
            <h4>All</h4>
          </div>
          <h4 className="option__number">
            {props.allIssuesLength}
          </h4>
        </li>

        <li
          className={selectedBoard==='open' ? 'option option--current' : 'option'}
          onClick={e => handleSelectedBoard('open')}
        >
          <div className="option__title">
            <img src="/icon-open-issue.svg" alt="open-icon"/>
            <h4>Open</h4>
          </div>
          <h4 className="option__number">
            {props.openIssuesLength}
          </h4>
        </li>

        <li
          className={selectedBoard==='closed' ? 'option option--current' : 'option'}
          onClick={e => handleSelectedBoard('closed')}
        >
          <div className="option__title">
            <img src="/icon-closed-issue.svg" alt="closed-icon"/>
            <h4>Closed</h4>
          </div>
          <h4 className="option__number">
            {props.closedIssuesLength}
          </h4>
        </li>
      </ul>
    </div>
  )

}
