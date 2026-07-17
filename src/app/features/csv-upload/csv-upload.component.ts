import { Component } from '@angular/core';

@Component({
  selector: 'app-csv-upload',
  templateUrl: './csv-upload.component.html',
  styleUrls: ['./csv-upload.component.css']
})
export class CsvUploadComponent {

  bankFile: File | null = null;

  onBankFileSelected(event: Event): void {

    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {

      this.bankFile = input.files[0];

      console.log('Selected Bank File:', this.bankFile);

    }

  }

}