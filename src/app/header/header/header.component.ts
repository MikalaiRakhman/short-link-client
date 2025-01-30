import { Component } from '@angular/core';
import { MatButtonModule} from '@angular/material/button'
import { CommonModule } from '@angular/common';
import { MatToolbarModule} from '@angular/material/toolbar'
import { MatIconModule} from '@angular/material/icon'
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule ,MatToolbarModule, MatButtonModule, RouterLink, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
