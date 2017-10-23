import { Component } from '@angular/core';
import { ScoreService } from './score.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'GitHub Score';
 
  constructor(private _scoreService: ScoreService){}
  user = {
    username:"",
    score: 0,
    exists: null
  }
  calculateResults(){
    this._scoreService.retrieveScores(this.user.username)
      .then( data => { this.user.score = data.public_repos + data.followers;
        this.user.exists = true;
        console.log(data);
        console.log(this.user);

      })
      .catch(err => { console.log('user not found');
      this.user.exists = false;
      })
  }
}
