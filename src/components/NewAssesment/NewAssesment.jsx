import React from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as PlusIcon } from './../../assets/svg/plus.svg';
import './NewAssesment.css'

function NewAssesment({ onClick }) {
    return (
        <div className='new-asses__new-wrapper' onClick={onClick}>
            <div className='new-asses__new-add'>
                <PlusIcon />
            </div>
            <p className="new-asses__new-text">New Assessment</p>
            <p className="new-asses__new-info">From here you can add questions of multiple types like MCQs, subjective (text or paragraph)!</p>

        </div>
    )
}

NewAssesment.propTypes = {}

export default NewAssesment
