import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../services/http.service'
import { LoaderService } from '../services/loader.service';
import { UrlService } from '../services/url.service';
import { LocalStorageService } from '../services/local-storage.service'
import { DateUtilService } from '../services/date.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';


@Component({
  selector: 'app-site-plan-approvals',
  templateUrl: './site-plan-approvals.component.html',
  styleUrls: ['./site-plan-approvals.component.css']
})
export class SitePlanApprovalsComponent implements OnInit{

  address: string;
  datas: any [] =[];
  displayedColumns: string[] = ['folderRSN', 'folderNumber', 'folderTypeDesc', 'statusDesc', 'indate', 'issueDate', 'finalDate'];
  dataSource: MatTableDataSource<any[]>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(private httpService: HttpService, 
              private loaderService: LoaderService, 
              private route: ActivatedRoute,
              private router: Router,
              private url: UrlService, 
              private storage : LocalStorageService,
              private dateUtilService: DateUtilService) { }

  ngOnInit() {
   this.searchFolderByProperty()
  }

  searchFolderByProperty(){
    this.loaderService.display(true);
    let lid = "";
    if(this.storage.getItem("lid")){
      lid = this.storage.getItem("lid")
    }
    else{
      lid = ""
    }
    let body = {
      "token":"amandaportal", 
      "lid":lid,
      "propertyRSN": +this.route.snapshot.params["rsn"]
    }
    this.httpService.post(this.url.Search_Folder_By_Property,body)
      .subscribe(
        (response) =>{
          this.datas = response["body"] 
          for(let i = response["body"].length-1; i >=0; i --){
            if(this.datas[i].indate){
              this.datas[i].indate = this.dateUtilService.approvalDate(this.datas[i].indate)
            }  
            if(this.datas[i].issueDate){
              this.datas[i].issueDate = this.dateUtilService.approvalDate(this.datas[i].issueDate)
            }
            if(this.datas[i].finalDate){
              this.datas[i].finalDate = this.dateUtilService.approvalDate(this.datas[i].finalDate)
            }
          }    
          this.address = this.route.snapshot.params["house"]+" "+this.route.snapshot.params["street"]+" "+this.route.snapshot.params["city"]
          this.loaderService.display(false);
          console.log(this.datas)
          this.dataSource = new MatTableDataSource(this.datas)       
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        (error) => console.log(error)
      );
  } 
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  localStorageDataChange(){
    this.storage.removeItem("citizen_searchRslt")
    this.storage.removeItem("citizen_searchProp")
    this.storage.removeItem("citizen_search_rslt_msg")
    this.storage.setItem('agree-content',"false")
    this.router.navigate(['/search-properties']);

  }


}
