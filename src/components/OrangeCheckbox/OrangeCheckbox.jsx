import './OrangeCheckbox.css'
import React from 'react'

const OrangeCheckbox = () => {
    return (
        <div className='orange-checkbox-div'>
            <input type="checkbox" className='orange-checkbox'  />
            <label htmlFor='orange-checkbox' className='orange-label'>
                <i className="fa-solid fa-check"></i>
            </label>
        </div>
    )
}

export default OrangeCheckbox