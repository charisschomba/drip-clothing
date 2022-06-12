import { useNavigate } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';
import './category-preview.styles.scss'

const CategoryPreview = ({title, products}) => {
    const navigate = useNavigate();
    const navigateHandler = () => navigate(title);
    return (
        <div className='category-preview-container'>
            <span className='title' onClick={navigateHandler} >{title.toUpperCase()}</span>
            <div className='preview'>
            {
              products
              .filter((_, index) => index < 4)
              .map((product) => (
                  <ProductCard key={product.id} product={product}/>
              ))
            }
            </div>
        </div>
    )
};

export default CategoryPreview;