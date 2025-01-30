import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule} from '@angular/material/input'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card-home-second',
  imports: [MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './card-home-second.component.html',
  styleUrl: './card-home-second.component.css'
})
export class CardHomeSecondComponent {

}
