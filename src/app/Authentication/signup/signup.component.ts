import { Component, OnInit } from '@angular/core';
import { Web3Service } from 'src/app/web3.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { MatOptionSelectionChange } from '@angular/material';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  modalReference: NgbModalRef;
  data: Array<any> = [];
  complete: Array<any> = [];
  myService: any;
  sub: any;
  constructor(private web3: Web3Service, private modalService: NgbModal, private router: Router, private SpinnerService: NgxSpinnerService) { }

  ngOnInit() {



  }
  public async selectedw(event: MatOptionSelectionChange, id: string): Promise<void> {
    this.myService.onCustomerSelect.next(id);
    console.log(this.myService);

  }


  selected(event) {
    console.log("data is", event.target.value);
    if (event.target.value == 1) {
      this.data.push("admin")
      console.log("wefdEVDsxZ", this.data);

    }
    if (event.target.value == 2) {
      this.web3._contract.getPastEvents('Supplier', { fromBlock: 0, toBlock: 'latest' }, (error, event) => { console.log(event); })
        .then((event) => {
          for (var i = 0; i < event.length; i++) {
            this.data.push(event[i].returnValues.id);
          }
          console.log(this.data);
          this.complete = this.data;
        })
      return this.data = []
    }
    if (event.target.value == 3) {
      this.web3._contract.getPastEvents('Manufacture', { fromBlock: 0, toBlock: 'latest' }, (error, event) => { console.log(event); })
        .then((event) => {
          for (var i = 0; i < event.length; i++) {
            this.data.push(event[i].returnValues.id);
          }
          console.log(this.data);
          this.complete = this.data;
        })
      return this.data = []

    }

    if (event.target.value == 4) {
      this.web3._contract.getPastEvents('Distributer', { fromBlock: 0, toBlock: 'latest' }, (error, event) => { console.log(event); })
        .then((event) => {
          for (var i = 0; i < event.length; i++) {
            this.data.push(event[i].returnValues.id);
          }
          console.log(this.data);
          this.complete = this.data;
        })
      return this.data = []
    }
  }
  ServiceData = {
    compeny_name: "",
    id: "",
    mail: "",
    mobile_number: "",
    homeaddress: "",
    city: "",
    username: ""
  }


  clear(ServiceData) {
    ServiceData.compeny_name = "",
      ServiceData.id = "",
      ServiceData.mail = "",
      ServiceData.mobile_number = "",
      ServiceData.homeaddress = "",
      ServiceData.city = "",
      ServiceData.username = ""
  }
  get(event) {
    console.log(event.target.value)
    this.sub = event.target.value
  }
  request(ServiceData) {
    console.log(this.sub);

    this.web3.requestform(ServiceData.compeny_name, this.sub, ServiceData.mail, ServiceData.mobile_number, ServiceData.homeaddress, ServiceData.city, ServiceData.username).then(receipt => {
      console.log("addded supplier ", receipt);

    })
    Swal.fire({
      text: 'Successfully Submitted',
      icon: 'success',
      confirmButtonText: 'OK',
    });
  }

  goback() {
    {
      this.router.navigate(['login'], { replaceUrl: true });
    }
  }

}
