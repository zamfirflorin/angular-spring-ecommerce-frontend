import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/common/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {


  employees: Employee[];
  message: string;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.listEmployees();
  }

  listEmployees() {
    this.employeeService.getEmployeeList().subscribe(
      data =>{
        this.employees = data;
      }
    )
  }

  deleteEmployee(id) {
    console.log(`delete todo ${id}` )
    this.employeeService.deleteEmployee(id).subscribe (
      response => {
        console.log(response);
        this.message = `Delete of Employee ${id} Successful!`;
        this.listEmployees();
      }
    )
  }


}
