import React from 'react'
import PropTypes from 'prop-types';
import './NewAssesmentForm.css';
import { ReactComponent as CrossIcon } from './../../assets/svg/cross.svg'

function NewAssesmentForm(props) {
    return (
        <div className="popup__wrapper">
            <div className="popup__header">
                <p className="popup__heading">Sub-Section Details</p>
                <div>
                    <CrossIcon className='popup__cross-color' />
                </div>
            </div>
            <div className="popup__content">
                <form action="" className="new-form__wrapper">
                    <label htmlFor="">Name of Assesment</label>
                    <input type="text" />
                    <label htmlFor="">Purpose od the test is </label>
                    <select name="" id=""></select>
                    <label htmlFor="">Description</label>
                    <input type="text" />
                    <label htmlFor="">Skills</label>
                    <input />
                    <label htmlFor="">Date</label>
                    <input type='date' />
                    <label htmlFor="">Duration</label>
                    <input type='number' />
                </form>
            </div>
            <div className="popup__footer">
                <div className='popup__submit-button'>Submit</div>
            </div>
        </div>
    )
}

NewAssesmentForm.propTypes = {}

export default NewAssesmentForm
