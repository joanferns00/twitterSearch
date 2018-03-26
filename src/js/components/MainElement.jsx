import React, {Component} from 'react';
import {render} from 'react-dom';
import ListElement from './ListElement';
import Testcomponent from './myStylesComponent';
import { debounce } from "throttle-debounce";

//import '../../css/style.css';


export default class MainElement extends Component{
  /*Constructor*/
  constructor(props){
    super(props);
    this.state = {
      inputValue : '',  //input element value
      displayData: [] //tweets results data
     };
    this.twitterSearchDebounced = debounce(500, this.twitterSearch);     
  }

  /**
  Function to handle the change in input value
  **/
   handleInputChange(e){
    //Update the state of the input value
    this.setState({inputValue: e.target.value}, ()=>{
      this.twitterSearchDebounced(this.state.inputValue)
    });   
  }  

  twitterSearch(val){
    //Call the search API to render results
    console.log('Going to search', val)
    fetch('https://aalibaabaa-twitter-api.herokuapp.com/api/twitter/search/'+val)
    .then(results=>{
      return results.json();
    }).then(data=>{
            console.log('Got back data', val, data);
          this.setState({displayData : val === ' ' || val === '' ? [] : data.statuses})
    });
  }

  /*handleInputChange(e){
    //Update the state of the input value
    this.setState({inputValue: e.target.value});

    //Call the search API to render results
    console.log('Going to search', e.target.value)
    fetch('https://aalibaabaa-twitter-api.herokuapp.com/api/twitter/search/'+e.target.value)
    .then(results=>{
      return results.json();
    }).then(data=>{
            console.log('Got back data', this.state.inputValue, data);
          this.setState({displayData : this.state.inputValue === ' ' || this.state.inputValue === '' ? [] : data.statuses})
    })    
    
  }*/

  //TODO: Navigate list with up and down arrow
  handleKeyPressChange(event){
    /*if(event.keyCode === 38){
      console.log('keyup');
      //Highlight the first li element
      this.setState({highlightIndex: this.state.highlightIndex-1})

    }
    if(event.keyCode === 40){
      console.log('keydown');
      this.setState({highlightIndex: this.state.highlightIndex+1})

    }  */
  }

  /* Function to render the tweet result into component ListElement*/
  renderList(){
    //If the highlightIndex === index, add a class name to change the text color.
    const listItems = this.state.displayData.map((item, index, arr) => <ListElement 
      key={index} 
      value={item['text']} />);
    return (<div className="searchResults">
      <ul className="ul-style">{listItems}</ul></div>);    
  }


  handleSearch(){
    console.log('Going to search', this.state.inputValue)
    fetch('https://aalibaabaa-twitter-api.herokuapp.com/api/twitter/search/'+this.state.inputValue)
    .then(results=>{
console.log('Results ', results)
          return results.json();
    }).then(data=>{
          this.setState({displayData : this.state.inputValue === ' ' || this.state.inputValue === '' ? [] : data.statuses})
         console.log('Got back data', data);
    })
  }

  /**
   render function
  **/
  render(){
    return (<div>
              <h1>See whats happening right now</h1>
                <div>
                  <input type='text' 
                      value={this.state.inputValue} 
                      placeholder='Enter search term' 
                      onChange={this.handleInputChange.bind(this)}
                      onKeyDown={this.handleKeyPressChange.bind(this)}                  
                  />
                  {this.renderList()}
                </div>
            </div>)
  }
}