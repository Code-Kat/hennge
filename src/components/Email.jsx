import React, { useEffect, useState } from "react";
import folderIcon from "../assets/folder.png";
import "./Email.css";
import clipIcon from "../assets/icon_clip.svg";
import mailIcon from "../assets/icon_mail_sp.svg";
import arrowIcon from "../assets/icon_arrow02.svg";

function Email({
  from,
  to,
  replies,
  subject,
  date,
  attachment,
  time,
  message,
}) {
  const [displayDate, setDisplayDate] = useState();
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const today = new Date();

    const d = date.toLocaleDateString();
    const td = today.toLocaleDateString();

    if (d === td) {
      setDisplayDate(time);
    } else if (date.getMonth() === today.getMonth()) {
      setDisplayDate(date.substr(4, 6));
    } else {
      setDisplayDate(d);
    }
  }, [date, time]);

  return (
    <div>
      <div className="email" onClick={() => setShowMessage(!showMessage)}>
        <div className="emailTop">
          <div className="email__from">
            <p className="ellepsis">{from}</p>
          </div>
          <div className="email__to">
            <p className="ellepsis">{to}</p>
            {replies !== 0 && (
              <div className="email__replies">
                <img src={folderIcon} alt="replies" className="folderIcon" />
                <p>+ {replies}</p>
              </div>
            )}
          </div>
          <div className="email__subject">
            <p>{subject}</p>
            {attachment === true && (
              <img src={clipIcon} alt="attachments" className="clipIcon" />
            )}
          </div>
          <p className="email__date">{displayDate}</p>
        </div>
        {showMessage && <p className="message">{message}</p>}
      </div>

      <div className="mobileEmail" onClick={() => setShowMessage(!showMessage)}>
        <div className="mobileEmail__top">
          <img src={mailIcon} alt="mail" className="mailIcon" />
          <div className="mobileEmail__topRight">
            <div className="from-date">
              <p className="mobileFrom ellepsis">{from}</p>
              {attachment === true && (
                <img src={clipIcon} alt="attachments" className="clipIcon" />
              )}
              <p className="mobileDate">{displayDate}</p>
              <img src={arrowIcon} alt="arrow" className="arrowIcon" />
            </div>
            <div className="email__to">
              <p className="ellepsis">{to}</p>
              {replies !== 0 && (
                <div className="email__replies">
                  <img src={folderIcon} alt="replies" className="folderIcon" />
                  <p>+ {replies}</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <p className="mobileSubject ellepsis">{subject}</p>
        {showMessage && <p className="message">{message}</p>}
      </div>
    </div>
  );
}

export default Email;
