import React from 'react'
import AssesmentOverview from '../../components/AssesmentOverview/AssesmentOverview'
import './AssesmentPage.css';
import PropTypes from 'prop-types'
import { ReactComponent as NavIcon } from './../../assets/svg/nav.svg'
import { ReactComponent as DesktopIcon } from './../../assets/svg/desktop.svg'


function AssesmentPage(props) {
    return (
        <div className='assesment__page'>
            <div className="asses-page__header">
                <div className="asses-page__nav">
                    <NavIcon />
                </div>
                <h1 className="asses-page__heading">Assesment</h1>
                <div className="asses-page__switch">
                    <DesktopIcon />
                </div>
            </div>
            <div className="asses-page__tabs">
                <div className="asses-page__my-asses active">My Assesment</div>
                <div className="asses-page__unstop-asses">Unstop Assement</div>
            </div>
            <div className="asses-page__my-asses_detail">
                <AssesmentOverview />
            </div>
        </div>
    )
}

AssesmentPage.propTypes = {}

export default AssesmentPage
