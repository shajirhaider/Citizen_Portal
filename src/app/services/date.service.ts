
import { Injectable } from '@angular/core';
import * as moment from 'moment'

@Injectable()
export class DateUtilService {
    approvalDate(date){
        let indate = date.match(/\d+/g).map(Number)   
        return moment.unix(indate/1000).format("YYYY-MM-DD");
    }
}


