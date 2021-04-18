import React from "react";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import calendarImg from "../assets/icon_calendar.svg";
import "./TopBar.css";
import searchIcon from "../assets/icon_search.svg";
import triangleIcon from "../assets/icon_arrow01.svg";

function TopBar({ selectedEmails, value, onChange, checkDates }) {
  return (
    <div className="topBar">
      <div className="dateSearch">
        <DateRangePicker
          format="y/M/d"
          onChange={onChange}
          value={value}
          calendarIcon={
            <img src={calendarImg} alt="calendar" className="calendarImg" />
          }
        />
        <img
          src={searchIcon}
          alt="search"
          className="searchIcon"
          onClick={checkDates}
        />
      </div>
      <h3 className="results">
        {`Results: ${selectedEmails.length} email(s)`}
      </h3>
      <div className="emailTopBarContainer">
        {selectedEmails.length === 0 ? (
          <div className="emailTopBarNone">&nbsp;</div>
        ) : (
          <div className="emailTopBar">
            <h4 className="emailTopBar__from">From</h4>
            <h4 className="emailTopBar__to">To</h4>
            <h4 className="emailTopBar__subject">Subject</h4>
            <div className="emailTopBar__date">
              <h4>Date</h4>
              <img src={triangleIcon} alt="triangle" className="triangleIcon" />
            </div>
            <div className="mobileTopBar">
              <strong>From</strong>
              <img src={triangleIcon} alt="triangle" className="triangleIcon" />
              <p>&nbsp;&nbsp;| To | Subject | Date |</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TopBar;
