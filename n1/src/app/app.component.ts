import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  counter=0;
  updatedAt?:number;

  get onDisabled():boolean{
    return !this.counter
  }

  increase(){
    this.counter++;
    this.updatedAt=Date.now();
  }

  decrease(){
    this.counter--;
    this.updatedAt=Date.now();
  }

  clear(){
    this.counter=0;
    this.updatedAt=Date.now();
  }
}
