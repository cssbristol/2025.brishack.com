import '../css/Schedule.css'

function Schedule() {
    return (
        <div className="table-container">
            <div className="table-section" id="schedule">
                <div className="table-heading">Rundown</div>
                <div>
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
                                <td>11:00</td>
                                <td>Registration, merch pick-up and introduction talk</td>
                            </tr>
                            <tr>
                                <td>13:30</td>
                                <td>Snacks</td>
                            </tr>
                            <tr>
                                <td>18:00</td>
                                <td>Hackspace close</td>
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
                                <td>8:30</td>
                                <td>Breakfast</td>
                            </tr>
                            <tr>
                                <td>12:00</td>
                                <td>Hacking ends and lunch</td>
                            </tr>
                            <tr>
                                <td>13:00</td>
                                <td>Judging Begins</td>
                            </tr>
                            <tr>
                                <td>15:00</td>
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
