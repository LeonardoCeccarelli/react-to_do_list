import React, { Component } from 'react';

class SingleTask extends Component {
    constructor(props) {
        super(props)
        this.state = { danger: false }
    }

    handleEnterDangerStyle = () => {
        this.setState({ danger: true })
    }

    handleLeaveDangerStyle = () => {
        this.setState({ danger: false })
    }

    removeElement = () => {
        this.props.onRemoveTask(this.props.i)
    }

    render() {
        return (
            <li className='task' className={this.state.danger ? 'danger' : ''}>
                {this.props.i + 1}. {this.props.text}
                <i className="fas fa-times cross_delete"
                    onMouseEnter={this.handleEnterDangerStyle}
                    onMouseLeave={this.handleLeaveDangerStyle}
                    onClick={this.removeElement}>
                </i>
            </li>
        );
    }
}

export default SingleTask;