import { Page, Segmented, SegmentedGroup, setOptions /* localeImport */ } from '@mobiscroll/react';
import { FC } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => (
  <Page>
    <div className="mbsc-form-group">
      <div className="mbsc-form-group-title">Single select</div>
      <SegmentedGroup name="range">
        <Segmented value="day">Day</Segmented>
        <Segmented value="week">Week</Segmented>
        <Segmented value="month">Month</Segmented>
        <Segmented value="year" defaultChecked={true}>
          Year
        </Segmented>
      </SegmentedGroup>
    </div>
    <div className="mbsc-form-group">
      <div className="mbsc-form-group-title">Multiple select</div>
      <SegmentedGroup name="days" select="multiple">
        <Segmented value="sun" disabled>
          S
        </Segmented>
        <Segmented value="mon" defaultChecked={true}>
          M
        </Segmented>
        <Segmented value="tue">T</Segmented>
        <Segmented value="wed">W</Segmented>
        <Segmented value="thu" defaultChecked={true}>
          T
        </Segmented>
        <Segmented value="fri">F</Segmented>
        <Segmented value="sat" disabled>
          S
        </Segmented>
      </SegmentedGroup>
    </div>
    <div className="mbsc-form-group">
      <div className="mbsc-form-group-title">Text and icon</div>
      <SegmentedGroup name="app">
        <Segmented value="featured" icon="material-star" defaultChecked={true}>
          Featured
        </Segmented>
        <Segmented value="explore" icon="material-explore">
          Explore
        </Segmented>
        <Segmented value="updates" icon="material-system-update">
          Updates
        </Segmented>
      </SegmentedGroup>
    </div>
    <div className="mbsc-form-group">
      <div className="mbsc-form-group-title">Icon</div>
      <SegmentedGroup name="settings">
        <Segmented value="reply" icon="fa-mail-reply" />
        <Segmented value="retweet" icon="fa-retweet" />
        <Segmented value="favorite" icon="star3" defaultChecked={true} />
        <Segmented value="setting" icon="cogs" />
      </SegmentedGroup>
    </div>
    <div className="mbsc-form-group">
      <div className="mbsc-form-group-title">Disabled</div>
      <SegmentedGroup name="org" disabled>
        <Segmented value="individual" defaultChecked={true}>
          Idividual
        </Segmented>
        <Segmented value="team">Team</Segmented>
        <Segmented value="company">Company</Segmented>
      </SegmentedGroup>
    </div>
  </Page>
);
export default App;
