import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function PurchasingDialog({ onHide, product, show, addProductToBasket }) {

  const [amount, setAmount] = useState(1);

  const onHideImpl = () => {
    setAmount(1);
    onHide()
  }

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
        <div className='d-flex justify-content-start align-items-center py-2' style={{ "gap": "12px" }}>
          <div> Quantity: <b>{amount} </b></div>
          <Button style={{ "padding": "2px 12px" }} onClick={() => setAmount(amount + 1)}  >+</Button>
          <Button style={{ "padding": "2px 12px" }} onClick={() => setAmount(amount > 1 ? amount - 1 : 1)} >-</Button>
        </div>
        <div>Price: <b>${Math.round(amount * product.price * 100) / 100} </b></div>
      </Modal.Body>


      <Modal.Footer>
        <Button onClick={() => { addProductToBasket(product, amount); onHideImpl(); }}>Add</Button>
        <Button className='btn btn-secondary' onClick={onHideImpl}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PurchasingDialog;
