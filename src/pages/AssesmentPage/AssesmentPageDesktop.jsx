import React, { useEffect, useState } from 'react'
import AssesmentOverview from '../../components/AssesmentOverview/AssesmentOverview'
import MyAssesment from '../../components/MyAssesment/MyAssesment';
import './AssesmentPage.css';
import PropTypes from 'prop-types'
import { ReactComponent as NavIcon } from './../../assets/svg/nav.svg'
import { ReactComponent as DividerIcon } from './../../assets/svg/divider.svg'
import { ReactComponent as DesktopIcon } from './../../assets/svg/desktop.svg'
import Navigation from '../../components/Navigation/Navigation';


function AssesmentPageDesktop({ isDesktop }) {


    return (
        <>
            <div className='main__page'>
                <Navigation isDesktop={isDesktop} />
                <div className='assesment__page'>
                    <div className="asses-page__header">
                        <h1 className="asses-page__heading">Assesment</h1>
                        <DividerIcon />
                        <div className="asses-page__tabs">
                            <div className="asses-page__my-asses active">My Assesments</div>
                            <div className="asses-page__unstop-asses">Unstop Assements</div>
                        </div>
                        <div className="asses-page__switch">
                            <DesktopIcon />
                        </div>
                    </div>
                    <MyAssesment isDesktop={isDesktop} />
                </div>
            </div>
        </>
    )
}

AssesmentPageDesktop.propTypes = {}

export default AssesmentPageDesktop
