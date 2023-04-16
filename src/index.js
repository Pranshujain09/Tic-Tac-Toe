import React from "react";
import ReactDOM from "react-dom";
import Game from "./Game";

const mystyle = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial",
  textAlign: "center",
  top: "50px",
  postion: "absolute",
  margin: "0",
};

const ele = (
  <div style={{margin:"0"}}>
    <h1 style={mystyle}>Tic - Tac - Toe</h1>
    <Game />
    <p style={{ width: "100%", textAlign: "center", color: "grey" , position:"absolute", top:"700px"}}>
      Made By Pranshu❤️
    </p>
  </div>
);

let root = document.getElementById("root");
ReactDOM.render(ele, root);
