import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { ArticleContext } from '../context/Context'
import Banner from '../components/Banner'
import { useParams } from 'react-router-dom'
import ArticlePreview from '../components/ArticlePreview'
// filtrer, trier, 24articles par page, description en fonction de la catégorie
const CategoryPage = props => {
    const {data} = useContext(ArticleContext)
    const urlCategory = useParams().category
    const filteredData = data ? data.filter((ftrData)=> ftrData.category === urlCategory) : null
    
  return (
   filteredData && <main className='flex flex-col gap-8'>
        <Banner title={urlCategory}/>
        <section className='grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
            {filteredData.map((article, id)=>{
                return <ArticlePreview key={id}  id={article._id} name={article.name} images={article.imagesUrl} price={article.price} />
            })}
        </section>
    </main>
  )
}

CategoryPage.propTypes = {

}

export default CategoryPage