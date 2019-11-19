import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchArtistComponent } from './search-artist/search-artist.component';
import { ArtistCardComponent } from './artist-card/artist-card.component';


const routes: Routes = [
  // Setting of my routes
  {path: 'search-artist', component: SearchArtistComponent},
  {path: 'search-artist/:id', component: ArtistCardComponent },
  {path: '', redirectTo: 'search-artist', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
