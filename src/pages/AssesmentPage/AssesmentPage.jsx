import React, { useEffect, useState } from 'react'
import MyAssesment from '../../components/MyAssesment/MyAssesment';
import './AssesmentPage.css';
import PropTypes from 'prop-types'
import { ReactComponent as NavIcon } from './../../assets/svg/nav.svg'
import { ReactComponent as DesktopIcon } from './../../assets/svg/desktop.svg'
import { ReactComponent as PlusIcon } from './../../assets/svg/plus.svg'
import Navigation from '../../components/Navigation/Navigation';
import NewAssesmentForm from '../NewAssesmentForm/NewAssesmentForm';
import { useResizeHook } from '../../hooks/useResizeHook';


function AssesmentPage({ isDesktop, onDesktopIconClick }) {
    const [addNewAssesment, setAddNewAssesment] = useState(false);
    const [showNavigation, setShowNavigation] = useState(false);
    const { windowHeight } = useResizeHook();

    const handleAddNewAssesmentClick = () => {
        setAddNewAssesment(!addNewAssesment)
    }

    const handleNavgationClick = () => {
        setShowNavigation(!showNavigation);
    }


    return (
        <div className='assesment__page' style={{ height: `${windowHeight}` }}>
            <div className='asses-page__nav-section'>
                <Navigation isActive={showNavigation} onCloseClick={handleNavgationClick} isDesktop={false} />
            </div>
            <div className='asses-page__new-asses-popup'>
                <NewAssesmentForm isOpen={addNewAssesment} onCloseClick={handleAddNewAssesmentClick} />
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
