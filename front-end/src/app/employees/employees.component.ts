import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent implements OnInit {
  employees: any[] = [];
  newEmployee = { name: '', role: '' };

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees() {
    this.api.getEmployees().subscribe(data => (this.employees = data));
  }

  addEmployee() {
    this.api.addEmployee(this.newEmployee).subscribe(() => {
      this.newEmployee = { name: '', role: '' };
      this.loadEmployees();
    });
  }
}
