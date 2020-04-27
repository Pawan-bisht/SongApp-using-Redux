import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongDetail extends Component {
       
    render(){
        console.log(this.props)
        
        if(!this.props.song)
            return (<div>Select A Song Please !</div>);
        
        const { title, duration } = this.props.song;
            return (
            <div>
                <p>Title  : { title }</p> <br/>    
                <p>Duration : { duration }</p> 
            </div>
        )     
    }
}

const mapStateToProps = (state)=>{
    return { song : state.selectedSong };
}


export default connect(mapStateToProps)(SongDetail);