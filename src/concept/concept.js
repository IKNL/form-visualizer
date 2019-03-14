import React, { Component } from 'react';
import { Draggable } from "react-beautiful-dnd";


import './concept.css';

const grid = 8;
const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,
  
    // change background colour if dragging
    background: isDragging ? "lightgreen" : "grey",
  
    // styles we need to apply on draggables
    ...draggableStyle
  });
  

class Concept extends Component {
    
    render() {
        var { item } = this.props;
        return(

            <Draggable key={item.id} draggableId={item.id} index={item.id}>
                {(provided, snapshot) => (
                <div
                    className="Concept"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                    snapshot.isDragging,
                    provided.draggableProps.style
                    )}
                >
                    {item.name}
                </div>
                )}
          </Draggable>
        );
    }
}

export default Concept;

