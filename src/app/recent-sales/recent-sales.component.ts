import { Component } from '@angular/core';

// Define the Sale interface
interface Sale {
  date: string;
  invoice: string;
  customer: string;
  amount: string;
  status: string;
  selected?: boolean; // Optional property for checkbox selection
}

@Component({
  selector: 'app-recent-sales',
  templateUrl: './recent-sales.component.html',
  styleUrl: './recent-sales.component.scss'
})
export class RecentSalesComponent {
  salesData: Sale[] = [
    { date: '01 Jan 2024', invoice: 'INV001', customer: 'John Doe', amount: '$123', status: 'Paid',  selected: false },
    { date: '02 Jan 2024', invoice: 'INV002', customer: 'Jane Doe', amount: '$456', status: 'Paid', selected: false },
    { date: '03 Jan 2024', invoice: 'INV003', customer: 'Mark Smith', amount: '$789', status: 'Unpaid', selected: false },
    { date: '04 Jan 2024', invoice: 'INV004', customer: 'Lisa Wong', amount: '$101', status: 'Paid', selected: false },
    { date: '05 Jan 2024', invoice: 'INV005', customer: 'Sam Briden', amount: '$451', status: 'Unpaid', selected: false },
    
    { date: '06 Jan 2024', invoice: 'INV006', customer: 'Crish Young', amount: '$345', status: 'Paid', selected: false },
    { date: '07 Jan 2024', invoice: 'INV007', customer: 'Marcus Sam', amount: '$234', status: 'Paid', selected: false },
  ];

  newSale = { date: '', invoice: '', customer: '', amount: '', status: 'Pending' }
  isModalOpen = false;

    // Method to open the modal
    openModal() {
      this.isModalOpen = true;
    }

    // Method to close the modal
  closeModal() {
    this.isModalOpen = false;
  }

   // Method to add a new sale
   addSale() {
    if (this.newSale.date && this.newSale.invoice && this.newSale.customer && this.newSale.amount) {
      this.salesData.unshift({ ...this.newSale }); // Add to the beginning of the array
      this.resetForm(); // Clear the form after adding
    } else {
      alert('Please fill in all fields');
    }
    this.closeModal();
  }

  resetForm() {
    this.newSale = {
      date: '',
      invoice: '',
      customer: '',
      amount: '',
      status: 'Pending'
    };
  }

}
