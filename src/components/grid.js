import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/devices';
import RaisedButton from 'material-ui/RaisedButton';

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

            <tr key={device._id}>
                <td>{device.deviceName}</td>
                <td>{device.deviceType}</td>
                <td>{device.description}</td>
                <td>{device.isHub ? "Yes" : "No"}</td>
                <td> <RaisedButton label="Default" /></td>
            </tr>

        )
    }

    buildHeaderRow() {
        return (
            <tr >
                <td>Name</td>
                <td>Type</td>
                <td>Description</td>
                <td>Hub</td>
            </tr>
        )
    }

    render() {
        if (this.props.devices) {
            return (

                <table>
                    <thead>
                        {this.buildHeaderRow()}
                    </thead>
                    <tbody>
                        {this.props.devices.map(this.createDeviceRow)}
                    </tbody>
                </table>
            )
        }
        else {
            return (this.buildHeaderRow())
        }
    }
}

function mapStateToProps(state) {
    return {
        devices: state.devices
    }
}

export default connect(mapStateToProps, actions)(Grid);