import React, { Component } from 'react';

import './item.css';
import Item from './item'

class ItemWrapper extends Component {
    
    render() {
        return (
            <div className="item item-wrapper">
                <div className="input">
                    {this.props.children}
                </div>
                <div className="connector">
                    
                </div>
            </div>
        );
    }
}

export default ItemWrapper;