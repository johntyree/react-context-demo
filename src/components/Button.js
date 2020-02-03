import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends Component {

    renderText({ language }) {
        switch(language) {
            case 'dutch':
                return 'Voorleggen'
            case 'english':
            default:
                return 'Submit'
        }
    }

    renderButton(color) {
      return (
          <button className={`ui button ${color}`}>
            <LanguageContext.Consumer>
                {this.renderText.bind(this)}
            </LanguageContext.Consumer>
          </button>
      );
    }

    render() {
        return (
            <ColorContext.Consumer>
                {this.renderButton.bind(this)}
            </ColorContext.Consumer>
        );
    }
}

export default Button;
