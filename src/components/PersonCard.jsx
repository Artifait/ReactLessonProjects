import React from "react";

export default function PersonCard({ person }) {
  return (
    <div className="person-card">
      <h2>{person.name}</h2>
      <p><strong>Username:</strong> {person.username}</p>
      <p><strong>Email:</strong> {person.email}</p>
      <p><strong>Phone:</strong> {person.phone}</p>
      <h3>Address</h3>
      <p>{person.address.street}, {person.address.suite}</p>
      <p>{person.address.city}, {person.address.zipcode}</p>
    </div>
  );
}
