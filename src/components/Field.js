import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends Component {

    renderText(context) {
        switch(context) {
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
                <label>
                    <LanguageContext.Consumer>
                        {this.renderText}
                    </LanguageContext.Consumer>
                </label>
                <input />
            </div>
        );
    }
}

export default Field;
