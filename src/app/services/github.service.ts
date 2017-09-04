import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username:string;
    private client_id = '18032c6c24185cc3b859';
    private client_secret = 'f686362b2cfffec6e1abdba9f31934a42426419f';

    constructor(private _http: Http){
        console.log('GitHub Service Ready...');
        this.username = 'nix07';
    }

    getUser(){
        return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
            .map(res => res.json());
    }

    getRepos(){
        return this._http.get('http://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
            .map(res => res.json());
    }

    updateUser(username: string){
      this.username = username;
    }
}
