import React from 'react'
import PropTypes from 'prop-types'
import './Navigation.css';
import { ReactComponent as DashboardIcon } from "./../../assets/svg/dashboard.svg";
import { ReactComponent as NoteIcon } from "./../../assets/svg/note.svg";
import { ReactComponent as RoundsIcon } from "./../../assets/svg/rounds.svg";
import { ReactComponent as QuizIcon } from "./../../assets/svg/quiz.svg";
import { ReactComponent as CrossIcon } from "./../../assets/svg/cross.svg";


function Navigation({ isDesktop = true, isActive = false, onCloseClick }) {
    return (
        <>
            {!isDesktop && <div className={`nav-wrapper__shadow ${isActive ? 'active' : ''}`}>
            </div >}
            <div className={`nav__wrapper ${isActive ? 'active' : ''}`}>
                {
                    !isDesktop && <div className="nav__control">
                        <p className="nav__menu-text">Menu </p>
                        <CrossIcon onClick={onCloseClick} />
                    </div>
                }
                <div className="nav__sec-one">
                    <div className="nav__section-wrapper">
                        <DashboardIcon />
                        <p className="nav__section-text">Dashboard</p>
                    </div>
                    <div className="nav__section-wrapper active">
                        <NoteIcon />
                        <p className="nav__section-text">Assesment</p>
                    </div>
                    <div className="nav__section-wrapper">
                        <QuizIcon />
                        <p className="nav__section-text">My Library</p>
                    </div>
                </div>
                <div className="nav__sec-two">
                    {isDesktop && <div className="nav__section-tag">
                        <p className="nav__tag-text">Admin</p>
                    </div>}
                    <div className="nav__section-wrapper nav__section-wrapper--tag">
                        <RoundsIcon />
                        <p className="nav__section-text">Round Status</p>
                        {!isDesktop && <div className="nav__section-tag">
                            <p className="nav__tag-text">Admin</p>
                        </div>}
                    </div>
                </div>
            </div >
            {isDesktop && <div className={`nav-wrapper__shadow ${isActive ? 'active' : ''}`}></div>}
        </>
    )
}

Navigation.propTypes = {}

export default Navigation
