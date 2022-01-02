import React, { Component } from 'react';
import InputText from './InputText';
import SingleTask from './SingleTask';

class Main extends Component {

    constructor(props) {
        super(props)
        this.state = {
            listTask: ["Fare la spesa", "Pulire il giardino"]
        }
    }

    addNewTask = (value) => {
        let newList = this.state.listTask
        newList.push(value)
        this.setState({ listTask: newList })
    }

    removeTask = (i) => {
        let newList = this.state.listTask
        newList.splice(i, 1)
        this.setState({ listTask: newList })
    }

    render() {
        return (
            <div>
                <h1 className='main_title'>React - ToDoList</h1>
                <InputText onAddNewTask={this.addNewTask} />
                <ul className='list_tasks'>
                    {this.state.listTask.map((value, i) => {
                        return <SingleTask onRemoveTask={this.removeTask} key={i} i={i} text={value} />
                    })}
                </ul>
            </div>
        );
    }
}

export default Main;