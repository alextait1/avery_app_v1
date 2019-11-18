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
          taskName: "Eat Breakfast",
          src: "https://media.giphy.com/media/IsSkJaiwBrQxW/giphy.gif",
          id: 3
        },
        {
          taskName: "Brush Teeth",
          src: "https://media.giphy.com/media/xT9IgpwOQfx9WmFxN6/giphy.gif",
          id: 2
        },
        {
          taskName: "Style Hair",
          src: "https://media.giphy.com/media/1gdx2WgBio0SbJoon5/giphy.gif",
          id: 4
        },
        {
          taskName: "Help with the Pets",
          src: "https://media.giphy.com/media/3o7WItSnXGBtacU71C/giphy.gif",
          id: 5
        }
      ]
    };
  }

  removeItem = id => {
    this.setState({
      tasks: this.state.tasks.filter(task => task.id !== id)
    });
  };

  // deletePlayer = id => {
  //   this.setState({
  //     teamPlayers: this.state.teamPlayers.filter(
  //       player => player.idTeam !== id,
  //     ),
  //   });
  // };

  render() {
    return (
      <div class="wrapper">
        <h1 className="task-header">Avery's Morning Routine</h1>
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
      </div>
    );
  }
}

export default ToDoList;
