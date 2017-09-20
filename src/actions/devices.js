import * as ReducerTypes from './types';
import axios from 'axios';

export function requestDevices()
{
    console.log('requesting devices...');
    return {
        type: ReducerTypes.REQUEST_DEVICES,
        payload: getDevices()
    };
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
    return axios.get('http://localhost:8080/device')
    // .then((res)=>res.json())
    // .then((res)=>console.log(res))
    // .then(receiveDevices(res));

    // . // ex.: { user: 'Your User'}
    //     console.log(response.status); // ex.: 200
    //     receiveDevices(response.data);
    //   })
    ////TODO: handle err.

}