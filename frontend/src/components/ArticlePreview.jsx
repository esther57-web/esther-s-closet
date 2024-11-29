
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const ArticlePreview = props => {
  return (
    <NavLink to={`/articles/${props.id}`} className='flex flex-col xs:h-[350px] md:w-[90%] lg:h-[450px]'>
      <img src={props.images[0]} className='w-full h-[80%]'></img>
        <div className='bg-white pl-2'>
            <p>{props.name}</p>
            <p>{props.price}€</p>
        </div>
    </NavLink>
  )
}

ArticlePreview.propTypes = {
  id: PropTypes.string,
    name: PropTypes.string,
    price:PropTypes.number,
    images: PropTypes.array
}

export default ArticlePreview