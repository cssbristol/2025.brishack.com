import "../css/Schedule.css";

function Schedule() {
  return (
    <div className="table-container">
      <div className="table-section" id="schedule">
        <div className="table-heading">Schedule</div>
        <div className="schedule-grid">
          <table className="table">
            <caption>Day 1</caption>
            <thead>
              <tr>
                <th>Time</th>
                <th>Event</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>11:30-12:00</td>
                <td>Check In</td>
              </tr>
              <tr>
                <td>12:00</td>
                <td>Introduction</td>
              </tr>
              <tr>
                <td>12:30</td>
                <td>Start Coding</td>
              </tr>
              <tr>
                <td>21:30</td>
                <td>Move to Queens Cafe</td>
              </tr>
            </tbody>
          </table>

          <table className="table">
            <caption>Day 2</caption>
            <thead>
              <tr>
                <th>Time</th>
                <th>Event</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>10:00</td>
                <td>Move back to MVB</td>
              </tr>
              <tr>
                <td>10:15</td>
                <td>Breakfast</td>
              </tr>
              <tr>
                <td>12:30</td>
                <td>Coding Ends</td>
              </tr>
              <tr>
                <td>13:30</td>
                <td>Judging Begins</td>
              </tr>
              <tr>
                <td>15:30</td>
                <td>Closing Presentation</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
