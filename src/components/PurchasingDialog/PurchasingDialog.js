import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function PurchasingDialog({onHide, product, show}) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {product.product_name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          <div>
            Add {product.product_name} to your basket:
          </div>
          <div>Quantity: 2</div>
          <div>Price: 2</div>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PurchasingDialog;
