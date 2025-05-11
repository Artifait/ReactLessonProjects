import React from "react";
import PersonList from "./components/PersonList";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <h1>Клиенты</h1>
      <PersonList />
    </div>
  );
}
