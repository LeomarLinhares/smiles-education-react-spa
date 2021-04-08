import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';

import Education from './pages/Education';

import MainContainer from './components/MainContainer';
import Sidebar from './components/Sidebar';
import GlobalProvider from './contexts/GlobalContext';
import Challenges from './pages/Challenges';
import FAQ from './pages/FAQ';

function App() {
  return (
    <Router>
      <GlobalProvider>
        <div className="App">
          <main>
            <Sidebar />
            <MainContainer>

              <Switch>

                <Route path="/faq">
                  <FAQ />
                </Route>

                <Route path="/desafios">
                  <Challenges />
                </Route>

                <Route path="/">
                  <Education />
                </Route>

              </Switch>

            </MainContainer>
          </main>
        </div>
      </GlobalProvider>
    </Router>
  );
}

export default App;
