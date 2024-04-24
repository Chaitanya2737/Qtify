import React from 'react'

const Button = (props) => {
  return (
    <div className='feedback'>
        <button className='size'>
            {
                props.content
            }
        </button>
    </div>
  )
}

export default Button