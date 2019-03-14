import React, { Component } from 'react';

import './item.css';
import Item from './item'

class TextItem extends Item {
    
    render() {
        return (
            <div className="item text-item">
                <label>{this.props.label}</label>
                <input />
            </div>
        );
    }
}

export default TextItem;