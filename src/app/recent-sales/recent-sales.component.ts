import { Component } from '@angular/core';

@Component({
  selector: 'app-recent-sales',
  templateUrl: './recent-sales.component.html',
  styleUrl: './recent-sales.component.scss'
})
export class RecentSalesComponent {
  salesData = [
    { date: '01 Jan 2024', invoice: 'INV001', customer: 'John Doe', amount: '$123', status: 'Paid' },
    { date: '02 Jan 2024', invoice: 'INV002', customer: 'Jane Doe', amount: '$456', status: 'Paid' },
    { date: '03 Jan 2024', invoice: 'INV003', customer: 'Mark Smith', amount: '$789', status: 'Unpaid' },
    { date: '04 Jan 2024', invoice: 'INV004', customer: 'Lisa Wong', amount: '$101', status: 'Paid' },
  ];
}
