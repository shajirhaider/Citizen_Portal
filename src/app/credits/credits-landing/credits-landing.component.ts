import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../src/app/services/http.service';
import { UrlService } from '../../../../src/app/services/url.service';
import { LoaderService } from '../../../../src/app/services/loader.service';
import { LocalStorageService } from '../../../../src/app/services/local-storage.service'
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

export interface StreetName {
  propDesc: string;
}

@Component({
  selector: 'app-credits-landing',
  templateUrl: './credits-landing.component.html',
  styleUrls: ['./credits-landing.component.css']
})
export class CreditsLandingComponent implements OnInit {
  searchProperties = new FormGroup({
    fullAddress: new FormControl(''),
  });
  streetNames: StreetName[];
  filteredStreetNames: Observable<StreetName[]>;
  complaintFormShow = false;
  fileList = [];
  constructor(private httpService: HttpService,
      private url: UrlService,
      private loaderService: LoaderService,
      private storage: LocalStorageService) { }

  ngOnInit() {
  }
  getValidStreet() {
      var requestdata_test = {
          token: 'amandaportal',
          lid: '',
          rsn: 0,
          loginName: 'Hanif',
          url: 'http://demo.randomaccess.ca/amanda/api_fw/Services/ServiceMain.svc/json/'
      };

      // let requestdata: any = window["requestdata"];
      let requestdata: any = requestdata_test;
      this.httpService.getBaseUrl(requestdata.url);

      let body = {
          "token": requestdata.token,
          "lid": requestdata.lid,
          "fullAddress": this.searchProperties.value.fullAddress
      }
      console.log("address", body)
      this.httpService.post('searchPropertyAjax', body)
          .subscribe(
              (response) => {
                  this.streetNames = response["body"]
                  this.filteredStreetNames = this.searchProperties.get('fullAddress').valueChanges
                      .pipe(
                          startWith<string | StreetName>(''),
                          map(value => typeof value === 'string' ? value : value.propDesc),
                          map(name => name ? this._filterStreetName(name) : this.streetNames.slice())
                      );
                  console.log(this.streetNames)
                  this.loaderService.display(false);
              },
              (error) => console.log(error)
          );
  }

  fileUpload(event) {
      let fileList: FileList = event.target.files;
      if (fileList.length > 0) {
          let file: File = fileList[0];
          this.fileList.push(file.name)
          let formData: FormData = new FormData();
          formData.append('uploadFile', file, file.name);
      }

  }
  removeFile(index) {
      this.fileList.splice(index, 1)
  }
  displayfilterStreetName(name?: StreetName): string | undefined {
      return name ? name.propDesc : undefined;
  }
  private _filterStreetName(name: string): StreetName[] {
      const filterValue = name.toLowerCase();
      return this.streetNames.filter(option => option.propDesc.toLowerCase().indexOf(filterValue) === 0);
  }

}
