import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Subject } from 'rxjs';

@Injectable()
export class AuthService {
    public status: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
   // public username: BehaviorSubject<string> = new BehaviorSubject<string>('');
   private dataStringSource = new Subject<string>();

   // Observable string stream
   dataString$ = this.dataStringSource.asObservable();

    display(value: boolean) {
        this.status.next(value);
    }

    getUsername(value: string) {
        this.dataStringSource.next(value);
    }
}
