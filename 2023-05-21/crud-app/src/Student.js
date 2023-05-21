import React, { Component } from "react";

export class Student extends Component {
  render() {
    const { student } = this.props;

    return (
      <tr>
        <th scope="row">{student.id}</th>
        <td className="text-center">{student.firstName}</td>
        <td className="text-center">{student.lastName}</td>
        <td className="text-center">{student.username}</td>
      </tr>
    );
  }
}

export default Student;
