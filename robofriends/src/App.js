import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBox from './SearchBox.js';
import CardList from './CardList';
import {robots} from './robots';
class App extends React.Component{ 
  constructor(){
    super()
    this.state = {
      searchField : '',
      robots : robots
    }
  }

  onSearchEnter = (event)=>{
    this.setState(
      {
        searchField : event.target.value
      })
    const  filteredRobo =  robots.filter((robo)=>{
        return(robo.name.toLowerCase().includes(this.state.searchField.toLowerCase()))
    })
    console.log({filteredRobo})
    this.setState({
      robots : filteredRobo}
    )
  }

  render(){
    console.log(robots)
    return(
    <div style = {{align: 'center'}}>
        <h1>RoboFriends</h1>
        <SearchBox change = {this.onSearchEnter} />
          <div >
          <CardList props = {this.state} />
          </div>
   </div>
      )
  }}
  export default App;
  