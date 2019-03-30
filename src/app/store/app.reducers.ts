import { ActionReducerMap } from '@ngrx/store';
import * as fromSearchProperties from '../search-properties/store/search-properties.reducers'


export const reducers = {
  searchProperties : fromSearchProperties.SearchPropertiesReducer,
//  searchResults : fromSearchProperties.SearchResultsReducer,
//  searchResultShow : fromSearchProperties.SearchResultShowReducer
};
