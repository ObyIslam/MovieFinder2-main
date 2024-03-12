import { Component } from '@angular/core';
import { OmdbApiService } from '../../services/omdb-api.service';
import { IOMDBResponse } from '../../omdbresponse';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-searchtile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './searchtile.component.html',
  styleUrl: './searchtile.component.css'
})
export class SearchtileComponent {

  movieData:IOMDBResponse | undefined;
  errorMessage:any;

  constructor(private _omdbService:OmdbApiService){}

  
  getMovieDetails(movieName:string):boolean{
    this._omdbService.getMovieData(movieName).subscribe(
      movieData => {
        this.movieData = movieData;
        console.log("Director name: " + movieData.Director)
      }
    )
    return false;
  }

}
