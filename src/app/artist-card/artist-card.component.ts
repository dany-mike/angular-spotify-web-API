import { Component, OnInit } from '@angular/core';
import { Artist } from '../artist';
import { Routes, Router, ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../search-artist.service';
import { map } from 'rxjs/operators';
import { Album } from '../album';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.css']
})
export class ArtistCardComponent implements OnInit {
  id:string;
  artist: Artist;
  relatedArtists :[] = [];
  topTracks:[] = [];
  displayDiscography: boolean = false;
  displaySimilar: boolean = false;
  displayTopTrack: boolean = false;
  albums: Album;
  

  constructor(private route: ActivatedRoute, private spotifyServ: SpotifyService) {
    this.route.params.subscribe(params => {
     this.id = params['id']
    })
  }

  ngOnInit() {
    this.getArtist()
    }

    // Get an artist
    getArtist() {
      this.spotifyServ.getArtist(this.id).subscribe((artist: Artist) => {
        this.artist = artist;
        console.log(artist);
      })
    }

  
  
    // Get the albums of an artist
    getDiscography() {
      this.spotifyServ.getAlbums(this.id).subscribe((album) => {
        console.log(album)
        this.albums = album['items'];
      })
      this.displayDiscography = true
    }

    // Hide the album
    hideDiscography() {
      this.displayDiscography = false
    }

    // Get suggestion of similar artists
    getRelated() {
      this.spotifyServ.getRelatedArtist(this.id).subscribe((relatedArtist)=> {
        console.log(relatedArtist);
        this.displaySimilar = true;
        this.relatedArtists = relatedArtist['artists'];
      })
    }

    // Hide the similar artists
    hideRelated() {
      this.displaySimilar = false;
    }

    // Get the Top-Tracks of an artist
    getTopTrack() {
      this.spotifyServ.getTopTracks(this.id).subscribe((topTracks) => {
        console.log(topTracks)
        this.topTracks = topTracks['tracks'];
      })
        this.displayTopTrack = true;
    }

    // Hide the Top-Tracks of an artist
    hideTopTrack() {
      this.displayTopTrack = false;
    }
    
} 

