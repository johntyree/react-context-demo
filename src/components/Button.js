import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends Component {

    renderText(context) {
        switch(context) {
            case 'dutch':
                return 'Voorleggen'
            case 'english':
            default:
                return 'Submit'
        }
    }

    renderButton(colorBit) {
      return (
          <button className={`ui button ${colorBit}`}>
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
