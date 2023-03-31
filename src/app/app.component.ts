import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app-angular';

  list = ["Here's Your List"];

  constructor() {}

  onAddToDo(item: string): void {
    this.list.push(item)
  }

  onDeleteItem(item: string) {
    const index = this.list.indexOf(item);
    if (index >= 0) {
      this.list.splice(index, 1);
    }
  }
}
