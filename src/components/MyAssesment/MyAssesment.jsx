import React, { useState } from 'react'
import PropTypes from 'prop-types'
import AssesmentCard from "./../AssesmentCard/AssesmentCard";
import NewAssesment from '../NewAssesment/NewAssesment';
import "./MyAssesment.css";
import { ReactComponent as SearchIcon } from './../../assets/svg/search.svg'
import { ReactComponent as FilterIcon } from './../../assets/svg/filter.svg'
import { ReactComponent as ChartIcon } from './../../assets/svg/chart.svg'
import AssesmentOverview from '../AssesmentOverview/AssesmentOverview';

const defaultProp = {

}

function MyAssesment({ isDesktop, onAddNewAssesmentClick }) {
    const [showOverview, setShowOverview] = useState(false);
    const handleOverviewClick = () => {
        console.log('click')
        setShowOverview(!showOverview)
    }

    return (
        <div className='my-asses__overview'>
            {isDesktop && <p className="my-asses__text">Assesment Overview</p>}
            <AssesmentOverview isDesktop={isDesktop} isActive={showOverview} />
            <div className="my-asses__header">
                <p className="my-asses__text">My Assesment</p>
                {!isDesktop && <div className="my-asses__features">
                    <span className='my-asses__features-icon'><SearchIcon /></span>
                    <span className='my-asses__features-icon'><FilterIcon /></span>
                    <span className='my-asses__features-icon' onClick={handleOverviewClick}><ChartIcon /></span>
                </div>}
            </div>
            <div className='my-asses__info'>
                <NewAssesment onClick={() => { onAddNewAssesmentClick && onAddNewAssesmentClick() }} />
                <AssesmentCard isDesktop={isDesktop} />
                <AssesmentCard isDesktop={isDesktop} />
                <AssesmentCard isDesktop={isDesktop} />
                <AssesmentCard isDesktop={isDesktop} />
                <AssesmentCard isDesktop={isDesktop} />
                <AssesmentCard isDesktop={isDesktop} />
                <AssesmentCard isDesktop={isDesktop} />
                <AssesmentCard isDesktop={isDesktop} />
                <AssesmentCard isDesktop={isDesktop} />
                <AssesmentCard isDesktop={isDesktop} />
            </div>

        </div>
    )
}

MyAssesment.propTypes = {}

export default MyAssesment
