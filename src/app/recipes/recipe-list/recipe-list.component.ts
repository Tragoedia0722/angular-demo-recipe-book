import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("test", "this is a test!", "1.jpg"),
    new Recipe("test", "this is a test!", "1.jpg")
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
