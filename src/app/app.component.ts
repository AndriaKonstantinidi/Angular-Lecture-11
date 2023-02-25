import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  animeList:any

  constructor(private http : HttpService){
    this.http.getDataFromApi().subscribe((anime: any) =>{
      this.animeList = anime.data
      console.log(this.animeList)
    })
  }

userLists:any = ["andrew","Hoteye"]

 userList:any ={
   firstName:'Houndeye',
   id:2
 }

 saveData(anime:any){
  localStorage.setItem('user',JSON.stringify(anime))
 }

 deleteStorage(){
   localStorage.clear()
 }
}
