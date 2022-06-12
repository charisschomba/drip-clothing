import { createContext, useEffect, useState } from "react";

import { getCategoriesAndDocuments } from "../utils/firbase/firebase.utils.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoryProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  useEffect(() => {
    const getCategories = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap)
    }
    getCategories();
  }, [])
  const value = { categoriesMap };
  return (
    <div>
      <CategoriesContext.Provider value={value}>
        {children}
      </CategoriesContext.Provider>
    </div>
  );
};
