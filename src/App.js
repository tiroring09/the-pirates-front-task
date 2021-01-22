import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import './styles/app.css';

import { StoreContext } from './context/storeContext';
import { useState } from 'react';
import { storeData } from './data/data';

function App() {
  const [storeList, setStoreList] = useState(storeData);
  
  return (
    <StoreContext.Provider value={{storeList, setStoreList}}>
      <div className="topContainer">
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="*" component={Detail}/>
          </Switch>
        </Router>
      </div>
    </StoreContext.Provider>
  );
}

export default App;
