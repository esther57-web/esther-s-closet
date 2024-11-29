import { useContext } from 'react'
import { ArticleContext } from '../context/Context'
import ArticlePreview from './ArticlePreview'
//trier du recent au ancien
const Latest = () => {
    const {data} = useContext(ArticleContext)
    
  return (
    <section >
        <h2 className='flex justify-center text-2xl font-bold'>Nouveautés</h2>
        <div className="flex overflow-hidden">
            {data ? data.slice(0,6).map((article, id)=> {
                return <ArticlePreview key={id} id={article._id} name={article.name} images={article.imagesUrl} price={article.price} />
            }) : <p>Chargement...</p>}
        </div>
    </section>
  )
}

export default Latest