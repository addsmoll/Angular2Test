import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})
export class MainNavbarComponent implements OnInit {
  @Input() authenticated;
  userLocal = JSON.parse(localStorage.getItem("user"));
  authenticatedUID;
  constructor(
    private afs: AngularFirestore,
    private auth: AuthService
  ){
    this.authenticatedUID = this.userLocal?this.userLocal.uid:'';
    auth.authenticated$.subscribe((authenticated:any)=>{
      if (authenticated){
        const uid = authenticated.uid;
        this.getUserInfo(uid);

      } else {
        this.userLocal = null;
      }
      this.authenticatedUID = !!authenticated;
    });
  }

  getUserInfo(uid){
    this.auth.getUserInfo(uid).subscribe(res=>this.userLocal = res);
  }

  ngOnInit() {
  }

  signOutUser(){
    this.auth.signOutUser();
  }

}
