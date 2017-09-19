import * as ReducerTypes from './types';
import axios from 'axios';

export function requestDevices()
{
    console.log('requesting devices...');
    return getDevices();
}

export function receiveDevices(devices)
{
    return {
        type: ReducerTypes.RECEIVE_DEVICES,
        payload: devices
    }
}

function getDevices()
{
    
    console.log('getting devices');
    axios.get('http://localhost:8080/device')
    // .then((res)=>res.json())
    // .then((res)=>console.log(res))
    // .then(receiveDevices(res));

    .then((response)=>{
        console.log(response.data); // ex.: { user: 'Your User'}
        console.log(response.status); // ex.: 200
      });
    ////TODO: handle err.

}