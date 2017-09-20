import * as actions from '../actions/types';

export default function(state=[], action){
    switch(action.type)
    {        
        case actions.REQUEST_DEVICES:
            //Object.assign({}, ...state, action.payload)            
            console.log(action.payload);
            return [...state, ...action.payload];            
    }

    return state;
}