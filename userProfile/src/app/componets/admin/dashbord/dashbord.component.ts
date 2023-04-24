// import { Component, OnInit, } from '@angular/core';

// @Component({
//   selector: 'app-dashbord',
//   templateUrl: './dashbord.component.html',
//   styleUrls: ['./dashbord.component.css']
// })
// export class DashbordComponent implements OnInit{
//     customers!: any[];

//     selectedCustomers!: any[];

//     representatives!: any[];

//     statuses!: any[];

//     loading: boolean = false;

//     activityValues: number[] = [0, 100];

//     constructor() {}

//     ngOnInit() {
    
//       this.customers = [
//         { name: 'Amy Elsner', image: 'amyelsner.png' },
//         { name: 'Anna Fali', image: 'annafali.png' },
//         { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
//         { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
//         { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
//         { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
//         { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
//         { name: 'Onyama Limba', image: 'onyamalimba.png' },
//         { name: 'Stephen Shaw', image: 'stephenshaw.png' },
//         { name: 'Xuxue Feng', image: 'xuxuefeng.png' }
//     ];

//         this.representatives = [
//             { name: 'Amy Elsner', image: 'amyelsner.png' },
//             { name: 'Anna Fali', image: 'annafali.png' },
//             { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
//             { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
//             { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
//             { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
//             { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
//             { name: 'Onyama Limba', image: 'onyamalimba.png' },
//             { name: 'Stephen Shaw', image: 'stephenshaw.png' },
//             { name: 'Xuxue Feng', image: 'xuxuefeng.png' }
//         ];

//         this.statuses = [
//             { label: 'Unqualified', value: 'unqualified' },
//             { label: 'Qualified', value: 'qualified' },
//             { label: 'New', value: 'new' },
//             { label: 'Negotiation', value: 'negotiation' },
//             { label: 'Renewal', value: 'renewal' },
//             { label: 'Proposal', value: 'proposal' }
//         ];
//     }

   
    
// }







import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {adminModel } from '../../../models/admin';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class dashboardComponent implements OnInit {

  users!: adminModel[];

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.adminService.getAllUsers().subscribe(data=>{
      this.users = data;
    });
  };
  addUser(): void {
    this.router.navigate(['add-user']);
  }

  deleteUser(user: adminModel){
    
    this.adminService.deleteUser(user._id).subscribe(data=>{
      console.log(data);
      this.getAllUsers();
    });
  }

  updateUser(user: adminModel){
    localStorage.removeItem("productId");
    localStorage.setItem("productId", user._id);
    this.router.navigate(['edit-product']);
  }

}
