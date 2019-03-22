import * as SearchPropertiesActions from './search-properties.actions'
import { FormGroup, FormControl } from '@angular/forms';

export const Search_Properties = 'Search_Properties'
export const Search_Results = 'Search_Results'
export const Search_Results_Show = 'Search_Results_Show'

export interface SearchPropertiesI {
    streetNumber: string,
    streetName: string ,
    streetType: string ,
    streetDirection:string ,
    unitNumber:string ,
    rollNumber:string ,
    token:string , 
    lid:string, 
    count:number
}

const initialState = {
    searchProperties :new FormGroup({
        streetNumber: new FormControl(''),
        streetName: new FormControl(''),
        streetType: new FormControl(''),
        streetDirection: new FormControl(''),
        unitNumber: new FormControl(''),
        rollNumber: new FormControl(''),
        token: new FormControl('amandaportal'), 
        lid:new FormControl(''), 
        count:new FormControl('0')
      }),

      searchResults: [],
      searchResultShow: false
};

export function SearchPropertiesReducer (state= initialState, action: SearchPropertiesActions.SearchPropertiesActions){
    switch (action.type){
        case SearchPropertiesActions.Search_Properties:
            return{
                ...state,
                searchProperties: action.payload
            }
        case SearchPropertiesActions.Search_Results:
            return{
                ...state,
                searchResults: [action.payload]
            }   
        case SearchPropertiesActions.Search_Results_Show:
            return{
                searchResultShow: action.payload
            }     
        
        default :
            return state
    }
}  

// export function SearchResultsReducer (state = initialState.searchResults, action: SearchPropertiesActions.SearchPropertiesActions){
//     switch (action.type){
//         case SearchPropertiesActions.Search_Results:
//             return{
//                 ...state,
//                 searchResults: [...state, action.payload]
//             }
        
//         default :
//             return state;  
//     }
// }

// export function SearchResultShowReducer (state = initialState.searchResultShow, action: SearchPropertiesActions.SearchPropertiesActions){
//     switch (action.type){
//         case SearchPropertiesActions.Search_Results_Show:
//             return{
//                 searchResultShow: action.payload
//             }
//         default :
//             return {
//                 state
//         }
//     }
// }