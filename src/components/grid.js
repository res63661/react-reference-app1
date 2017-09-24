import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/devices';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';

import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

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

            <TableRow key={device._id} >
                <TableRowColumn>{device.deviceName}</TableRowColumn>
                <TableRowColumn>{device.deviceType}</TableRowColumn>
                <TableRowColumn>{device.description}</TableRowColumn>
                <TableRowColumn>{device.isHub ? "Yes" : "No"}</TableRowColumn>
                <TableRowColumn> <FlatButton label="Edit" /></TableRowColumn>
            </TableRow>

        )
    }

    buildHeaderRow() {
        return (
            <TableRow>
                <TableHeaderColumn>Name</TableHeaderColumn>
                <TableHeaderColumn>Type</TableHeaderColumn>
                <TableHeaderColumn>Description</TableHeaderColumn>
                <TableHeaderColumn>Hub</TableHeaderColumn>
            </TableRow>
        )
    }

    tableState = {
        fixedHeader: true,
        fixedFooter: true,
        stripedRows: true,
        showRowHover: false,
        selectable: true,
        enableSelectAll: false,
        deselectOnClickaway: true,
        showCheckboxes: true,
        height: '300px',
        displayRowCheckbox: true,
        multiSelectable: true
    };

    styles = {
        block: {
            maxWidth: 250,
        },
        toggle: {
            marginBottom: 16,
        },
        thumbOff: {
            backgroundColor: '#ffcccc',
        },
        trackOff: {
            backgroundColor: '#ff9d9d',
        },
        thumbSwitched: {
            backgroundColor: 'red',
        },
        trackSwitched: {
            backgroundColor: '#ff9d9d',
        },
        labelStyle: {
            color: 'red',
        },
    };

    showChecks = true;

    toggle(event, isInputChecked) {
        this.tableState.displayRowCheckbox = isInputChecked;

        this.forceUpdate();//() => alert(this.tableState.displayRowCheckbox));
    }

    // renderRows() {
    //     if (this.props.devices.map(this.createDeviceRow)) {
    //         return (this.props.devices.map(this.createDeviceRow))
    //     }
    //     else {
    //         return <p>no data</p>
    //     }
    // }

    render() {
        if (this.props.devices) {
            return (

                <div>
                    <div>
                        <Card style={({ marginTop: 20, padding: 20, marginBottom: 10 })}>
                            <Toggle
                                label="Show Checkboxes"
                                defaultToggled={true}
                                style={this.styles.toggle}
                                onToggle={this.toggle.bind(this)}
                            />
                        </Card>
                    </div>
                    <div>
                        <Table
                            height={this.tableState.height}
                        >
                            <TableHeader
                                adjustForCheckbox={false}
                            >
                                {this.buildHeaderRow()}
                            </TableHeader>
                            <TableBody stripedRows={true} backgroundColor={"#00ff00"}
                                displayRowCheckbox={this.tableState.displayRowCheckbox}>
                                {this.props.devices.devices.map(this.createDeviceRow)}
                            </TableBody>
                        </Table>
                    </div>
                </div>

            )
        }
        else {
            return (this.buildHeaderRow())
        }
    }
}

function mapStateToProps(state) {
    return {
        devices: state.devices,
        trees: state.trees
    }
}

export default connect(mapStateToProps, actions)(Grid);