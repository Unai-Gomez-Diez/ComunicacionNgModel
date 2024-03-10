import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  initialData = 'Initial Data from Parent';
  modifiedDataFromChild = '';

  handleModifiedData(data: string) {
    this.modifiedDataFromChild = data;
  }
}
