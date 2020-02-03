import React, { Component } from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class App extends Component {

    state = { language: 'english', color: 'primary' };

    onLanguageChange = language => {
        this.setState({
            color: this.state.color === 'primary' ? 'red' : 'primary',
            language
        });

    };

    render() {
        return (
            <div className="ui container">
                <div>
                    Select a language:
                    <i className="flag us"
                       onClick={() => this.onLanguageChange('english')}/>
                    <i className="flag nl"
                       onClick={() => this.onLanguageChange('dutch')}/>
                </div>
                <ColorContext.Provider value={this.state.color}>
                <LanguageContext.Provider value={this.state.language}>
                    <UserCreate />
                </LanguageContext.Provider>
                </ColorContext.Provider>
            </div>
        );
    }
}

export default App;
