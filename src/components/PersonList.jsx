import React from "react";
import PersonCard from "./PersonCard";
import persons from "../data/persons";

export default function PersonList() {
  return (
    <div className="person-list">
      {persons.map(person => (
        <PersonCard key={person.id} person={person} />
      ))}
    </div>
  );
}
