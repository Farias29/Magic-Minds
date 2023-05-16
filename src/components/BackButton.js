import React from 'react';
import{useHistory} from "react-router-dom";

function BackButton() {
    const history = useHistory();
    return (
        //<h1 onClick={() => history.goBack("/student")} class="text">x</h1>
        <button class="text" onClick={() => history.goBack("/student")}>X</button>
  );
}
export default BackButton;
