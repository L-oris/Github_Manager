import React, {Component} from 'react'
import uuid from 'uuid'
import Issues from './Issues'

export default class Board extends Component {

  groupIssuesByDate(issues){
    return issues.length
    ? issues.reduce((a,b)=>{
      a[b.date] = a[b.date] || []
      a[b.date].push(b)
      return a
    }, {})
    : []
  }

  renderIssues(groupedIssues){
    return Object.keys(groupedIssues).map(date => {
      return (
        <div key={uuid()}>
          <p className="date">{date}</p>
          <Issues
            issues={groupedIssues[date]}
            handleClickedIssue={this.props.handleClickedIssue}
          />
        </div>
      )
    })
  }

  render(){
    const {issues} = this.props
    const groupedIssues = this.groupIssuesByDate(issues)
    return this.renderIssues(groupedIssues)
  }

}
