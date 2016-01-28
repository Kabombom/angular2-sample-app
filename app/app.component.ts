import {Component} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';

//O Component no template le o title e hero da class AppComponent
//O angular automaticamente tira o valor destas propriedads e muda as quando elas sao mudadas
//A classe é renderizada dentro da tag <starting-app> pelo selector que lhe faz bootstrap no boot.ts
//o * no ngFor indica que li e os seus filhos sao um master template
//o text no ngFor significa "take each hero in the heroes array, store it in the local hero variable, and make it available to the corresponding template instance”.
@Component({
    selector: 'starting-app',
    template: `
        <h1>{{title}}</h1>
        <h2>My Heroes</h2>
          <ul class="heroes">
            <li *ngFor="#hero of heroes"
              (click)="onSelect(hero)"
              [class.selected]="hero === selectedHero">
              <span class="badge">{{hero.id}}</span> {{hero.name}}
            </li>
          </ul>
          <my-hero-detail [hero]="selectedHero"></my-hero-detail>
    `,
    styles:[`
        .selected {
            background-color: #CFD8DC !important;
            color: white;
        }
        .heroes {
            margin: 0 0 2em 0;
            list-style-type: none;
            padding: 0;
            width: 10em;
        }
        .heroes li {
            cursor: pointer;
            position: relative;
            left: 0;
            background-color: #EEE;
            margin: .5em;
            padding: .3em 0em;
            height: 1.6em;
            border-radius: 4px;
        }
        .heroes li.selected:hover {
            color: white;
        }
        .heroes li:hover {
            color: #607D8B;
            background-color: #EEE;
            left: .1em;
        }
        .heroes .text {
            position: relative;
            top: -3px;
        }
        .heroes .badge {
            display: inline-block;
            font-size: small;
            color: white;
            padding: 0.8em 0.7em 0em 0.7em;
            background-color: #607D8B;
            line-height: 1em;
            position: relative;
            left: -1px;
            top: -4px;
            height: 1.8em;
            margin-right: .8em;
            border-radius: 4px 0px 0px 4px;
        }
    `],
    directives: [HeroDetailComponent]
})

export class AppComponent {
    public title = "Tour of Heroes";
    public heroes = HEROES;
    public selectedHero: Hero;

    onSelect(hero: Hero) { this.selectedHero = hero; }
}

var HEROES: Hero[] = [
    { "id": 11, "name": "Mr. Nice" },
    { "id": 12, "name": "Narco" },
    { "id": 13, "name": "Bombasto" },
    { "id": 14, "name": "Celeritas" },
    { "id": 15, "name": "Magneta" },
    { "id": 16, "name": "RubberMan" },
    { "id": 17, "name": "Dynama" },
    { "id": 18, "name": "Dr IQ" },
    { "id": 19, "name": "Magma" },
    { "id": 20, "name": "Machado" }
]
