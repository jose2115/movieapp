import { Component, Input, OnInit } from '@angular/core';
import { Film } from 'src/app/core/interfaces/film.interfaces';

@Component({
  selector: 'app-card-films',
  templateUrl: './card-films.component.html',
  styleUrls: ['./card-films.component.css']
})
export class CardFilmsComponent implements OnInit {

  @Input()item!: Film;

  constructor() { }

  ngOnInit() {
  }

}
