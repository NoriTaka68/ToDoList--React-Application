import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaListAlt,FaCheckSquare, FaPlusSquare, FaTrash } from "react-icons/fa";


class App extends React.Component {
  render() {
    return (

      <section id="todo">
        <h1 classNameName="m-3">Liste de taches</h1>
        <ul className="list-group m-3">
          <li className="list-group-item d-flex align-items-center">Ranger la vaiselle
            <button className="btn btn-sm ms-auto btn-outline-success">&#x2713;</button>
          </li>
          <li className="list-group-item d-flex align-items-center">Répondre appel d'offres
            <button className="btn btn-sm ms-auto btn-outline-success">&#x2713;</button>
          </li>
          <li className="list-group-item d-flex align-items-center">signer contrat
            <button className="btn btn-sm ms-auto btn-outline-success">&#x2713;</button>
          </li>
          <li className="list-group-item d-flex align-items-center">Ranger le salon
            <button className="btn btn-sm ms-auto btn-outline-success">&#x2713;</button>
          </li>

        </ul>

        <footer className="d-flex justify-content-between bg-secondary p-3" id="mainFooter">
          <div className="btn-group">
            <a href="#" className="btn btn-outilise-dark bg-light"><FaListAlt/></a>
            <a href="#" className="btn btn-outilise-dark bg-light"><FaCheckSquare/></a>
            <a href="#" className="btn btn-outilise-dark bg-light"><FaPlusSquare/></a>
          </div>
          <button className="btn btn-outilise-dark bg-light"><FaTrash/></button>
        </footer>

      </section>


    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))