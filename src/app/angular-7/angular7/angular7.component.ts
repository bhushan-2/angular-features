import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-angular7',
  templateUrl: './angular7.component.html',
  styleUrls: ['./angular7.component.css']
})
export class Angular7Component {

  budget = `"budget": [{
    "type":"initial",
    "maximumWarning":"2mb",
    "maximumError":"5mb"
  }]`;

  items = Array.from({ length: 1000 }).map((_, i) => `Item ${i}`);

  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi',
    'Episode IX – The Rise of Skywalker',
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }
}
