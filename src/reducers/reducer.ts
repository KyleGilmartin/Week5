import { Action } from '@ngrx/store'
import { Tutorial } from './../models/model'
import * as TutorialActions from './../actions/actions'

// Section 1
const initialState: Tutorial = {
    name: 'Initial Tutorial',
    url: 'http://google.com'
}

// Section 2
export function reducer(state: Tutorial[] = [initialState], action: TutorialActions.Actions) {

    // Section 3
    switch(action.type) {
        case TutorialActions.ADD_TUTORIAL:
            return [...state, action.payload];
         // Add this case:
     case TutorialActions.REMOVE_TUTORIAL:
const index = action.payload;
return [...state.slice(0, index), ...state.slice(index + 1)];
        default:
            return state;
    }
}

