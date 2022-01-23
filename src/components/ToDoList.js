import React from "react";

const ToDoList = () =>(

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

)

export default ToDoList;