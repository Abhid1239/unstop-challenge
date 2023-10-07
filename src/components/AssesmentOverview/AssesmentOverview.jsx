import React from 'react'
import PropTypes from 'prop-types'
import AssesmentCard from "./../AssesmentCard/AssesmentCard";
import "./AssesmentOverview.css";
import { ReactComponent as SearchIcon } from './../../assets/svg/search.svg'
import { ReactComponent as FilterIcon } from './../../assets/svg/filter.svg'
import { ReactComponent as ChartIcon } from './../../assets/svg/chart.svg'
import { ReactComponent as PlusIcon } from './../../assets/svg/plus.svg'

const defaultProp = {

}

function AssesmentOverview(props) {
    return (
        <div className='my-asses__overview'>
            {/* { Assesment Info} */}
            <div>
                <div className="my-asses__header">
                    <p className="my-asses__text">My Assesment</p>
                    <div className="my-asses__features">
                        <span className='my-asses__features-icon'><SearchIcon /></span>
                        <span className='my-asses__features-icon'><FilterIcon /></span>
                        <span className='my-asses__features-icon'><ChartIcon /></span>
                    </div>
                </div>
                <div className='my-asses__new-wrapper'>
                    <div className='my-asses__new-add'>
                        <PlusIcon />
                    </div>
                    <p className="my-asses__new-text">New Assessment</p>
                    <p className="my-asses__new-info">From here you can add questions of multiple types like MCQs, subjective (text or paragraph)!</p>

                </div>
            </div>
            <AssesmentCard />
            <AssesmentCard />
            <AssesmentCard />
            <AssesmentCard />
            <AssesmentCard />
            <AssesmentCard />
            <AssesmentCard />
            <AssesmentCard />
            <AssesmentCard />
            <AssesmentCard />
        </div>
    )
}

AssesmentOverview.propTypes = {}

export default AssesmentOverview
