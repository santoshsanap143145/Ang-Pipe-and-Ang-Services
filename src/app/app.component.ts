import { Component } from '@angular/core';
import { Iplayer } from './shared/models/player';
import { cricketPlayers } from './shared/conts/players';

// for time stamp like >> months ago, __years ago- for these timestamp we have to insatall moment.js from its website >> 'npm install moment --save' << command to installs. 
// after installation, if we want to use the functionalities of 'moment' we have to import module with-
// import * from 'moment' 
// << here '*' is used because we dont know which property or method from 'moment' we are going to use so with '*' we can use all methods and we can import all methods of 'moment'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = '5-Ang-Pipe-and-Other-Concepts';

  para: string =
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis adipisci provident dicta placeat doloremque consequuntur doloribus fugiat illo aperiam itaque, dignissimos officia qui ea aliquam iusto recusandae praesentium accusamus blanditiis suscipit quidem unde impedit maxime aliquid possimus? Voluptatibus, molestias voluptatem sunt qui voluptatum, maiores possimus voluptas, consectetur obcaecati quia ut! Optio, nobis tenetur. Cupiditate rem nisi facere blanditiis et est fugit illo minima, labore qui eum? Earum impedit rem inventore nemo. Provident, nihil ducimus tempora voluptatem delectus quis, quisquam officia cupiditate aspernatur voluptate dolorum quibusdam dolor suscipit numquam, aperiam laboriosam distinctio accusamus corporis blanditiis laborum! Nihil praesentium itaque quos molestiae.';

  course = {
    title: 'MEAN Stack',
    students: 456123,
    rating: 4.78464567,
    price: 199.99,
    releaseDate: new Date(2024, 1),

    // methods from 'moment' comes here
    // moment(t).fromNow() << commenly asked in inrterviw on 'moment'.js
  };

  playersArr : Array<Iplayer> = cricketPlayers;
  searchVal !: string
  selectedfield !: string


  submitOnClick(){
    // obj >> API
    // 1st jan 1970 >> from where time or milliseconds are counted

    let t = Date.now();
    console.log(t) // shown in millisec >> called as timeStamp
    console.log(new Date(t));
    
  }
  // submitOnKeyup(event: any){
  //   this.searchVal = (event.target as HTMLInputElement).value
  // }
}
