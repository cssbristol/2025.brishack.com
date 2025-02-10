import "../css/Rules.css";

function Rules(){
  return (
    <div className="rules-container" id="rules">
        <div className="rules-heading">Rules</div>
        <ol className="arial">
          <li>The maximum team size is six people.</li>
          <li>
            Be responsible and look after your and your teammates' wellbeing. You
            should try to get at least a couple hours sleep, drink water, and have
            a break from your screen every once in a while.
          </li>
          <li>
            Prizes will be awarded to a team; it is up to the team to decide how
            to distribute these fairly.
          </li>
          <li>
            All work must be done within the 24-hours of the hackathon. However,
            you are welcome to think of project ideas before the Hackathon begins.
          </li>
          <li>
            All third-party tools, libraries, assets or other materials used must
            be declared during judging.
          </li>
          <li>Projects must not be obscene or offensive.</li>
          <li>
            Participants retain the rights to all IP produced during the
            hackathon, but give CSS, BEEES and BBS the University and event sponsors
            permission to showcase projects (with appropriate credit) on website,
            blogs, etc. if they wish to do so.
          </li>
          <li>
            Team names must not be obscene or offensive. If a team name is deemed
            innappropriate, you will be required to change it on the day of the
            Hackathon.
          </li>
          <li>Participants must be at least 18 years of age.</li>
          <li>
            Use of the Hackspace is prohibited when under the influence of drugs
            alcohol.
          </li>
        </ol>
    </div>
  );
}

export default Rules;
