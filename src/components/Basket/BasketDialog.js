import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'


function BasketDialog({ onHide, show, basket, removeFromBasketFn }) {

    const [totalCost, setTotalCost] = useState(0);

    useEffect((() => {
        setTotalCost(Math.round(Array.from(basket).reduce((total, [product, amount]) => {
            return total + amount * product.price;
        }, 0)*100)/100);

    }), [basket])

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
                    Checkout
                </Modal.Title>
            </Modal.Header>


            <Modal.Body>
                <div>
                    {(basket.size > 0) ?
                        <>{
                            Array.from(basket).map(([product, amount], index) => {
                                return (
                                    <>
                                        <div className='d-flex justify-content-between' key={index}>
                                            <div className='d-flex' style={{ "gap": "12px" }}>
                                                <div>{amount} x </div>
                                                <div><b>{product.product_name}</b></div>
                                                <div> - ${Math.round(amount * product.price * 100)/100}</div>
                                            </div>
                                            <Button className="btn btn-danger" style={{ "padding": "2px 12px" }} onClick={() => removeFromBasketFn(product)} >
                                                <FontAwesomeIcon icon={faTrashCan} />
                                            </Button>
                                        </div>
                                        <hr className="hr" />
                                    </>
                                );
                            })
                        }
                            <h4 className='py-3' >Total - <b>${totalCost}</b></h4></>
                        :
                        <><div>Maybe pick something to buy first...</div></>}
                </div>
            </Modal.Body>

            
            <Modal.Footer>
                <Button disabled={basket.size === 0} onClick={() => alert("maybe some day will implement smth here")} >Buy now!</Button>
                <Button className='btn btn-secondary' onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default BasketDialog;
