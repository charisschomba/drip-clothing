import { useNavigate } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';
import {Preview, CategoryPreviewContainer, Title } from './category-preview.styles.jsx'

const CategoryPreview = ({title, products}) => {
    const navigate = useNavigate();
    const navigateHandler = () => navigate(title);
    return (
        <CategoryPreviewContainer>
            <Title onClick={navigateHandler}>{title.toUpperCase()}</Title>
            <Preview>
            {
              products
              .filter((_, index) => index < 4)
              .map((product) => (
                  <ProductCard key={product.id} product={product}/>
              ))
            }
            </Preview>
        </CategoryPreviewContainer>
    )
};

export default CategoryPreview;