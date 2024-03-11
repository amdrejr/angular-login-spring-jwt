import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { User } from '../../models/user';
import { TextButtonComponent } from '../text-button/text-button.component';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [
    MatIconModule,
    CommonModule,
    TextButtonComponent,
    FormsModule
  ],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  @Input({required: true}) user: User = {} as User;

  edit: boolean = false;
  userStatus: number = 1;

  constructor() { }

  editUser() {
    this.edit = true;
    console.log("Qalquer coisa");
  }

  deleteUser() {

  }

  saveEdit() {
    this.edit = false;
    this.user.enabled = this.userStatus == 1 ? true : false;
    console.log(this.user.enabled);
  }
}
