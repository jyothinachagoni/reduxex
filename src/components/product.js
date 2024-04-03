import { useEffect, useState } from "react";
import { Button, Card, CardFooter } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { add } from "./store/cartSlice";
import { getProducts } from "./store/productSlice";
import Statuscode from "./utils/statuscode";

const Product = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);
  useEffect(() => {
    // fetch('https://fakestoreapi.com/products')
    // .then(data=>data.json())
    // .then(result=>getProducts(result))
    dispatch(getProducts());
  }, []);

  if (status === Statuscode.LOADING) {
    return <>Loading</>;
  }
  if (status === Statuscode.ERROR) {
    return <>something went wrong</>;
  }
  const addToCart = (product) => {
    dispatch(add(product));
  };
  const cards = products.map((product) => (
    <div className="col-md-3 text-center" style={{ marginBottom: "20px" }}>
      <Card key={product.id} className="h-100">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "100px", height: "100px" }}
          />
        </div>
        <Card.Body>
          <div className="text-center">
            <Card.Title>{product.title}</Card.Title>
          </div>
          <Card.Text>INR: {product.price}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="primary" onClick={() => addToCart(product)}>
            ADD TO CART
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));
  return (
    <>
      <div className="row">{cards}</div>
    </>
  );
};
export default Product;
