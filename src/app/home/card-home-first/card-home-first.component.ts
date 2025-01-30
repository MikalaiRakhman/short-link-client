import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule} from '@angular/material/input'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card-home-first',
  imports: [MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './card-home-first.component.html',
  styleUrl: './card-home-first.component.css'
})
export class CardHomeFirstComponent {

}
