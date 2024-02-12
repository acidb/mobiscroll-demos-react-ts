import { Link, Outlet, useLocation } from 'react-router-dom';
import { demoTitleMap } from '../Demos';

export default function Root() {
  const location = useLocation();
  const path = location.pathname;
  return (
    <>
      <div className="app-header mbsc-font">
        {path !== '/' && (
          <div className="app-back">
            <Link to="/">
              <span className="mbsc-icon mbsc-font-icon mbsc-icon-ion-ios7-arrow-back"></span>
            </Link>
          </div>
        )}
        <div className="app-title">
          <h1>{demoTitleMap[path] || 'Mobiscroll React Demos'}</h1>
        </div>
      </div>
      <div className="app-page">
        <Outlet />
      </div>
      <div className="app-footer mbsc-font">{path !== '/' && <div className="app-path">{'./src/demos' + path}</div>}</div>
    </>
  );
}
