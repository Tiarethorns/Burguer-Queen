import { Injectable } from '@angular/core';
import{Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from '@angular/fire/auth'
import { MatLine } from '@angular/material/core';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private auth: Auth) { }
  
  register({ email, password }: any) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

   login({ email, password }: any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

}
