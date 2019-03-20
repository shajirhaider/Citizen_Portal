import { Component, OnInit, ChangeDetectorRef, DoCheck } from '@angular/core';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Citizen Portal';

  showLoader: boolean;
  constructor(private loaderService: LoaderService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.loaderService.status.subscribe((val: boolean) => {
        this.showLoader = val;
    });
  }

  public ngDoCheck(): void {
      this.cdr.detectChanges();
  }
}
