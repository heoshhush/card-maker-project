import Styles from './App.module.css'
import Login from './components/login/login';

function App({authService}) {
  return(
    <div className={Styles.app}>
      <Login
        authService = {authService}
      />
    </div>
  )
}

export default App;
