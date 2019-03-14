import React, { Component } from 'react';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import $ from "jquery";

import ConceptList from './conceptlist/conceptlist';
import Editor from './editor/editor';
import Conditions from './conditions/conditions';

import './App.css';

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
  }

  componentDidMount() {
    var url = 'https://oncoguidestudio-dev.azurewebsites.net/api/public/dataitems/15';
    $.get(url).done(data => {
      console.log('received data: ', data);
      this.setState({
        items: data
      })
    })
  }

  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );

    this.setState({
      items
    });
  }

  render() {
    var { items } = this.state;

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
      <div className="App">
        <div className="left">
          <ConceptList values={items} />
        </div>
        <div className="center">
          <Editor />
        </div>
        <div className="right">
          <Conditions incomingQuestions="something" />
        </div>
      </div>
      </DragDropContext>
    );
  }
}

export default App;
