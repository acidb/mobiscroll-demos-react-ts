import { Page } from '@mobiscroll/react';
import { Link } from 'react-router-dom';
import { demos } from '../Demos';

export default function Home() {
  return (
    <Page>
      <div className="app-home mbsc-padding">
        {demos.map((main) => (
          <div key={main.unique}>
            <h2>{main.name}</h2>
            {main.items.map((sub) => (
              <div key={sub.unique}>
                <h3>{sub.name}</h3>
                {sub.items.map((group) => (
                  <div key={group.name}>
                    <h4>{group.name}</h4>
                    <ul>
                      {group.items.map((demo) => (
                        <li key={demo.unique}>
                          <Link to={'/' + main.unique + '/' + sub.unique + '/' + demo.unique}>{demo.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </Page>
  );
}
