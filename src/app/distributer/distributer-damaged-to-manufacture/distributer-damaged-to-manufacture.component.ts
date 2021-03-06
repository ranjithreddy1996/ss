import { Component, OnInit, Inject } from '@angular/core';
import { NgbModal, NgbModalRef, NgbModalOptions, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Web3Service } from 'src/app/web3.service';
import Swal from 'sweetalert2';
import { Buffer } from 'buffer';

@Component({
  selector: 'app-distributer-damaged-to-manufacture',
  templateUrl: './distributer-damaged-to-manufacture.component.html',
  styleUrls: ['./distributer-damaged-to-manufacture.component.css']
})
export class DistributerDamagedToManufactureComponent implements OnInit {

  matidg: any;
  data: any;

  constructor( private modalService: NgbModal, private web3: Web3Service) { }
  return: Array<any> = []
  modalReference: NgbModalRef;
  closeResult: string;


  ngOnInit() {

    let getData = JSON.parse(localStorage.getItem('opendistributer'));
    console.log(getData);

    this.web3._contract3.getPastEvents('manufacture_damage', { fromBlock: 0, toBlock: 'latest' }, (error, event) => { console.log(event); })
      .then((event) => {
        for (var i = 0; i < event.length; i++) {
          if (event[i].returnValues.fromid === getData && event[i].returnValues.toid != "empty") {
            this.return.push(event[i]);
          }
        }
      });
  }
  ServiceData = {
    manufactureid: "",
    productid: "",
    damage: "",
    quantity: ""
  }

  clear(ServiceData) {
    ServiceData.manufactureid = "",
      ServiceData.productid = "",
      ServiceData.damage = "",
      ServiceData.quantity = ""

  }


  readURL(event) {
    const file = event.target.files[0];
    console.log(file);

    const reader = new FileReader();
    reader.readAsArrayBuffer(file)
    reader.onload = () => {
      this.kite = reader.result;
      // console.log(this.kite);

    }

  }
  public hash: string;
  kite: any;


  public async send_damage_to_manufacture(ServiceData) {
    console.log(ServiceData);
    let getData = JSON.parse(localStorage.getItem('opendistributer'));
    console.log(this.kite);

    console.log(this.hash);

    this.web3.manufacture_at_damage(getData, ServiceData.manufactureid, ServiceData.productid, ServiceData.damage, ServiceData.quantity, this.hash, 2).then(receipt => {
      console.log("addded ", receipt);
      this.ngOnInit();

    })
    this.modalReference.close();
    Swal.fire({
      text: 'Successfully Added',
      icon: 'success',
      confirmButtonText: 'OK',
    });
  }

  imageget(event) {
    if (event.target) {
      var tr = $(event.currentTarget).closest('tr');
      this.matidg = tr.find(".case").text();
      this.web3.manudamage(this.matidg).then(result => {
        this.data = (result[6])
      });
    }
  }



  closing() {
    this.modalReference.close();
  }

  openLargeModalPopup(content) {
    this.modalReference = this.modalService.open(content, { size: 'lg' });
    this.modalReference.result.then((result: any) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  openMediumModalPopup(content) {
    let ngbModalOptions: NgbModalOptions = {
      backdrop: 'static',
      keyboard: false,
    };
    this.modalReference = this.modalService.open(content, ngbModalOptions);
    this.modalReference.result.then((result: any) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    }
    else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
