import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs'




@Injectable({
  providedIn: 'root'
})
  
export class OrderService {
   
   constructor(private firestore: Firestore) { }
  addOrder(order: any) {
    const orderRef = collection(this.firestore, "orders") 
    return addDoc(orderRef, order)
  }

 getOrder(): Observable<any>{
    const orderRef = collection(this.firestore, "orders")
    return collectionData(orderRef,{idField:'id'}) as Observable<any>;
  }
}
