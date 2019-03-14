import React, { Component } from 'react';

import Concept from '../concept/concept';
import './conceptlist.css';

class ConceptList extends Component {


    onDrag = (event, todo) => {
        event.preventDefault();
        this.setState({
          draggedTask: todo
        });
      }
    
      onDragOver = (event) => {
        event.preventDefault();
      }
    
      onDrop = (event ) => {
        const { completedTasks, draggedTask, todos } = this.state;
        this.setState({
          completedTasks: [...completedTasks, draggedTask],
          todos: todos.filter(task => task.taskID !== draggedTask.taskID),
          draggedTask: {},
        })
      }

    render() {
        var { values } = this.props;

        return (
            <div className="ConceptList">
                <h2>ART-DECOR Concepts</h2>
                <ul>
                {values.map(item => {
                    
                    return(<Concept key={item.id} draggable item={item} onDrag={(event) => this.onDrag(event, item)}/>);
                })}
                </ul>
                
            </div>
        );
    }

}

export default ConceptList;

