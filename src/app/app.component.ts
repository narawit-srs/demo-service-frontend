import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable()
export class AppComponent {
  title = 'angular-tour-of-heroes';
  apiEmployee = environment.apiEmployee;
  apiCompany = environment.apiCompany;
  envWelcome = environment.envWelcome;

}
