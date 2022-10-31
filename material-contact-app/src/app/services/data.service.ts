import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Contact from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  addContact(formdata: Contact) {
    return this.http.post('http://localhost:3000/contacts', formdata)
  }

  getContacts(): Observable<Array<Contact>> {
    return this.http.get<Array<Contact>>('http://localhost:3000/contacts')
  }

  getContact(id: any): Observable<Contact> {
    return this.http.get<Contact>(`http://localhost:3000/contacts/${id}`)
  }

  updateContact(contact: any, id: any) {
    return this.http.put(`http://localhost:3000/contacts/${id}`, contact)
  }

  deleteContact(id: any){
    return this.http.delete(`http://localhost:3000/contacts/${id}`)
  }

  registerUser(user: any){
    return this.http.post('http://localhost:9000/auth/register', user)
  }

  loginUser(cred: any){
    return this.http.post('http://localhost:9000/auth/login', cred)
  }

}
