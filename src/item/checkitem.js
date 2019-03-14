import React, { Component } from 'react';

import './item.css';
import Item from './item'

class CheckItem extends Item {
    
    render() {

        return (
            <div className="item check-item">
                <label>{this.props.label}</label>
                {this.props.items.map(item => {
                    return (
                        <div>
                            <input type="checkbox" name="some" value="1" /> {item}
                        </div>    
                    )
                })}
            </div>
        );
    }
}

export default CheckItem;