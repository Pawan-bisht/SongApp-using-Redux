import React, { Component } from "react";
import SongDetail from './SongDetail';

import SongList from './SongList';
export default class App extends Component{
    render(){
        return (
            <div className="ui container grid">
                <div className="ui row">
                    <div className="column eight wide">
                        <SongList />
                    </div>
                    <div className="column eight wide">
                        <SongDetail />
                    </div>
                </div>
            </div>
            // <div><SongList /></div>
        );
    }
}