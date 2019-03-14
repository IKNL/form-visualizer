import React, { Component } from 'react';

import './item.css';
import Item from './item'

class ItemGroup extends Item {
    
    render() {

        return (
            <div className="item item-group">
                <h2>{this.props.label}</h2>
                {this.props.children}
            </div>
        );
    }
}

export default ItemGroup;