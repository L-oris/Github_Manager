import React, {Component} from 'react'
import Sidebar from './components/Sidebar'
import Board from './components/Board'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      apiData: [],
      selectedBoard: 'all'
    }
    this.handleSelectedBoard = this.handleSelectedBoard.bind(this)
  }

  async componentDidMount(){
    //fetch data from API
    //const apiData = await axios.get('/api')
    const apiData = require('./data.json')
    this.setState({
      apiData
    })
  }

  handleSelectedBoard(selectedBoard){
    this.setState({
      selectedBoard
    })
  }

  render(){
    const {apiData: allIssues, selectedBoard} = this.state
    const openIssues = allIssues.filter(commit => commit.open)
    const closedIssues = allIssues.filter(commit => !commit.open)

    //choose which data to render in 'Board'
    let renderedIssues
    if(selectedBoard==='all') renderedIssues = allIssues
    else if(selectedBoard==='open') renderedIssues = openIssues
    else if(selectedBoard==='closed') renderedIssues = closedIssues

    return (
      <div className="App">

        <Sidebar
          handleSelectedBoard={this.handleSelectedBoard}
          selectedBoard={selectedBoard}
          allIssuesLength={allIssues.length}
          openIssuesLength={openIssues.length}
          closedIssuesLength={closedIssues.length}
        />

        <div className="board">
          <Board
            issues={renderedIssues}
          />
        </div>

      </div>
    )
  }
}

export default App
