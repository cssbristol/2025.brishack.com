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
                <td>11:00-12:00</td>
                <td>Registration, merch pick-up and introduction talk</td>
              </tr>
              <tr>
                <td>12:00-13:30</td>
                <td>Hacking Start</td>
              </tr>
              <tr>
                <td>13:30-14:30</td>
                <td>Lunch</td>
              </tr>
              <tr>
                <td>14:30-18:00</td>
                <td>Hackspace closes for the day</td>
              </tr>
              <tr>
                <td>19:00</td>
                <td>Dinner</td>
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
                <td>8:30-9:00</td>
                <td>Breakfast</td>
              </tr>
              <tr>
                <td>12:00-13:00</td>
                <td>Hacking ends and lunch</td>
              </tr>
              <tr>
                <td>13:00-15:00</td>
                <td>Judging Begins</td>
              </tr>
              <tr>
                <td>15:00-16:00</td>
                <td>Judging concludes and winners announced</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
