import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends Component {

    static contextType = LanguageContext;

    renderText() {
        switch(this.context.language) {
            case 'dutch':
                return 'Naam'
            case 'english':
            default:
                return 'Name'
        }
    }

    render() {
        return (
            <div className="ui field">
                <label>{this.renderText()}</label>
                <input />
            </div>
        );
    }
}

export default Field;
