import React, { Component } from 'react';
import InputText from './InputText';

class Main extends Component {
    render() {
        return (
            <div>
                <h1 className='main_title'>React - ToDoList</h1>
                <InputText />
            </div>
        );
    }
}

export default Main;