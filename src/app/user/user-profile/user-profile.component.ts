import { Component, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from "@angular/material/list";
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user.type';
import { TokenService } from '../../services/token/token.service';
import { UserService } from '../../services/user.service';
import { DoubleUrl } from '../../models/double-url.type';
import { LinkService } from '../../services/link/link.service';

@Component({
  selector: 'app-user-profile',
  imports: [MatCardModule, MatIconModule, MatListModule, MatTabsModule, MatButtonModule, MatTableModule, CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit{  
  token = inject(TokenService);
  userService = inject(UserService);
  linkService = inject(LinkService);

  doubleUrls: DoubleUrl[] = [];
  doubleUrlsOfCurrentUser: DoubleUrl[] = [];
  user: User = {} as User;
  showTable = false;
  displayedColumns: string[] = ['originalLink', 'shortLink'];

  ngOnInit(): void {
    this.loadData();
  }

  async loadData() {
    await this.getUser();
    await this.getDoubleUrlsOfCurrentUser();
  }

  async getUser() {
    return new Promise<void>((resolve, reject) => {
      this.userService.getUserById(this.token.getIdFromToken(this.token.getToken()!)).subscribe(response => {
        this.user = response;
        console.log('user-profile.component', this.user);
        resolve();
      }, error => {
        console.error('Error fetching user:', error);
        reject();
      });
    });
  }

  async getAllDoubleUrls() {
    return new Promise<void>((resolve, reject) => {
      this.linkService.getAllDoubleUrls().subscribe(response => {
        this.doubleUrls = response;
        console.log('all-double-urls', this.doubleUrls);
        resolve();
      }, error => {
        console.error('Error fetching double URLs:', error);
        reject();
      });
    });
  }

  async getDoubleUrlsOfCurrentUser() {
    await this.getAllDoubleUrls();
    let id = this.token.getIdFromToken(this.token.getToken()!);
    console.log('userIdFromToken', id);
    this.doubleUrls.map(d => {
      if(d.userId === id) {
        this.doubleUrlsOfCurrentUser.push(d);
      }
    })
    console.log('filtered-urls', this.doubleUrlsOfCurrentUser);
    if (this.doubleUrlsOfCurrentUser.length > 0) {
      this.showTable = true;
    }
  }
}

