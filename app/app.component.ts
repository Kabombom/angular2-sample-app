import {Component} from 'angular2/core';

interface Hero {
  id: number;
  name: string;
}

//O Component no template le o title e hero da class AppComponent
//O angular automaticamente tira o valor destas propriedads e muda as quando elas sao mudadas
//A classe é renderizada dentro da tag <starting-app> pelo selector que lhe faz bootstrap no boot.ts
@Component({
    selector: 'starting-app',
    template: `
        <h1>{{title}}</h1>
        <h2>{{hero.name}} details!</h2>
        <div><label>id: </label>{{hero.id}}</div>
        <div>
          <label>name: </label>
          <input [(ngModel)]="hero.name" placeholder="name">
        </div>
    `
})

export class AppComponent {
    public title = "Tour of Heroes";
    public hero: Hero = {
        id: 1,
        name: 'Windstorm'
    }
}
