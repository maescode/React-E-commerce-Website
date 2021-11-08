import React from "react";
import { Card, Button } from "react-bootstrap";

const Product = (props) => {
  return (
    <>
      <Card style={{ width: "18rem" }} className='my-3 p-3'>
        <a href={`/product/${props.product._id}`}>
          <Card.Img variant='top' src={props.product.img} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant='primary'>Go somewhere</Button>
          </Card.Body>
        </a>
      </Card>
    </>
  );
};

export default Product;
