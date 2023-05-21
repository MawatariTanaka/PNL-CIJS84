import React, { Component } from "react";
import { Container, Table, Input, Button } from "reactstrap";
import Student from "./Student";
import "./App.css";

class App extends Component {
  state = {
    students: [
      { id: 1, firstName: "Mark", lastName: "Otto", username: "@mdo" },
      { id: 2, firstName: "Jacob", lastName: "Thornton", username: "@fat" },
      { id: 3, firstName: "Larry", lastName: "the Bird", username: "@twitter" },
    ],
    newStudent: {
      id: "",
      firstName: "",
      lastName: "",
      username: "",
    },
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      newStudent: {
        ...prevState.newStudent,
        [name]: value,
      },
    }));
  };

  handleAddStudent = () => {
    const { newStudent, students } = this.state;
    const { id, firstName, lastName, username } = newStudent;

    this.setState({
      students: [...students, { id, firstName, lastName, username }],
      newStudent: { id: "", firstName: "", lastName: "", username: "" },
    });
  };

  render() {
    const { students, newStudent } = this.state;

    return (
      <Container className="mt-5">
        <div className="mt-2" style={{ display: "flex" }}>
          <label>ID</label>
          <Input
            name="id"
            value={newStudent.id}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="mt-2" style={{ display: "flex" }}>
          <label>First Name</label>
          <Input
            name="firstName"
            value={newStudent.firstName}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="mt-2" style={{ display: "flex" }}>
          <label>Last Name</label>
          <Input
            name="lastName"
            value={newStudent.lastName}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="mt-2" style={{ display: "flex" }}>
          <label>Username</label>
          <Input
            name="username"
            value={newStudent.username}
            onChange={this.handleInputChange}
          />
        </div>
        <Button color="primary" onClick={this.handleAddStudent}>
          Add Student
        </Button>
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
