import {Component, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgClass, NgForOf, NgIf, NgStyle, NgSwitch, NgSwitchCase} from '@angular/common';

@Component({
  selector: 'app-bindings-directives',
  imports: [
    FormsModule,
    NgClass,
    NgStyle,
    NgIf,
    NgForOf,
    NgSwitch,
    NgSwitchCase
  ],
  templateUrl: './bindings-directives.html',
  styleUrl: './bindings-directives.css',
})
export class BindingsDirectives {

  title = "Adatkötés és Direktívák";
  userInput: string = '';
  isVisible: boolean = true;
  items = ['Alma', 'Banán', 'Cseresznye'];
  selectedFruit: string = 'Alma';
  isHighlighted = false;
  fontSize: number = 16;

  szoveg = signal('teszt');

  toggleHighlight(){
    this.isHighlighted = !this.isHighlighted;
  }

}
