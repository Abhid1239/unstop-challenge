import React, { useEffect, useState } from 'react'
import AssesmentOverview from '../../components/AssesmentOverview/AssesmentOverview'
import MyAssesment from '../../components/MyAssesment/MyAssesment';
import './AssesmentPage.css';
import PropTypes from 'prop-types'
import { ReactComponent as NavIcon } from './../../assets/svg/nav.svg'
import { ReactComponent as DesktopIcon } from './../../assets/svg/desktop.svg'
import Navigation from '../../components/Navigation/Navigation';
import NewAssesmentForm from '../NewAssesmentForm/NewAssesmentForm';


function AssesmentPage({ isDesktop }) {
    const [addNewAssesment, setAddNewAssesment] = useState(false);
    const [showNavigation, setShowNavigation] = useState(false);

    const handleCloseClick = () => {
        setAddNewAssesment(false)
    }

    const handleAddNewAssesmentClick = () => {
        setAddNewAssesment(true)
    }

    const handleNavgationClick = () => {
        setShowNavigation(true);
    }

    const handleNavCloseClick = () => {
        setShowNavigation(false)
    }
    return (
        <div className='assesment__page'>
            <div className='asses-page__nav-section'>
                <Navigation isActive={showNavigation} onCloseClick={handleNavCloseClick} isDesktop={false} />
            </div>
            <div className='asses-page__new-asses-popup'>
                <NewAssesmentForm isOpen={addNewAssesment} onCloseClick={handleCloseClick} />
            </div>
            <div className="asses-page__header">
                <div className="asses-page__nav">
                    <NavIcon onClick={handleNavgationClick} />
                </div>
                <h1 className="asses-page__heading">Assesment</h1>
                <div className="asses-page__switch">
                    <DesktopIcon />
                </div>
            </div>
            <div className="asses-page__tabs">
                <div className="asses-page__my-asses active">My Assesments</div>
                <div className="asses-page__unstop-asses">Unstop Assements</div>
            </div>
            <MyAssesment isDesktop={isDesktop} onAddNewAssesmentClick={handleAddNewAssesmentClick} />
        </div>
    )
}

AssesmentPage.propTypes = {}

export default AssesmentPage
