import React, { Component } from 'react';
//const names = [{'fname':'Anders','lname':'Henriksen'},{'fname':'Britta','lname':'Albertsen'},{'fname':'Kalle','lname':'Fredborg'}];


class ClassTable extends React.Component {
  constructor(props){
    super(props);
  }
    render() {
        return (
            <table>
            <tr>
              <th>First name</th>
              <th>Last Name</th>
            </tr>
            {props.names && this.props.names.map((el) => (
              <tr>
                <td>{el.fname}</td>
                <td>{el.lname}</td>
              </tr>
            ))}
          </table>
        )
    }
}

export default ClassTable;
