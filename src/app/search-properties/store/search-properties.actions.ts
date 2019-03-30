import {Action} from '@ngrx/store';
import {SearchPropertiesI} from './search-properties.reducers';

export const Search_Properties = 'Search_Properties'
export const Search_Results = 'Search_Results'
export const Search_Results_Show = 'Search_Results_Show'


export class AddSearchProperties implements Action {
    readonly type = Search_Properties;
    constructor(public payload : SearchPropertiesI ) {}
}

export class SearchResult implements Action {
    readonly type = Search_Results
    constructor(public payload : Object[]) {}
}
export class SearchResultShow implements Action {
    readonly type = Search_Results_Show
    constructor(public payload : Boolean) {}
}
export type SearchPropertiesActions = AddSearchProperties | SearchResult | SearchResultShow;
