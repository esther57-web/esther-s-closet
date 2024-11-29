import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const Banner = ({title, url}) => {
  return (
    <section className='relative xs:h-[200px] flex justify-center items-center rounded-2xl' style={{ backgroundImage: `url(${url})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize:'80%' }}>
        <div className='absolute inset-0 bg-black opacity-50 rounded-2xl'></div>
        <NavLink className='z-10'><h1 className='text-white z-20 uppercase hover:underline cursor-pointer'>{title}</h1></NavLink>
    </section>
  )
}

Banner.propTypes = {
    title: PropTypes.string,
    url: PropTypes.string
}

export default Banner