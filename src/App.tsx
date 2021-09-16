import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navigation} from "./components/Navigation/Navigation";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {ActionTypes, store} from "./redux/store";
import {NewStoreType} from "./redux/redux-store";


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
                        posts={props.store.profileReducer.posts}
                        message={props.store.profileReducer.messageForNewPost}
                        dispatch ={props.dispatch.bind(props.store)}
                        addCallback={store.addPost.bind(props.store)}
                        changeNewTextCallback={store.changeNewText.bind(props.store)}
                    />}/>
                    <Route path='/dialogs' render={() => <Dialogs
                        dialogs={props.store.dialogsReducer.dialogs}
                        messages={props.store.dialogsReducer.messages}
                        dispatch ={props.dispatch.bind(props.store)}
                        newMessageText={props.store.dialogsReducer.newMessageText}
                        changeNewTextMessageCallback={store.changeNewTextMessage.bind(store)}
                    />}/>
                </div>
            </div>
          </BrowserRouter>
      );
}

export default App;
