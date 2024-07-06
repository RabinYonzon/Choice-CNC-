import React, { useState } from 'react';
import './ProductCard.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaArrowRight } from "react-icons/fa";
import product_1 from '../../assets/product_1.jpg';
import product_2 from '../../assets/product_2.jpg';
import product_3 from '../../assets/product_3.jpg';
import product_4 from '../../assets/product_4.jpg';
import product_5 from '../../assets/product_5.jpg';
import product_6 from '../../assets/product_6.jfif';
import product_7 from '../../assets/product_7.jfif';
import product_8 from '../../assets/product_8.jfif';
import product_9 from '../../assets/product_9.jfif';
import product_10 from '../../assets/product_10.jfif';
import product_11 from '../../assets/product_11.jfif';
import product_12 from '../../assets/product_12.jfif';

const products = [
  { id: 1, src: product_1, heading: "Mother Love Wall Art Series", description: "12Inch X 12Inch | Room Decoration Items | Home Decoration Items", price: "Rs.1299" },
  { id: 2, src: product_2, heading: "Another Product", description: "Description of another product", price: "Rs.1499" },
  { id: 3, src: product_3, heading: "Another Product", description: "Description of another product", price: "Rs.1499" },
  { id: 4, src: product_4, heading: "Another Product", description: "Description of another product", price: "Rs.1499" },
  { id: 5, src: product_5, heading: "Another Product", description: "Description of another product", price: "Rs.1499" },
  { id: 6, src: product_6, heading: "Another Product", description: "Description of another product", price: "Rs.1499" },
  { id: 7, src: product_7, heading: "Another Product", description: "Description of another product", price: "Rs.1499" },
  { id: 8, src: product_8, heading: "Another Product", description: "Description of another product", price: "Rs.1499" },
  { id: 9, src: product_9, heading: "Another Product", description: "Description of another product", price: "Rs.1499" },
  { id: 10, src: product_10, heading: "Another Product", description: "Description of another product", price: "Rs.1499" },
  { id: 11, src: product_11, heading: "Another Product", description: "Description of another product", price: "Rs.1499" },
  { id: 12, src: product_12, heading: "Another Product", description: "Description of another product", price: "Rs.1499" },
];

const ProductCard = () => {
  const [visibleProducts, setVisibleProducts] = useState(6);

  const showMoreProducts = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 6);
  };

  return (
    <div>
      <div className="product-list">
        {products.slice(0, visibleProducts).map((product) => (
          <Card key={product.id} style={{ width: '18rem', margin: '10px' }}> 
            <Card.Img variant="top" src={product.src} alt={product.heading}/>
            <Card.Body>
              <h1>{product.heading}</h1>
              <Card.Text>{product.description}</Card.Text>
              <h3>{product.price}</h3>
              <Button variant="secondary">Order Now <FaArrowRight /></Button>
            </Card.Body>
          </Card>
        ))}
      </div>
      {visibleProducts < products.length && (
        <Button variant="primary" onClick={showMoreProducts} className="see-more-button">
          See More
        </Button>
      )}
    </div>
  );
};

export default ProductCard;