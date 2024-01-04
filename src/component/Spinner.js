import React from 'react'
import loading from './loading.gif'

const Spinner = () => {
    return (
      <div className='text-center' >
          <img className='w-25' src={loading} alt="loading.."  style={{width:'5rem'}}/>
      </div>
    )
}

export default Spinner
