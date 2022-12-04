import { Component } from '@angular/core';

@Component({
  selector: 'app-trade-form-main-docs',
  templateUrl: './trade-form-main-docs.component.html',
  styleUrls: ['./trade-form-main-docs.component.scss']
})
export class TradeFormMainDocsComponent {
  files: File[] = [];

  uploadhandler({ files }: { files: File[] }) {
    console.log(files);
    this.files = files;
  }

  removeAt(index: number) {
    this.files = [...this.files.slice(0, index), ...this.files.slice(index + 1)];
  }
}
