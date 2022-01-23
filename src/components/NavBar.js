import React from "react";
import { FaListAlt, FaCheckSquare, FaPlusSquare, FaTrash } from "react-icons/fa";
import { FcEmptyTrash, FcList, FcCheckmark, FcPlus, FcFullTrash } from "react-icons/fc";

const NavBar = () => (
    <footer className="d-flex justify-content-between bg-secondary p-3" id="mainFooter">
        <div className="btn-group">
            <a href="#" className="btn btn-outilise-dark bg-light"><FcList /></a>
            <a href="#" className="btn btn-outilise-dark bg-light"><FcCheckmark /></a>
            <a href="#" className="btn btn-outilise-dark bg-light"><FcPlus /></a>
        </div>
        <button className="btn btn-outilise-dark bg-light"><FcFullTrash /></button>
    </footer>

)

export default NavBar;