import React, { Component } from "react";
import {editUser} from '../actions/userActions';
import {connect} from 'react-redux';

class EditAddUserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.user.name || "",
      email: props.user.email || "",
      gen: props.user.gen || "",
      id: props.user.id || "",
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
    this.props.editUser(this.state);
    this.setState({
      name: "",
      email: "",
      gen: "",
    });
    this.props.closeModal();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="userForm">
        <h2>Franks Arena </h2>
        <div>
          <label htmlFor="name">Name</label>
          <input
            className="formInput"
            type="name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            className="formInput"
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="gen">Gen</label>
          <input
            className="formInput"
            type="number"
            name="gen"
            value={this.state.gen}
            onChange={this.handleChange}
          />
        </div>

        <div>
          <button className="submit">Save Changes</button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = {
  editUser: editUser
}



export default connect(null, mapDispatchToProps) (EditAddUserForm);

