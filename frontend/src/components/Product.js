import React from "react";
import { Card, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <>
      <Card style={{ width: "18rem", minHeight: "540px" }} className='my-3 p-3'>
        <Link to={`/product/${product._id}`} className='product-link'>
          <Card.Img variant='top' src={`${product.image}`} />
          <Card.Body>
            <Card.Title as='div'>
              <strong>{product.name}</strong>
            </Card.Title>
            <Card.Text as='div'>
              <div className='my-3'>{product.description}</div>
            </Card.Text>
            <Card.Text as='div'>
              <div class='my-3'>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </div>
            </Card.Text>
            <Card.Text as='h3'>${product.price}</Card.Text>
          </Card.Body>
        </Link>
      </Card>
    </>
  );
};

export default Product;
