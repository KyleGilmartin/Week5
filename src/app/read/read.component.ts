import * as TutorialActions from '../../actions/actions';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Tutorial } from '../../models/model';
import { AppState } from './../app.state';



@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  // Section 1
  tutorials: Observable<Tutorial[]>;

  // Section 2
  constructor(private store: Store<AppState>) { 
    this.tutorials = store.select('tutorial');
  }
   delTutorial(index) {
    this.store.dispatch(new TutorialActions.RemoveTutorial(index) )
  }

  ngOnInit() {}



}