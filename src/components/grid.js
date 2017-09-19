import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/devices';

class Grid extends Component
{
    componentWillMount()
    {
        //Pull devices.
        actions.requestDevices();
    }

    render(){
        return(
            <div>grid works</div>
        )
    }
}

function mapStateToProps(state)
{
    return{
        devices: state.devicesReturned
    }
}

export default connect(mapStateToProps)(Grid);