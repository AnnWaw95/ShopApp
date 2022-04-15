import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductImage from './ProductImage/ProductImage';
import ProductForm from './ProductForm/ProductForm';


const Product = ({ title, basePrice, colors, sizes, name }) => {


  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);


  const getPrice = () => {
    const found = sizes.find(element => element.name === currentSize)

    return basePrice + found.additionalPrice
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Summary')
    console.log('==============')
    console.log('Name:' + title)
    console.log('Price:' + getPrice())
    console.log('Size:' + currentSize.name)
    console.log('Color:' + currentColor)
  }
  
  return (
    <article className={styles.product}>
      <ProductImage name={name} title={title} currentColor={currentColor} />
      <div>
      <header>
        <h2 className={styles.name}>{title}</h2>
        <span className={styles.price}>Price: {getPrice()} $</span>
      </header>
        <ProductForm
          handleSubmit={handleSubmit} 
          colors={colors} 
          sizes={sizes} 
          currentColor={currentColor} 
          currentSize={currentSize} 
          setCurrentColor={setCurrentColor} 
          setCurrentSize={setCurrentSize} />
      </div>
    </article>
  )
};

Product.propTypes= {
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  sizes: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  getPrice: PropTypes.func
};

export default Product;