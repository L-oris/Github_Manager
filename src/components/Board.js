import React from 'react'

export default function Sidebar (props){

  return (
    <div className="board">
        <p className="time">18-10-2016</p>

          <li className="item">
            <p className="item__title">
              Fix repo
            </p>

            <img className="item__star" src="/icon-star-fill.svg"/>
          </li>

          <li className="item">
            <p className="item__title">
              Fix 2 repo
            </p>

            <img className="item__star" src="/icon-star-empty.svg"/>
          </li>
    </div>

  )

}
