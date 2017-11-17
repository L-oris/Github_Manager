import React from 'react'

export default function Issues (props){
  return props.issues.map(issue=>(
    <li
      className="issue"
      key={issue.id}
      onClick={e => props.handleClickedIssue(issue.id)}
    >
      <p className="issue__title">
        {issue.name}
      </p>

      <img
        className="issue__star"
        src={issue.open ? '/icon-star-fill.svg' : '/icon-star-empty.svg'}
        alt="filled star"
      />
    </li>
  ))
}
