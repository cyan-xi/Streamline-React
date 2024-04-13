import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import S24SoaresDecisions from './views/s24-soares-decisions'
import S24HauffDecision from './views/s24-hauff-decision'
import Home from './views/home'
import S24BioBuildersProject from './views/s24-bio-builders-project'
import S24ShahXenotransplantation from './views/s24-shah-xenotransplantation'
import S24WillardMED from './views/s24-willard-med'
import S24CantyKessler from './views/s24-canty-kessler'
import S24LiRBCFolate from './views/s24-li-rbc-folate'
import S24YanLidar from './views/s24-yan-lidar'
import S24SoaresCosmetics from './views/s24-soares-cosmetics'
import S24DoHomeless from './views/s24-do-homeless'
import S24YoungWorlds from './views/s24-young-worlds'
import S24HoClimate from './views/s24-ho-climate'
import S24JangSkincare from './views/s24-jang-skincare'
import S24HoRoss from './views/s24-ho-ross'
import S24LidforssCRISPR from './views/s24-lidforss-crispr'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          component={S24SoaresDecisions}
          exact
          path="/s24-soares-decisions"
        />
        <Route component={S24HauffDecision} exact path="/s24-hauff-decision" />
        <Route component={Home} exact path="/" />
        <Route
          component={S24BioBuildersProject}
          exact
          path="/s24-bio-builders-project"
        />
        <Route
          component={S24ShahXenotransplantation}
          exact
          path="/s24-shah-xenotransplantation"
        />
        <Route component={S24WillardMED} exact path="/s24-willard-med" />
        <Route component={S24CantyKessler} exact path="/s24-canty-kessler" />
        <Route component={S24LiRBCFolate} exact path="/s24-li-rbc-folate" />
        <Route component={S24YanLidar} exact path="/s24-yan-lidar" />
        <Route
          component={S24SoaresCosmetics}
          exact
          path="/s24-soares-cosmetics"
        />
        <Route component={S24DoHomeless} exact path="/s24-do-homeless" />
        <Route component={S24YoungWorlds} exact path="/s24-young-worlds" />
        <Route component={S24HoClimate} exact path="/s24-ho-climate" />
        <Route component={S24JangSkincare} exact path="/s24-jang-skincare" />
        <Route component={S24HoRoss} exact path="/s24-ho-ross" />
        <Route
          component={S24LidforssCRISPR}
          exact
          path="/s24-lidforss-crispr"
        />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
