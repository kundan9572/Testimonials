import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  constructor() {}

  title: string = '';
  image: string = '../../assets/icon.png';
  description: string = '';

  ngOnInit(): void {}
}
