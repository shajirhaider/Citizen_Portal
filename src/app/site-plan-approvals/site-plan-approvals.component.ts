import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpService} from '../services/http.service'
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-site-plan-approvals',
  templateUrl: './site-plan-approvals.component.html',
  styleUrls: ['./site-plan-approvals.component.css']
})
export class SitePlanApprovalsComponent implements OnInit {

  address: String = "700 Hespeler Rd N3H 5L8";
  headers: Object= [
    {text:"RSN"  },
    {text:"Folder#"  },
    {text:"Type/Sub/Work"},
    {text:"Status"},
    {text:"Date Application Received"},
    {text:"Date Application Issued/Approved"},
    {text:"Date File Closed"}
  ];
  datas: Object = []
  constructor(private httpService: HttpService, private loaderService: LoaderService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.searchFolderByProperty()
  }

  searchFolderByProperty(){
    this.loaderService.display(true);
    let url = 'searchFolderByProperty'
    let body = {
      "token":"amandaportal", 
      "lid":"",
      "propertyRSN": +this.route.snapshot.params["id"]
    }
    this.httpService.post(url,body)
      .subscribe(
        (response) =>{
          this.datas = response["body"]
          console.log(this.datas)

          this.loaderService.display(false);
        },
        (error) => console.log(error)
      );
  } 

}
