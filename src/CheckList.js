import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CheckList extends Component {

    checkInputKeyPress(event) {
        if(event.key == 'Enter') {
            this.props.taskCallbacks.add.bind(null, this.props.cardId, event.target.value);
            event.target.value = '';
        }
    }

    render() {
        let tasks = this.props.tasks.map((task, taskIndex) => (
            <li key={task.id} className="checklist_task">
                <input type="checkbox" defaultChecked={task.done} 
                        onChange={this.props.taskCallbacks.toggle.bind(null, this.props.cardId, task.id, taskIndex)} />
                {task.name}
                <a href="#" className="checklist_task_remove" 
                        onClick={this.props.taskCallbacks.delete.bind(null, this.props.cardId, task.id, taskIndex)} />
            </li>
        ));
        return(
            <div className="checklist">
                <ul>{tasks}</ul>
                <input type="text" className="checklist_add_task" placeholder="Type then hit Enter to add a task" 
                        onKeyPress={this.checkInputKeyPress.bind(this)} />
            </div>
        );
    }
}

CheckList.propTypes = {
    cardId: PropTypes.number,
    tasks: PropTypes.arrayOf(PropTypes.object)
};

export default CheckList;