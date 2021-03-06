import React, { Component } from 'react';

import './item.css';
import Item from './item'

class RadioItem extends Item {
    
    render() {

        return (
            <div className="item radio-item">
                <label>{this.props.label}</label>
                {this.props.items.map(item => {
                    return (
                        <div>
                            <input type="radio" name="some" value="1" /> {item}
                        </div>    
                    )
                })}
            </div>
        );
    }
}

export default RadioItem;