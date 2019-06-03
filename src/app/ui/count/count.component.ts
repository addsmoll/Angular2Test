import {Component, Input, OnInit} from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-count',
    templateUrl: './count.component.html',
    styleUrls: ['./count.component.scss']
})
export class CountComponent implements OnInit{
    @Input() count: number = 0;
    increment: number;

    constructor(public activeModal: NgbActiveModal) {  }


    ngOnInit() {
        this.count !== null ? 0 : this.count;
        this.increment = this.count*2;
    }





}