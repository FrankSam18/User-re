import React, { Component } from "react";
import './AddForm.css'

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      gen: "",
    };
  }

  handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addUser(this.state);
    this.setState({
      name: "",
      email: "",
      gen: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}  className="userForm">
          <h2>Phranks Arena</h2>
        <div>
          <label htmlFor="name">Name</label>
          <input className="formInput"
            type="name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input className="formInput"
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="gen">Gen</label>
          <input className="formInput"
            type="number"
            name="gen"
            value={this.state.gen}
            onChange={this.handleChange}
          />
        </div>

        <div>
          <button className="submit">Register</button>
        </div>
      </form>
    );
  }
}

export default AddForm;
