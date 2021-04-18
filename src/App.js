import { useState } from "react";
import "./App.css";
import TopBar from "./components/TopBar";
import Email from "./components/Email";
import emails from "./emails";
import noEmailsImg from "./assets/logo.png";

function App() {
  const [selectedEmails, setSelectedEmails] = useState(emails);
  const [value, onChange] = useState([new Date(), new Date()]);

  const checkDates = () => {
    var dateFrom = value[0].toLocaleDateString();
    var dateTo = value[1].toLocaleDateString();

    var d1 = dateFrom.split("/");
    var d2 = dateTo.split("/");

    var from = new Date(d1[2], parseInt(d1[1]) - 1, d1[0]);
    var to = new Date(d2[2], parseInt(d2[1]) - 1, d2[0]);

    let i;
    for (i = 0; i < emails.length; i++) {
      var c = emails[i].data.date.toLocaleDateString().split("/");
      var check = new Date(c[2], parseInt(c[1]) - 1, c[0]);
      if (check > from && check < to) {
        setSelectedEmails([...selectedEmails, emails[i]]);
      }
    }
  };

  return (
    <div className="App">
      <TopBar
        selectedEmails={selectedEmails}
        value={value}
        onChange={onChange}
        checkDates={checkDates}
      />
      <div className="app__emails">
        {selectedEmails.length === 0 ? (
          <div className="noEmailsWrapper">
            <img src={noEmailsImg} alt="mail archiver" className="noEmails" />
          </div>
        ) : (
          selectedEmails.map(
            ({
              id,
              data: {
                to,
                from,
                date,
                message,
                replies,
                attachment,
                subject,
                time,
              },
            }) => (
              <Email
                key={id}
                from={from}
                to={to}
                date={date}
                message={message}
                replies={replies}
                attachment={attachment}
                subject={subject}
                time={time}
              />
            )
          )
        )}
      </div>
    </div>
  );
}

export default App;
