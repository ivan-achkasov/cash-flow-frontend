import { Component, OnInit } from '@angular/core';
import {AccountsListService} from "./accounts-list.service";

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.scss'],
})
export class AccountsListComponent implements OnInit {

  accounts: any;

  constructor(private accountsListService: AccountsListService) { }

  ngOnInit(): void {
    this.accountsListService.getAccounts().subscribe((data: any) => {
      this.accounts = data;
    });
  }

}
