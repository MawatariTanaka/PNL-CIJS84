import React, { Component } from "react";
import { Container, Table } from "reactstrap";
import Student from "./Student";
import "./App.css";

class App extends Component {
  state = {
    students: [
      { id: 1, firstName: "Mark", lastName: "Otto", username: "@mdo" },
      { id: 2, firstName: "Jacob", lastName: "Thornton", username: "@fat" },
      { id: 3, firstName: "Larry", lastName: "the Bird", username: "@twitter" },
    ],
  };

  render() {
    const { students } = this.state;

    return (
      <Container className="mt-5">
        <Table hover>
          <thead>
            <tr>
              <th>#</th>
              <th className="text-center">First Name</th>
              <th className="text-center">Last Name</th>
              <th className="text-center">Username</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <Student key={student.id} student={student} />
            ))}
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default App;
