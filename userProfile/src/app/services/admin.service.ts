import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { adminModel } from '../models/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
  baseurl: string = "http://localhost:5000/";

  getAllUsers(){
    return this.http.get<adminModel[]>(this.baseurl + 'admin');
  }
  getUserById(id: string){
    return this.http.get<adminModel>(this.baseurl + 'admin' + '/' + id);
  }
  addUser(admin: adminModel){
    return this.http.post(this.baseurl + 'admin', admin);
  }

  deleteUser(id: string){
    return this.http.delete(this.baseurl + 'admin' + '/' + id);
  }

  updateUser(admin: adminModel){
    return this.http.put(this.baseurl + 'admin' + '/' + admin._id, admin);
  }

}




