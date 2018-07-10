import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'slideshow-tag',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
  images: Array<string> = [
    "https://media.giphy.com/media/wrRTxLxuIDYPK/giphy.gif",
    "https://media.giphy.com/media/gfWYBaONMMHqE/giphy.gif",
    "https://media.giphy.com/media/3oz8xyqQtObiZ46RYQ/giphy.gif",
    "https://media.giphy.com/media/8Jblg5xl5yPwk/giphy.gif"
  ];

  currentImage: string = "https://media.giphy.com/media/wrRTxLxuIDYPK/giphy.gif";
  index: number;

  constructor() { }

  ngOnInit() {
    this.index = Math.floor(Math.random() * this.images.length);
    this.currentImage = this.images[this.index];
  }

  changeTheImage() {
    this.index += 1;
    if (this.index === this.images.length) {
      this.index = 0;
    }

    this.currentImage = this.images[this.index];
  }

}
