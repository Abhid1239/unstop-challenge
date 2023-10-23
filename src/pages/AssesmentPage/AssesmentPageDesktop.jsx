import React, { useEffect, useState } from 'react'
import AssesmentOverview from '../../components/AssesmentOverview/AssesmentOverview'
import MyAssesment from '../../components/MyAssesment/MyAssesment';
import './AssesmentPage.css';
import PropTypes from 'prop-types'
import { ReactComponent as NavIcon } from './../../assets/svg/nav.svg'
import { ReactComponent as DividerIcon } from './../../assets/svg/divider.svg'
import { ReactComponent as MobileIcon } from './../../assets/svg/mobile.svg'
import NewAssesmentForm from '../NewAssesmentForm/NewAssesmentForm';
import Navigation from '../../components/Navigation/Navigation';


function AssesmentPageDesktop({ isDesktop, onMsiteIconClick }) {
    const [addNewAssesment, setAddNewAssesment] = useState(false);


    const handleAddNewAssesmentClick = () => {
        setAddNewAssesment(true)
    }
    const handleCloseClick = () => {
        setAddNewAssesment(false)
    }


    return (
        <>
            <div className='main__page'>
                <div className='asses-page__new-asses-popup'>
                    <NewAssesmentForm isOpen={addNewAssesment} onCloseClick={handleCloseClick} />
                </div>
                <Navigation isDesktop={isDesktop} isActive={true} />
                <div className='assesment__page'>
                    <div className="asses-page__header">
                        <h1 className="asses-page__heading">Assesment</h1>
                        <DividerIcon />
                        <div className="asses-page__tabs">
                            <div className="asses-page__my-asses active">My Assesments</div>
                            <div className="asses-page__unstop-asses">Unstop Assements</div>
                        </div>
                        <div className="asses-page__switch" onClick={onMsiteIconClick}>
                            <MobileIcon />
                        </div>
                    </div>
                    <MyAssesment isDesktop={isDesktop} onAddNewAssesmentClick={handleAddNewAssesmentClick} />
                </div>
            </div>
        </>
    )
}

AssesmentPageDesktop.propTypes = {}

export default AssesmentPageDesktop
