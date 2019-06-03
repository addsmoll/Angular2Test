import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs/Subject';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import {AngularFirestore,fromDocRef} from 'angularfire2/firestore';
import {Injectable} from '@angular/core';
import {CountComponent} from "../ui/count/count.component";
import {AuthService} from "./auth.service";
@Injectable()
export class MainService {

  openingModal: Subject<any> = new Subject();
  modalOpened:boolean;
  modalRef;
  uid;
  userLocal;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthService,
    private afs: AngularFirestore,
    private modalService: NgbModal,
  ){
      let user = JSON.parse(localStorage.getItem('user'));
      if (user) {
          this.uid = user.uid;
      }
      auth.authenticated$.subscribe((authenticated:any)=>{
          if (authenticated){
              this.getUserInfo(authenticated.uid);
          } else {
              this.userLocal = null;
          }
      });

    this.openingModal.subscribe(id=>{

      if (this.modalOpened) {
        this.modalRef.componentInstance.count = id;
      } else {
        this.modalRef = this.modalService.open(CountComponent);

        this.modalRef.result.then((result) => {
          console.log('result', result);
          this.setCount(result);

          this.modalOpened = false;
        }, (reason) => {
            console.log('reason', reason);
            this.setCount(reason);
          this.modalOpened = false;
        });
        this.modalRef.componentInstance.count = id;
        this.modalOpened = true;
      }  
    });
    
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
    getUserInfo(uid){
        this.auth.getUserInfo(uid).subscribe(res=>this.userLocal = res);

    }

  setCount(count: number){
      this.auth.updateUserInfo(this.uid, {count: count});

  }

    countMaster(isRefresh: boolean) {
    if (isRefresh){
        this.setCount(0);
    } else{
        let count = this.userLocal.count ? this.userLocal.count : 1;
        this.openingModal.next(count);
    }
  }

}

