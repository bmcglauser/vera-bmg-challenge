import React from 'react';
import './App.scss';
import ActionAreas from './components/ActionAreas';
import Header from './components/Header';
import SignupForm from './components/SignupForm';
import whiteVert from './assets/logos/vert/Vera_Ver_White.svg';

const sampleActionAreas = ['community', 'courts', 'victims'];

function App () {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="primary-content">
        <section className="feature-wrapper">
          <article className="text-wrapper">
            <p className="quote content">"...to be free is not merely to cast off one's chains, but to live in a way that respects and enhances the freedom of others"</p>
            <p className="quote author">— Nelson Mandela, Long Walk to Freedom</p>
            <p className="photo-credit">(photo by Amnesty International)</p>
          </article>
        </section>
        <section className="center-block">
          <article className="poll-data">
            <p className="eve-poll-intro">The American Election Eve Poll is conducted to give greater insight into Americans' deeper throughts, with a focus on Americans of Color</p>
            <p className="recent-poll">In the poll directly preceding November's election, <br /><span className="stressed-text">Black Americans spoke clearly:</span></p>
            <div>
              <div className="stats-wrapper">
                <p className="stat-block">
                  <span className="percent-highlight">93%</span> support more direct accountability for law enforcement officials who abuse and kill Black Americans
                </p>
                <p className="stat-block">
                  <span className="percent-highlight">70%</span> support reducing funding for law enforcement and investing more in social services and programs proven to reduce violence
                </p>
              </div>
            </div>
          </article>
          <ActionAreas areas={sampleActionAreas} />
        </section>
        <p className="join-us">
          <em>Join us in fulfilling the wishes of Black communities</em> across America. Vera strives to effect meaningful justice for Americans still aggressed by government workers hired to serve and protect.
        </p>
        <SignupForm />
        <p className="annual-report">
          Click <a href="https://www.vera.org/annual-report-2020-reckoning-with-justice/">here</a> to read our Annual Report for 2020, prefaced with powerful statements from President and Director Nicholas Turner, and Board Chair Damien Dwin.
        </p>
      </div>
      <section className="footer-wrapper">
        <img src={whiteVert} alt="Vera Institute of Justice" />
      </section>
    </div>
  )
}

export default App;
