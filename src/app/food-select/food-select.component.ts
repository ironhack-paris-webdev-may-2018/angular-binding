import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'food-truc',
  templateUrl: './food-select.component.html',
  styleUrls: ['./food-select.component.css']
})
export class FoodSelectComponent implements OnInit {
  mySelection: string;
  foodResponse: string;

  constructor() { }

  ngOnInit() {
  }

  updateFeedback() {
    if (this.mySelection === "pizza") {
      this.foodResponse = "Great choice. 🍕";
    }
    else if (this.mySelection === "eggplant") {
      this.foodResponse = "You sicked me. 🍆";
    }
    else if (!this.mySelection) {
      this.foodResponse = "";
    }
    else {
      this.foodResponse = "That's an okay selection, I guess... 🤨";
    }
  }
}
