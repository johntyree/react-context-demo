import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends Component {

    static contextType = LanguageContext;

    renderText() {
        switch(this.context) {
            case 'dutch':
                return 'Naam'
            case 'english':
            default:
                return 'Name'
        }
    }

    render() {
        const text = this.renderText();
        return (
            <div className="ui field">
                <label>{text}</label>
                <input />
            </div>
        );
    }
}

export default Field;
