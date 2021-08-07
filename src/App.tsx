import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navigation} from "./components/Navigation/Navigation";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {DialogItem} from "./components/Dialogs/DialogItem/DialogItem";

function App() {
  return (
      <BrowserRouter>
        <div className="app-wrapper">
            <Header />
            <Navigation />
            <div className="app-wrapper-content">
                <Route path='/dialogs' component={Dialogs}/>
                <Route path='/profile' component={Profile} />
            </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
