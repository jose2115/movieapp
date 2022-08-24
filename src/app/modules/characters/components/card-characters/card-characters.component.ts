import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/core/interfaces/film.interfaces';

@Component({
  selector: 'app-card-characters',
  templateUrl: './card-characters.component.html',
  styleUrls: ['./card-characters.component.css']
})
export class CardCharactersComponent implements OnInit {

  @Input()item!: Character;

  constructor() { }

  ngOnInit() {
  }

}
