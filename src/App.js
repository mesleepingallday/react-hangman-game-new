import "./styles.css";
import React, { useState, useEffect } from "react";
import Hangman from "./Hangman.js";
export default function App() {
  return (
    <div className="App">
      <Hangman />
    </div>
  );
}
