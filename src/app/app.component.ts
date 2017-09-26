import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  template:
  `
    <div class="field">
        <input name="query" placeholder="Enter First and Last Name" #searchElement>
    </div>
    <button (click)="search(searchElement)">
        Search
    </button>
    <p> {{ searchResultEmail }} </p>
    <ul>
        <li *ngFor="let key of keys()">
            {{ key }}
        </li>
    </ul>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @Input() searchElement: string;
  classList;
  searchResultEmail;
  errorMessage: string;

  constructor(private _http: Http) {}

  keys() : Array<string> {
      return Object.keys(this.classList);
  }

  search(searchElement: HTMLInputElement) {
      if (this.keys().includes(searchElement.value)) {
          console.log(this.classList[searchElement.value]);
          this.searchResultEmail = this.classList[searchElement.value];

      } else
      {
          console.log("no match");
          this.searchResultEmail = "NO MATCH NAME. PLEASE TRY AGAIN";
      }
  }

  ngOnInit() {
      this._http.get('/assets/class-email-dictionary.json')
          .subscribe(
              res => {
                  this.classList = <IEmailListing>res.json()
                  console.log(res.json())
              },
              error => this.errorMessage = <any>error
          );
  }
}

export class IEmailListing {
    [ index: string ] : string;
}
