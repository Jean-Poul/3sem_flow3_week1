import React, { useState } from "react";

export const NameForm = () => {
    const initialState = { name: "" };

    const [person, setPerson] = useState(initialState)

    const handleSubmit = (evt) => {
        evt.preventDefault();
        window.alert(JSON.stringify(person))
        setPerson(initialState);
    }

    const handleInput = (event) => {
        const target = event.target;
        const id = target.id;
        const value = target.value;
        setPerson({ ...person, [id]: value })
    }

    return (
        <div style={{ marginTop: 25 }}>

            <form onSubmit={handleSubmit} onChange={handleInput}>
                <input id="name" type="text" value={person.name} placeholder="name" />
            </form>
            <button onClick={handleSubmit}>Submit</button>
            <p>{JSON.stringify(person)}</p>
        </div>
    );
}
 
export default function FormDemo() {
  return (
    <div style={{marginTop : 25}}>
      <NameForm />
    </div>
  );
}
