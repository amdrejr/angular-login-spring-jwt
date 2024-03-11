import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { UserCardComponent } from '../../components/user-card/user-card.component';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [
    MatIconModule,
    UserCardComponent
  ],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent {

  user:User = {
    username: 'join_doe',
    id: 3,
    enabled: true,
    authorities: [
      {id: 1, name: 'USER', authority: 'USER'},
      {id: 2, name: 'ADMIN', authority: 'ADMIN'}
    ]
  };

}
