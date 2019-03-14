import React, { Component } from 'react';

import './itemlist.css';

class ItemList extends Component {

    // constructor(props){
    //     beginDrag(props) {
    //         return {
    //           text: props.text
    //         };
    //       }
    // }
    render() {
        var { values } = this.props;

        return (
            
            <ul className="ItemList">
            {values.map(item => {
                return(<li key={item.id}>item: {item.name}</li>)
            })}
            </ul>
            
        );
    }

}

export default ItemList;