import { createContext, useState } from "react";
import shopData from "../shop-data.json";

export const ProductContext = createContext({
  products: [],
  setProducts: () => null,
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(shopData);

  const value = { products };

  return (
    <div>
      <ProductContext.Provider value={value}>
        {children}
      </ProductContext.Provider>
    </div>
  );
};
