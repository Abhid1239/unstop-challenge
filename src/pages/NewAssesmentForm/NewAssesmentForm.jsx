import React, { useState } from 'react'
import PropTypes from 'prop-types';
import './NewAssesmentForm.css';
import { ReactComponent as CrossIcon } from './../../assets/svg/cross.svg'
function NewAssesmentForm(props) {
    const [hidePopup, setHidePopup] = useState(false)
    return (
        <div className={`popup__wrapper ${hidePopup ? 'hidePopup' : ''}`}>
            <div className="popup__header">
                <p className="popup__heading">Sub-Section Details</p>
                <div className='popup__cross-btn' onClick={() => { setHidePopup(!hidePopup) }}>
                    <CrossIcon className='popup__cross-color' />
                </div>
            </div>
            <form action="" className=" popup__content new-form__wrapper">
                <label className='new-form__label' htmlFor="assesment-name">Name of Assesment</label>
                <input className='new-form__input' type="text" id='assesment-name' placeholder='Eg. DSA Test' />
                <label className='new-form__label' htmlFor="assesment-purpose">Purpose of the test is </label>
                <select name="" id="assesment-purpose" className='new-form__input'>
                    <option value="">learning</option>
                    <option value="">Job</option>
                    <option value="">Testing </option>
                    <option value="">Professional</option>
                </select>
                <label className='new-form__label' htmlFor="assesment-description">Description</label>
                <input className='new-form__input' type="text" id="assesment-description" placeholder='Eg. Test for Frontend Job' />
                <label className='new-form__label' htmlFor="assesment-skills" >Skills</label>
                <div className="skills__wrapper">
                    <div className='skills__text'>Javascript
                        <CrossIcon className='skills__cross-icon' />
                    </div>
                    <div className='skills__text'>Web Develpoment
                        <CrossIcon className='skills__cross-icon' />
                    </div>
                    <div className='skills__text'>UI/UX
                        <CrossIcon className='skills__cross-icon' />
                    </div>
                </div>
                <input className='new-form__input new-form__input--tags' type='text' id='assesment-skills' placeholder='Eg. JS' />

                <label className='new-form__label' htmlFor="assesment-date">Date</label>
                <input className='new-form__input' type='date' id='assesment-date' placeholder='Date' />
                <label className='new-form__label' htmlFor="assesment-duration">Duration</label>
                <input className='new-form__input' type='number' id='assesment-duration' placeholder='Eg. 90 minutes' />
            </form>
            <div className="popup__footer">
                <div className='popup__submit-btn ' onClick={() => { setHidePopup(!hidePopup) }}>Submit</div>
            </div>
        </div>
    )
}

NewAssesmentForm.propTypes = {}

export default NewAssesmentForm
