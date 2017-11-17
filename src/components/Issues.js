import React from 'react'

export default function Issues (props){
  return props.issues.map(issue=>(
    <li className="item" key={issue.id}>
      <p className="item__title">
        {issue.name}
      </p>

      <img
        className="item__star"
        src={issue.open ? '/icon-star-fill.svg' : '/icon-star-empty.svg'}
        alt="filled star"
      />
    </li>
  ))
}
