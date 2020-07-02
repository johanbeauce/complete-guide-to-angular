import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  @ViewChild('inputName', {static: true}) inputName: ElementRef;
  @ViewChild('inputNumber', {static: true}) inputNumber: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAdd() {
    const name = this.inputName.nativeElement.value;
    const amount = this.inputNumber.nativeElement.value;
    this.ingredientAdded.emit(new Ingredient(name, amount));
  }
}
