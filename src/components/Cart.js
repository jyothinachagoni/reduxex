import React from "react";
import { Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { remove } from "./store/cartSlice";

const Cart = () => {
    const products = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const removeToCart = (id)=>{
dispatch(remove(id))
    }

    const cards = products.map(product => (
        <div className="col-md-3 text-center" style={{ marginBottom: "20px" }} key={product.id}>
            <Card className="h-100">
                <div className="text-center">
                    <Card.Img variant="top" src={product.image} style={{ width: "100px", height: "100px" }} />
                </div>
                <Card.Body>
                    <div className="text-center">
                        <Card.Title>{product.title}</Card.Title>
                    </div>
                    <Card.Text>
                        INR: {product.price}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="primary" onClick={()=>removeToCart(product.id)}>Remove item</Button>
                </Card.Footer>
            </Card>
        </div>
    ));

    return (
        <div className="row">
            {cards}
        </div>
    );
};

export default Cart;
