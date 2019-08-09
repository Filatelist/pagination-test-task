import React, { Component } from "react";
import Pagination from "../pagination";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import UserList from "../user-list";
import { getCurrentUsers, getUsers } from "../../actions";
import "./app.css";

class App extends Component {
  state = {
    currentPage: 1,
    usersPerPage: 5
  };
  componentWillMount() {
    fetch("http://localhost:3001/users")
      .then(res => res.json())
      .then(body => {
        this.props.getUsers(body);
      });

  }

  paginate = (pageNumber = this.state.currentPage, event) => {
    event.preventDefault();
    const indexOfLastUser = pageNumber * this.state.usersPerPage;
    const indexOfFirstUser = indexOfLastUser - this.state.usersPerPage;
    const currentUsers = this.props.users.slice(indexOfFirstUser, indexOfLastUser);
    this.props.getCurrentUsers(currentUsers);
    this.setState({
      currentPage: pageNumber
    })
  };

  render() {
    return (
      <div className="App">
        <nav className="nav fixed-top navbar-sticky-top expand-lg align-text-center">
          <h3 className="c-grey">Users</h3>
        </nav>
        <div className="container mt-5 bg-light">
          <UserList users={this.props.currentUsers} />
          <Pagination
            paginate={this.paginate}
            totalUsers={this.props.users.length}
            usersPerPage={this.state.usersPerPage}
          />
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ users, currentUsers }) => {
  return {
    users,
    currentUsers
  };
};
const mapDispatchToProps = {
  getUsers,
  getCurrentUsers
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
