import React from "react";
import { Modal } from "react-bootstrap";
import "./FilterModal.scss";

export default class FilterModal extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false
    };
  }

  handleShow = () => this.setState({ show: true });

  render() {
    return (
      <Modal
        backdrop
        centered
        show={this.state.show}
        onHide={() => this.setState({ show: false })}
      >
        <Modal.Header closeButton>
          <Modal.Title>Filter</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
      </Modal>
    );
  }
}
