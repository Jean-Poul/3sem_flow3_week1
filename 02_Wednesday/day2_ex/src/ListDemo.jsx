import React, { useState } from "react";
import "./App.css";

function MemberTable({ members }) {
  return (
    <div className="App">
      <h1 id="Members">All Members</h1>
      <table id="members">
      <thead>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
        </thead>
        <tbody>
          <MemberDemo members={members} />
        </tbody>
      </table>
    </div>
  );
}

function MemberDemo(props) {
  return props.members.map((members, index) => {
    const { id, name, age } = members; //destructuring
    return (
      <tr key={id}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{age}</td>
      </tr>
    );
  });
}

export default function App() {
  const initialMembers = [
    { id: 1, name: "Peter", age: 18 },
    { id: 2, name: "Hanne", age: 35 },
    { id: 3, name: "Janne", age: 25 },
    { id: 4, name: "Holger", age: 22 },
  ];
  const [members, setMembers] = useState(initialMembers);

  return <MemberTable members={members} />;
}