import { Injectable, OnInit } from '@angular/core';
interface storage {
  firstName: string;
  lastName: string;
  address: address;
}
interface address {
  city: string;
  street: string;
}
@Injectable({
  providedIn: 'root'
})
export class FormValueStorageService implements OnInit{
formValue?: storage;
  constructor() {
  } 
  ngOnInit(): void {
  }
}
