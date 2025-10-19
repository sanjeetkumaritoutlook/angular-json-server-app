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

   // For inline editing
  editingId: number | null = null;
  editBuffer: { id?: number; name?: string; role?: string } = {};

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

  deleteEmployee(id: number) {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.api.deleteEmployee(id).subscribe(() => this.loadEmployees());
    }
  }

   // Begin editing: populate buffer
  editEmployee(emp: any) {
    this.editingId = emp.id;
    // shallow copy so changes are buffered until Save
    this.editBuffer = { id: emp.id, name: emp.name, role: emp.role };
  }

  // Cancel edit
  cancelEdit() {
    this.editingId = null;
    this.editBuffer = {};
  }

  // Save changes
  saveEdit() {
    if (!this.editingId) return;

    const id = this.editingId;
    const payload = {
      name: (this.editBuffer.name || '').trim(),
      role: (this.editBuffer.role || '').trim()
    };

    // optional validation
    if (!payload.name || !payload.role) {
      alert('Name and Role cannot be empty.');
      return;
    }

    this.api.updateEmployee(id, payload).subscribe(() => {
      this.editingId = null;
      this.editBuffer = {};
      this.loadEmployees();
    });
  }
}
