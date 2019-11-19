import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../search-artist.service';
import {Artist} from '../artist'
 
@Component({
  selector: 'app-search-artist',
  templateUrl: './search-artist.component.html',
  styleUrls: ['./search-artist.component.css']
})
export class SearchArtistComponent implements OnInit {

  searchStr: string;
  artists:  Artist[] = [];

  constructor(private spotifyServ: SpotifyService) { }

  ngOnInit() {
  }

  // Search an artist using the input
  searchArtist() {
    console.log(this.searchStr);
    this.spotifyServ.searchArtist(this.searchStr).subscribe((res)=> {
      this.artists = res['artists'].items
      console.log(res);
      
    })
  }

}