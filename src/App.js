import React from "react";
import "./App.css";
import ToDoList from "./components/todoList";
import { Header } from "./components/header";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={Header}>
            <Header className="home-container">
              <h1>Good Morning Avery!</h1>
              <img
                src="https://media.giphy.com/media/jDiUeDQpIkGIM/giphy.gif"
                alt="simba and mufasa looking out over their kingdom as the sun rises in the distance"
              />
              <Link to="/tasks">Let's Go!</Link>
            </Header>
          </Route>
          <Route path="/tasks" exact component={ToDoList}>
            <ToDoList />
          </Route>
        </div>
      </Router>
    );
  }
}

export default App;
