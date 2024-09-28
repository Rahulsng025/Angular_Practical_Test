import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  salesData = [
    { date: '01 Jan 2024', invoice: 'INV001', customer: 'John Doe', amount: '$123', status: 'Paid' },
    { date: '02 Jan 2024', invoice: 'INV002', customer: 'Jane Doe', amount: '$456', status: 'Unpaid' },
    { date: '03 Jan 2024', invoice: 'INV003', customer: 'John Doe', amount: '$789', status: 'Paid' },
    { date: '04 Jan 2024', invoice: 'INV004', customer: 'John Smith', amount: '$101', status: 'Unpaid' }
  ]
}
