import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Employee } from 'src/app/model/employee';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.css']
})
export class ShowAllComponent implements OnInit {

  constructor(private httpService:HttpService ,private fb:FormBuilder) { }
  listOfEmployees!: Employee[];
  employeeForm !: FormGroup;
  show = false;

  ngOnInit(): void {
this.httpService.fetchAll().subscribe((employee) => this.listOfEmployees=employee)
this.employeeForm = this.fb.group(
  {
    id : [''],
    firstName: [''],
    lastName:[''],
    emailId: ['']
})
  }
handleSubmit(){
  this.httpService.addEmployee(this.employeeForm.value).subscribe();
  this.ngOnInit();
}
showForm(){
  this.show = !this.show;
}
 

}
 


0

