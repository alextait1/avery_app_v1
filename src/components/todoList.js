import React from "react";
import { ToDoItem } from "./todoItem";
class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          taskName: "Go to the Washroom",
          src: "https://media.giphy.com/media/CxqGa4O0LQewU/giphy.gif",
          id: 0
        },
        {
          taskName: "Get Dressed",
          src: "https://media.giphy.com/media/26FLdaDQ5f72FPbEI/giphy.gif",
          id: 1
        },
        {
          taskName: "Take Medicine",
          src: "https://media.giphy.com/media/IAJgO0wjstQvS/giphy.gif",
          id: 3
        },
        {
          taskName: "Eat Breakfast",
          src: "https://media.giphy.com/media/IsSkJaiwBrQxW/giphy.gif",
          id: 2
        },
        {
          taskName: "Brush Teeth",
          src: "https://media.giphy.com/media/xT9IgpwOQfx9WmFxN6/giphy.gif",
          id: 4
        },
        {
          taskName: "Style Hair",
          src: "https://media.giphy.com/media/1gdx2WgBio0SbJoon5/giphy.gif",
          id: 5
        }
      ],
      completedTasks: [1, 2, 3]
    };
  }

  removeItem = id => {
    this.setState({
      tasks: this.state.tasks.filter(task => task.id !== id)
    });
  };

  render() {
    return (
      <div class="wrapper">
        <h1 className="task-header">Avery's Morning Routine</h1>
        {this.state.tasks.length ? (
          <ul className="task-list">
            {this.state.tasks.map(task => {
              return (
                <ToDoItem
                  className="task-item"
                  taskName={task.taskName}
                  src={task.src}
                  alt={task.name}
                  handleClick={() => {
                    this.removeItem(task.id);
                  }}
                />
              );
            })}
          </ul>
        ) : (
          <img
            class="finished"
            src="https://media.giphy.com/media/R8bcfuGTZONyw/giphy.gif"
            alt="horse running in the wilderness"
          />
        )}
      </div>
    );
  }
}

export default ToDoList;
