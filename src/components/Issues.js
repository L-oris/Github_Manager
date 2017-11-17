import React from 'react'

export default function Issues (props){
  return props.issues.map(issue=>(
    <li
      className="commit"
      key={issue.id}
      onClick={e => props.handleClickedIssue(issue.id)}
    >
      <p className="commit__title">
        {issue.name}
      </p>

      <img
        className="commit__star"
        src={issue.open ? '/icon-star-fill.svg' : '/icon-star-empty.svg'}
        alt="filled star"
      />
    </li>
  ))
}
