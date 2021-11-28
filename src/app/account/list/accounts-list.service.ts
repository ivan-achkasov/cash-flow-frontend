import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AccountsListService {

  constructor(private http: HttpClient) {
  }

  getAccounts(): any {
    return this.http.get("http://localhost:8080/accounts");
  }
}
