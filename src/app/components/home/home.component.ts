import { Component } from '@angular/core';
import { PokedexService } from 'src/app/services/pokedex-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  pokemon: any;
  types: any;
  textoInput: any;
  modalErro = false;
  textoErro = '';

  constructor(private pokedexService: PokedexService) { }

  ngOnInit() {
  }

  getPokemonData(pokemonName: string) {
    this.pokedexService.getPokemon(pokemonName).subscribe(
      (data) => {
        console.log(data);
        this.modalErro = false;
        this.pokemon = data;
        this.types = data.types;
      },
      (error) => {
        console.error('Error fetching Pokemon data:', error);
        this.modalErro = true;
        this.textoErro = `${error.error}`;
      }
    );
  }

  fecharModalErro() {
    this.modalErro = false;
    this.textoInput = '';
  }

}
