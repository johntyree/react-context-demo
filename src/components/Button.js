import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends Component {

    static contextType = LanguageContext;

    renderText() {
        switch(this.context) {
            case 'dutch':
                return 'Voorleggen'
            case 'english':
            default:
                return 'Submit'
        }
    }

    render() {
        const text = this.renderText();
        return (
            <button className="ui button primary">
                {text}
            </button>
        );
    }
}

export default Button;
