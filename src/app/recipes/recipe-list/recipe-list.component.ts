import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Fondant chocolat', 'Le fondant au chocolat avec sa glace et crème chantilly',
      'https://cdn.pixabay.com/photo/2019/03/01/07/12/fondant-4027431_960_720.jpg'),
    new Recipe('Baba au rhum', 'Voici la recette facile du baba au rhum, le dessert préféré de ma maman ' +
      'préparé avec amour récemment pour son anniversaire.',
      'https://upload.wikimedia.org/wikipedia/commons/d/df/Le_Cercle_R%C3%A9publicain_Jonqui%C3%A8res_Baba_au_rhum_chantilly.JPG')
  ];
  @Output() itemSelectFired = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onItemSelect(recipe: Recipe) {
    this.itemSelectFired.emit(recipe);
  }
}
