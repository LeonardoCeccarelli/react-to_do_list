import React, { Component } from 'react';

class InputText extends Component {

    constructor(props) {
        super(props)
        this.state = { inputValue: "" }
    }

    handleChange = event => {
        this.setState({ inputValue: event.target.value })
    }

    pushNewTask = () => {
        let newTask = this.state.inputValue

        if (!newTask.trim()) {
            this.setState({ inputValue: "" })
            return
        }

        this.props.onAddNewTask(newTask.trim())
        this.setState({ inputValue: "" })
    }

    render() {
        return (
            <div className='input_text'>
                <input type="text" value={this.state.inputValue} onChange={this.handleChange} placeholder="Inserire la task"></input>
                <button type="button" onClick={this.pushNewTask}>Add</button>
            </div>
        );
    }
}

export default InputText;