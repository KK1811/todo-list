import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public FirebaseAuth:AngularFireAuth,public router:Router, private db:AngularFirestore) { }

  userDetails=null

  logIn(email,password){
    this.FirebaseAuth.auth.signInWithEmailAndPassword(email,password).then(data=>{
      this.userDetails=data
      console.log(this.userDetails)
      this.router.navigateByUrl('/home')
    }).catch(err=>{
      console.log(err)
    })
   }
}
