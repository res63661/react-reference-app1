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

            <tr key={device._id}>
                <th>{device.deviceName}</th>
                <th>{device.deviceType}</th>
                <th>{device.description}</th>
                <th>{device.isHub ? "Yes" : "No"}</th>
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