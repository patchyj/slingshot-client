/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import Navbar from './layout/NavConnect';
import HomePage from './HomePage';
import About from './pages/about/About';
import PortfolioContainer from './pages/portfolio/PortfolioContainer';
import Skills from './pages/skills/Skills';
import Experience from './pages/experience/Experience';
import S from './styledComponents';
import skillsList from './pages/skills/skillsList.json';
import expList from './pages/experience/experienceList.json';

function App() {
  return (
    <S.StyledApp className="container-fluid">
      <div className="row">
        {/* SIDE NAV */}
        <aside className="col-12 col-md-2 p-0">
          <Navbar />
        </aside>
        <div className="col">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={PortfolioContainer} />
            <Route
              exact
              path="/skills"
              render={props => <Skills {...props} skillsList={skillsList} />}
            />
            <Route
              exact
              path="/experience"
              render={props => <Experience {...props} expList={expList} />}
            />
          </Switch>
        </div>
      </div>
    </S.StyledApp>
  );
}

export default hot(module)(App);
