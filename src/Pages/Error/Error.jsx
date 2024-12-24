import React from 'react'
import PropTypes from 'prop-types'
import NotFound from '../../assets/Lottee/404.json'
import Lottie from 'lottie-react'
import { Link } from 'react-router-dom'
const Error = props => {
  return (
      <div className="w-full h-screen gap-5 flex flex-col justify-center items-center">
          <div className="w-[500px]  h-[500px] flex justify-center items-center">
              <Lottie animationData={NotFound} loop={true} />
          </div>
          <div>
              <Link to={'/'} className='btn btn-info btn-outline'>
                Go to Home Page
              </Link>
          </div>
      </div>
  );
}

Error.propTypes = {}

export default Error