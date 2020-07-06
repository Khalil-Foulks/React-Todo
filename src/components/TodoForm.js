import React from 'react';

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            item: ""
        }
    }

    handleChanges = event => {
        this.setState({
            item: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.addItem(this.state.item);
        this.setState({
            item: ""
        })
    }

    render() {
        return(
            <div>
                <form>
                <input
                    type="text"
                    name="item"
                    value={this.state.item}
                    onChange={this.handleChanges}
                    placeholder="add an item here"

                />
                <button onClick={this.handleSubmit}>Add</button>
                <button onClick={this.props.clearItem}>Clear To-Do List</button>
                </form>
            </div>
            
        )
    }
}

export default TodoForm