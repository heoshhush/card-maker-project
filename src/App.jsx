import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Styles from './App.module.css'
import Login from './components/login/login';
import Maker from './components/maker/maker';

function App({authService, FileInput, cardRepository}) {
  return(
    <div className={Styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
             <Login authService = {authService} />
          </Route>
          <Route path="/maker">
              <Maker 
                authService = {authService}
                FileInput={FileInput}
                cardRepository={cardRepository}
              />
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  )
}

export default App;
