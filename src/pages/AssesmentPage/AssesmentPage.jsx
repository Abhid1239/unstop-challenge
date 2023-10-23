import React, { useEffect, useState } from 'react'
import MyAssesment from '../../components/MyAssesment/MyAssesment';
import './AssesmentPage.css';
import PropTypes from 'prop-types'
import { ReactComponent as NavIcon } from './../../assets/svg/nav.svg'
import { ReactComponent as DesktopIcon } from './../../assets/svg/desktop.svg'
import { ReactComponent as PlusIcon } from './../../assets/svg/plus.svg'
import Navigation from '../../components/Navigation/Navigation';
import NewAssesmentForm from '../NewAssesmentForm/NewAssesmentForm';


function AssesmentPage({ isDesktop, onDesktopIconClick }) {
    const [addNewAssesment, setAddNewAssesment] = useState(false);
    const [showNavigation, setShowNavigation] = useState(false);
    const [wrapperheight, setWrapperHeight] = useState(`${window.innerHeight}px`);

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

    useEffect(() => {
        document.addEventListener('resize', () => {
            setWrapperHeight(`${window.innerHeight}px`);
        })
    }, [])
    return (
        <div className='assesment__page' style={{ height: wrapperheight }}>
            <div className='asses-page__nav-section'>
                <Navigation isActive={showNavigation} onCloseClick={handleNavCloseClick} isDesktop={false} />
            </div>
            <div className='asses-page__new-asses-popup'>
                <NewAssesmentForm isOpen={addNewAssesment} onCloseClick={handleCloseClick} />
            </div>
            <div className='asses-page__add-new-asses' onClick={handleAddNewAssesmentClick}>
                <PlusIcon className='add-new-asses__icon' />
            </div>
            <div className="asses-page__header">
                <div className="asses-page__nav">
                    <NavIcon onClick={handleNavgationClick} />
                </div>
                <h1 className="asses-page__heading">Assesment</h1>
                <div className="asses-page__switch">
                    <DesktopIcon onClick={onDesktopIconClick} />
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
