import React from "react";
import PropTypes from "prop-types";
import AssesmentCard from "./../AssesmentCard/AssesmentCard";
import NewAssesment from "../NewAssesment/NewAssesment";
import "./AssesmentOverview.css";
import { ReactComponent as AgendaIcon } from "./../../assets/svg/agenda.svg";
import { ReactComponent as LinkHorizontalIcon } from "./../../assets/svg/link_horizaontal.svg";
import { ReactComponent as GroupIcon } from "./../../assets/svg/group.svg";
import { ReactComponent as InternetIcon } from "./../../assets/svg/internet.svg";
import { ReactComponent as DividerIcon } from "./../../assets/svg/divider.svg";


const propTypes = {
    overviewData: PropTypes.object
};

const defaultProps = {
    overviewData: {
        id: "24",
        totalAssesment: 34,
        totalProposed: 11,
        candidates: {
            totalCandidates: 11145,
            ongoingCandidates: 89,
            attemptedCandidates: 1114,
            attemptingCandidates: 43,
        },
        source: {
            email: 11000,
            emailPending: 45,
            social: 400,
            socialPending: 5,
            unique: 1000,
            uniquePending: 15,

        }
    }
}


function AssesmentOverview({ overviewData, isDesktop }) {
    const { id,
        totalAssesment,
        totalProposed,
        candidates: {
            totalCandidates,
            ongoingCandidates,
            attemptedCandidates,
            attemptingCandidates
        },
        source: {
            email,
            emailPending,
            social,
            socialPending,
            unique,
            uniquePending },

    } = overviewData
    return (
        <div className="assesment-overview__wapper" key={id}>
            <div className="overview__wrapper">
                <div className="overview__first-section">
                    <div className={`overview__container ${isDesktop ? "" : "overview__total-wrapper"}`}>
                        <p className="overview__heading-text">Total Assessment</p>
                        <div className="overview__details">
                            <AgendaIcon />
                            <p className="overview__count">
                                {totalAssesment}
                            </p>
                        </div>
                    </div>
                    {!isDesktop && <div className="overview__container overview__total-proposed">
                        <p className="overview__heading-text">Total Proposed</p>
                        <div className="overview__details">
                            <LinkHorizontalIcon />
                            <p className="overview__count">
                                {totalProposed}
                            </p>
                        </div>
                    </div>}
                </div>
                <div className="overview__container  overview__candidates">
                    <p className="overview__heading-text">Total Candidates</p>
                    <div className="overview__details">
                        <GroupIcon />
                        <div>
                            <p className="overview__count">
                                {totalCandidates}
                                <span className="overview__recent">+{ongoingCandidates}</span>
                            </p>
                            <p className="overview__info-text">Total Candidate</p>
                        </div>
                        <DividerIcon />
                        <div>
                            <p className="overview__count">
                                {attemptedCandidates}
                                <span className="overview__recent">+{attemptingCandidates}</span>
                            </p>
                            <p className="overview__info-text">Who Attempted</p>
                        </div>
                    </div>
                </div>
                <div className={`overview__container ${isDesktop ? "" : "overview__cand-score"}`}>
                    <p className="overview__heading-text">Candidates Source</p>
                    <div className="overview__details">
                        <InternetIcon />
                        <div>
                            <p className="overview__count">
                                {email}
                                <span className="overview__recent">+{emailPending}</span>
                            </p>
                            <p className="overview__info-text">E-mail</p>
                        </div>
                        <DividerIcon />

                        <div>
                            <p className="overview__count">
                                {social}
                                <span className="overview__recent">+{socialPending}</span>
                            </p>
                            <p className="overview__info-text">Social Share</p>
                        </div>
                        <DividerIcon />

                        <div>
                            <p className="overview__count">
                                {unique}
                                <span className="overview__recent">+{uniquePending}</span>
                            </p>
                            <p className="overview__info-text">Unique Link</p>
                        </div>
                    </div>
                </div>
                {isDesktop && <div className="overview__container overview__total-proposed">
                    <p className="overview__heading-text">Total Proposed</p>
                    <div className="overview__details">
                        <LinkHorizontalIcon />
                        <p className="overview__count">
                            {totalProposed}
                        </p>
                    </div>
                </div>}
            </div>
        </div>
    );
}


AssesmentOverview.propTypes = propTypes;
AssesmentOverview.defaultProps = defaultProps;

export default AssesmentOverview;
