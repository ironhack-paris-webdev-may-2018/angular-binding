import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'comment-ui',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  messageItem: Message = new Message();
  feedbackMessage: string;

  constructor() { }

  ngOnInit() {
  }

  showFeedback() {
    this.feedbackMessage = "Thank you for the comment! 😎";
    // reset the comment input
    this.messageItem.comment = "";
  }
}

class Message {
  user: string;
  comment: string;
}
