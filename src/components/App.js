import React from "react";
import ToDoList from "./ToDoList";
import NavBar from "./NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';




class App extends React.Component {
    render() {
        return (
            <section id="todo">
                <h1 classNameName="m-3">Liste de taches</h1>

                <ToDoList/>

                <NavBar/>

            </section>

        )
    }
}

export default App;