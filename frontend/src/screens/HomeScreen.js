import React from "react";
import Product from "../components/Product";
import products from "../products";
import { Row, Col } from "react-bootstrap";

const HomeScreen = () => {
  return (
    <>
      <h1>Latest Product</h1>
      <Row>
        {products.map((product, index) => (
          <Col sm={12} md={6} lg={3} key={product._id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
