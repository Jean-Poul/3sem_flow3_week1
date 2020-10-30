import React, { Component } from 'react';
import { persons } from './file2';
import PropTypes from 'prop-types';


export function Welcome(props) {
    return <h2>Hello, {props.name}</h2>;
  }

  export function WelcomePerson(props) {
   return <p>Hello, {props.person.firstName} {props.person.lastName}, your email is {props.person.email}</p>;
  }

  WelcomePerson.propTypes = {
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired
    };
  
 export function MultiWelcome() {
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edith" />
        {persons.map((persons) =><WelcomePerson person={persons}/>)}
      </div>
    );
  }


  