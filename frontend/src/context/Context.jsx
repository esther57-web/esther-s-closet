import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getProducts } from '../lib/common';

export const ArticleContext = createContext(null)




const ArticleContextProvider = ({children}) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchArticles = async () => {
            const articles = await getProducts()
            setData(articles)
        };

        fetchArticles();
    }, []);
   
    let contextValue = {data}
    
    
    return (
        <ArticleContext.Provider value={contextValue}>
            {children}
        </ArticleContext.Provider>
    )
}

ArticleContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default ArticleContextProvider