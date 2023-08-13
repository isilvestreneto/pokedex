import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  private baseUrl = 'https://pokeapi.co/api/v2/';


  constructor(private http: HttpClient) { }

  getPokemon(pokemonName: string): Observable<any> {
    const url = `${this.baseUrl}pokemon/${pokemonName}`;
    return this.http.get(url);
  }

  getEvolutionChain(id: number): Observable<any> {
    // https://pokeapi.co/api/v2/evolution-chain/{id}
    const url = `${this.baseUrl}evolution-chain/${id}`;
    return this.http.get(url);
  }
}
