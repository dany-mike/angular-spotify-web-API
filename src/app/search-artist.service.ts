import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private artistUrl: string;
  private searchUrl: string;
  private albumsUrl: string;
  private topTracksUrl: string;
  private relatedArtistUrl: string;

  // A token is required to use the app. Consult the doc of Spotify API for more informations.
  private access_token: string = '[current token]';

  constructor(private http: HttpClient) { }

  // Get an artist using the id
  getArtist(id: string) {

    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.access_token);
    
    this.artistUrl = "https://api.spotify.com/v1/artists/"+id;


    return this.http.get(this.artistUrl, {headers: headers})
    .pipe(map((res) => res));
  }

  // Get a related Artist
  getRelatedArtist(relatedArtistId) {
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.access_token);

    this.relatedArtistUrl = "https://api.spotify.com/v1/artists/"+relatedArtistId+'/related-artists';

    return this.http.get(this.relatedArtistUrl, {headers: headers}).pipe(
      map((res) => res)
    )

  }

  // Get an album of the artist 
  getAlbums(artistId: string) {
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.access_token);
    
    this.albumsUrl = "https://api.spotify.com/v1/artists/"+artistId+'/albums?limit=7';

    return this.http.get(this.albumsUrl, {headers: headers})
    .pipe(map((res) => res));
  }

  //Search an artist
  searchArtist(str: string) {

    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.access_token);

    this.searchUrl = 'https://api.spotify.com/v1/search?q='+str+'&type=artist&market=US&limit=7';

    return this.http.get(this.searchUrl, {headers: headers}).pipe(map((res)=> res));
  }

  // Get Top Track of an Artist
  getTopTracks(id) {
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.access_token);

    this.topTracksUrl = 'https://api.spotify.com/v1/artists/'+id+'/top-tracks?country=FR'

    return this.http.get(this.topTracksUrl, {headers: headers}).pipe(map((res) => res));
  }
 
}

