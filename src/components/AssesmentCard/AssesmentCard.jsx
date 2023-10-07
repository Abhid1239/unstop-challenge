import React from 'react';
import PropTypes from 'prop-types';
import './AssesmentCard.css'
import { ReactComponent as JobIcon } from './../../assets/svg/job.svg'
import { ReactComponent as ClockIcon } from './../../assets/svg/clock.svg'
import { ReactComponent as HamburgerIcon } from './../../assets/svg/hamburger.svg'
import { ReactComponent as LinkIcon } from './../../assets/svg/link.svg'
import { ReactComponent as CalenderIcon } from './../../assets/svg/calender.svg'
// import { ReactComponent as DividerIcon } from './../../assets/svg/divider.svg'
// import Icon from 'icon';
const propTypes = {
    assesmentData: PropTypes.object
};

const defaultProps = {
    assesmentData: {
        name: "Math",
        type: "Job",
        date: "20 Apr 23",
        durationMin: 90,
        questionCount: 20,
        link: "abcd",
        attemptedPeople: [
            {
                name: "Abcd",
                link: "abcd",
                id: "1"
            },
            {
                name: "Abcd",
                link: "abcd",
                id: "2"
            },

            {
                name: "Abcd",
                link: "abcd",
                id: "4"
            },
            {
                name: "Abcd",
                link: "abcd",
                id: "5"
            },
            {
                name: "Abcd",
                link: "abcd",
                id: "12"
            },
            {
                name: "Abcd",
                link: "abcd",
                id: "22"
            },

            {
                name: "Abcd",
                link: "abcd",
                id: "42"
            },
            {
                name: "Abcd",
                link: "abcd",
                id: "52"
            },
        ],
        attemptedPeopleCount: 5000,
    }
}

const PeopleDetails = ({ people = [], peopleCount = 0 }) => {
    const peopleInfo = [];
    let totalLength = Math.min(people.length, 3);
    const peopleCards = [];
    const wrapperStyles = totalLength > 1 ? {
        width: `${totalLength === 2 || people.length > 999 ? 45 : 60
            }px`
    } : null;

    const tagColors = ['#3079E1', '#E9407A', '#6548ee']
    for (let i = 0; i < totalLength; i++) {
        const styles = i !== 0 ? {
            position: "absolute",
            left: `${15 * i}px`
        } : {}
        peopleCards.push(
            <p
                className='card__people-info'
                key={people[i].id}
                style={{ ...styles, background: tagColors[i] }
                }
            >
                {people[i].name.substring(0, 2)}
            </p >)
    }
    peopleInfo.push(<div className='card__people_wrapper' style={wrapperStyles}>
        {peopleCards}
    </div>)
    if (peopleCount > 3) {
        peopleInfo.push(<p className='card__people-count'>
            +{peopleCount - 3}
        </p>)
    }
    return peopleInfo;

}

function AssesmentCard({ assesmentData, key = "abcx" }) {
    const {
        name,
        type,
        date,
        durationMin,
        questionCount,
        link,
        attemptedPeople,
        attemptedPeopleCount,
    } = assesmentData;
    const isDesktop = true;
    return (
        <div className='card' key={key}>
            <div className='card__info'>
                <div className='card__lhs card__lhs--desk'>
                    <JobIcon className='card__job-icon' />
                    <div className='card__asses-details'>
                        <p className='card__asses-name'>{name} Assesment</p>
                        <p className='card__asses-type'>
                            {type}
                            <span className='card__asses-date'>
                                |
                                {!isDesktop ? <ClockIcon className='card__clock-icon' /> :
                                    <CalenderIcon className='card__clock-icon' />}
                                {date}
                            </span>
                        </p>
                    </div>
                </div>
                <div className='card__rhs'>
                    <div className='card__tooltip'>
                        <HamburgerIcon className='card__hamburger-icon' />
                    </div>
                </div>
            </div>
            <div className='card__details'>
                <div className='card__lhs'>
                    <p className='card__det-info'>
                        <span className='card__det-count'>{durationMin}</span>Duration
                    </p>
                    <p className='card__det-info'>
                        <span className='card__det-count'>{questionCount}</span> Question
                    </p>
                </div>
                <div className='card__rhs'>
                    <a className='card__share' href={link}>
                        <LinkIcon />
                        Share
                    </a>
                    {attemptedPeople.length > 0 && (<PeopleDetails people={attemptedPeople} peopleCount={attemptedPeopleCount} />)}
                </div>
            </div>
        </div>
    )
}

AssesmentCard.propTypes = propTypes;
AssesmentCard.defaultProps = defaultProps;

export default AssesmentCard;