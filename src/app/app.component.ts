import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'project2-Synergy-Frontend';
}

@Component({
  selector: 'app-show-api',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class ShowApiComponent implements OnInit {

  li: any;
  lis = [];
  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.http.get('https://harry-potter-api-english-production.up.railway.app/characters')
      .subscribe(Response => {

        // If response comes hideloader() function is called
        // to hide that loader
        if (Response) {
          //hideloader();
        }
        console.log(Response)
        this.li = Response;
        this.lis = this.li.list;
      });
      /*
    function hideloader() {
      document.getElementById('loading').style.display = 'none';
    }*/
  }
}
