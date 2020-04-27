import React, { Component } from 'react';
import { selectSong } from "../actions";
import { connect } from 'react-redux';
class SongList extends Component {

    renderList = ()=>{
        return this.props.songs.map(song => {
            return (
                <div className="item" key={song.title} >
                    <div className="right floated content">
                        <button 
                        className="ui button primary"
                        onClick = {() =>this.props.selectSong(song)}>
                            Select
                        </button>
                    </div>
                    <div className="content">
                        {song.title}
                    </div>
                </div>
            )
        });
    }

    render(){
         //     this.props === {songs:state.songs}
              console.log(this.props);
        return(
            <div className="ui divided list">
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {           
    /*
        This is only for store(i,e state)
        This function will take all of the data inside of the redux store are going to go with some 
        calculation on it that it will shown as props inside of our component 
    */ 
    //All of the data and reducers are inside of redux store
     console.log(state);
    return { songs: state.songs };
}

export default connect(mapStateToProps, { selectSong })(SongList);