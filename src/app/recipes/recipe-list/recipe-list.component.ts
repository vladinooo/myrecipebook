import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("A Test Recipe", "Test description", "http://i.dailymail.co.uk/i/pix/2016/07/25/18/3695AB9400000578-3707201-Importantly_the_damage_sperm_by_fatty_food_is_not_necessarily_pe-a-9_1469468033481.jpg")
  ];

  constructor() { }

  ngOnInit() {
  }

}
