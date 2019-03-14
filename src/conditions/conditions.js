import React, { Component } from 'react';

import './conditions.css';

class Conditions extends Component {
    render() {
        return (
            <div className="Conditions">
                <h2>Sweet Conditions</h2>
                <h3>Question 1</h3>
                <ul>
                    <li>greater than 8</li>
                </ul>
                <h3>Question 2</h3>
                <ul>
                    <li>Left</li>
                </ul>
            </div>
        );
    }
}

export default Conditions;