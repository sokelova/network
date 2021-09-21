import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navigation} from "./components/Navigation/Navigation";
import {Profile} from "./components/Profile/Profile";
import {ActionTypes, store} from "./redux/store";
import {NewStoreType} from "./redux/redux-store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";


type PropsType={
    store: NewStoreType
    store1: any
    dispatch: (action: ActionTypes) => void
}

const App: React.FC<PropsType> = (props) =>{
      return (
          <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navigation />
                <div className="app-wrapper-content">
                    <Route path='/profile' render={() => <Profile
                        store={props.store}
                        state={props.store1}
                        // posts={props.store.profileReducer.posts}
                        // message={props.store.profileReducer.messageForNewPost}
                        // dispatch ={props.dispatch.bind(props.store)}
                        // addCallback={store.addPost.bind(props.store)}
                        // changeNewTextCallback={store.changeNewText.bind(props.store)}
                    />}/>
                    <Route path='/dialogs' render={() => <DialogsContainer
                        store={props.store}
                        state={props.store1}
                    />}/>
                </div>
            </div>
          </BrowserRouter>
      );
}

export default App;
