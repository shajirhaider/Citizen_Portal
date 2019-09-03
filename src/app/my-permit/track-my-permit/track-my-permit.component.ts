import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from '../../services/http.service'
import { LoaderService } from '../../services/loader.service';
import { UrlService } from '../../services/url.service';
import { DateUtilService } from '../../services/date.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-track-my-permit',
  templateUrl: './track-my-permit.component.html',
  styleUrls: ['./track-my-permit.component.css']
})
export class TrackMyPermitComponent implements OnInit {
  detailsShow= false;
  datas: any [] =[
    { 'LicenseNo':"19 000047 000 00 BT",'owner':"Hanif Mohammad Region of Waterloo", 'subject':"Backflow Device Tester", 'expiryDate':"",'status':"New" },
    { 'LicenseNo':"19 000047 000 00 yT",'owner':"Hanif Mohammad Region of Waterloo", 'subject':"Backflow Device Tester", 'expiryDate':"",'status':"New" },
    { 'LicenseNo':"19 000047 000 00 BT",'owner':"Hanif Mohammad Region of Waterloo", 'subject':"Backflow Device Tester", 'expiryDate':"",'status':"New" }
  ];
  displayedColumns: string[] = ['LicenseNo','owner', 'subject', 'expiryDate','status','details'];
  dataSource: MatTableDataSource<any[]>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(private httpService: HttpService, 
              private loaderService: LoaderService, 
              private url: UrlService, 
              private dateUtilService: DateUtilService) { }

  ngOnInit() {
    this.getLicenseList()

  }

  getLicenseList(){
    let body = {
      "token":"amandaportal", 
      "lid":"lid",
    }
    // this.httpService.post(this.url.Search_Folder_By_Property,body)
    //   .subscribe(
    //     (response) =>{
    //       this.datas = response["body"] 
    //       for(let i = response["body"].length-1; i >=0; i --){
    //         if(this.datas[i].indate){
    //           this.datas[i].indate = this.dateUtilService.approvalDate(this.datas[i].indate)
    //         }  
    //         if(this.datas[i].issueDate){
    //           this.datas[i].issueDate = this.dateUtilService.approvalDate(this.datas[i].issueDate)
    //         }
    //         if(this.datas[i].finalDate){
    //           this.datas[i].finalDate = this.dateUtilService.approvalDate(this.datas[i].finalDate)
    //         }
    //       }    
          this.dataSource = new MatTableDataSource(this.datas)       
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
      //   },
      //   (error) => console.log(error)
      // );
  } 
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  gotoDetails(){
    this.detailsShow = true
  }
}
