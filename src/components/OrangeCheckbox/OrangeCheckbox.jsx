import './OrangeCheckbox.css'
import React from 'react'

const OrangeCheckbox = () => {
    return (
        <div>
            <input type="checkbox" class='orange-checkbox' />
            <label htmlFor='orange-checkbox' className='orange-label'>
                <i className="fa-solid fa-check"></i>
            </label>
        </div>
    )
}

export default OrangeCheckbox