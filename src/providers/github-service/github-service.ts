import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class GithubServiceProvider {

  data: any;
  githubApiUrl = 'https://api.github.com';

  constructor(public http: Http) {
    console.log('Hello GithubServiceProvider Provider');
  }

  getUsers() {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get(this.githubApiUrl+'/users')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });        
    });
  }
}
