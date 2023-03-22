import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #fff;
  border-radius: 4px;
  padding: 10px;
  margin: 10px;
`;

const Image = styled.img`
width: 100px;
  height: auto;
`;

const Title = styled.h3`
  font-size: 18px;
  margin: 10px 0;
`;

const Price = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

const Product = ({ product }) => {
  return (
    <Card>
      <Image src={product.image} alt={product.title} />
      <Title>{product.title}</Title>
      <Price>${product.price}</Price>
    </Card>
  );
};

export default Product;
