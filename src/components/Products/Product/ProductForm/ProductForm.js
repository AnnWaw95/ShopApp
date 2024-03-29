import styles from './ProductForm.module.scss';
import Button from '../../../Button/Button';
import OptionColor from './OptionColor/OptionColor';
import OptionSize from './OptionSize/OptionSize';
import PropTypes from 'prop-types';


const ProductForm = ({handleSubmit, currentSize, currentColor, sizes, colors, setCurrentSize, setCurrentColor}) => {

    return (
        <form onSubmit={handleSubmit}>
          <OptionSize sizes={sizes} currentSize={currentSize} setCurrentSize={setCurrentSize} />
          <OptionColor colors={colors} currentColor={currentColor} setCurrentColor={setCurrentColor} />
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
    );
};

ProductForm.propTypes={
  handleSubmit: PropTypes.func
};

export default ProductForm;