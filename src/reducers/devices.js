import * as actions from '../actions/types';

export default function(state={devices: []}, action){
    
    switch(action.type)
    {        
        case actions.REQUEST_DEVICES:
        
            
            console.log(action.payload);
            //return [...state, ...action.payload];            
            //Object.assign({},  {devices: action.payload});
            return {devices: [...action.payload]};
            
            //s = Object.assign({}, state, {devices: state.devices.concat(action.payload)});
            //return s;
    }

    return state;
}