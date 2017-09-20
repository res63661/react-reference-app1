import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/devices';

class Grid extends Component {
    componentWillMount() {
        //Pull devices.
        this.props.requestDevices();
        console.log(this.props.devices);
    }


    // <p className="card-text">{user.company.name}</p>
    // <a className="btn btn-primary">{user.website}</a>

    createDeviceRow(device) {
        return (

            <div className="card card-block" key={device.title}>
                <h4 className="card-title">{device.title}</h4>
                <p className="card-text">{device.body}</p>
            </div>
        )
    }

    buildHeaderRow(){
        return(<div>no data</div>)
    }

    render() {
        if (this.props.devices) {
            return (
                <div>{this.props.devices.map(this.createDeviceRow)}</div>
            )
        }
        else {
            return(this.buildHeaderRow())
        }
    }
}

function mapStateToProps(state) {
    return {
        devices: state.devices
    }
}

export default connect(mapStateToProps, actions)(Grid);