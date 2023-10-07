import React from 'react'
import PropTypes from 'prop-types'
import AssesmentCard from "./../AssesmentCard/AssesmentCard";

const defaultProp = {

}

function AssesmentOverview(props) {
    return (
        <div className='asses_overview'>
            {/* { Assesment Info} */}
            <div>
                <div className="asses__header">
                    <p className="asses__text"></p>
                    <div className="asses__features"></div>
                </div>
                {/* { new Assignmnet} */}
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
