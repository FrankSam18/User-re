import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Modal from "react-bootstrap/Modal";
import EditAddUserForm from "./EditAddUserForm";

const User = ({ user, deleteUser, editUser }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = (e) => {
    deleteUser(user.id);
  };

  return (
    <>
      <div className="user">
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>Name: {user.name}</ListGroup.Item>
            <ListGroup.Item>Email: {user.email}</ListGroup.Item>
            <ListGroup.Item>Gen: {user.gen}</ListGroup.Item>
          </ListGroup>
        </Card>
        <div className="card-btn">
              <button className="btn btn-success edit" onClick={handleShow}>
                Edit
              </button>
              <button className="btn btn-danger delete" onClick={handleDelete}>
                Delete
              </button>
            </div>

        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Edit User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EditAddUserForm
              user={user}
              editUser={editUser}
              closeModal={handleClose}
            />
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default User;

