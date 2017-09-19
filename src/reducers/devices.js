import * as actions from '../actions/types';

export default function(state, action){
    debugger;
    switch(action.type)
    {
        
        case actions.RECEIVE_DEVICES:
            return Object.assign({}, state, state.devices);

    }

    return Object.assign({}, state, null);
}