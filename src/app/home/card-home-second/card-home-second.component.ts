import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule} from '@angular/material/input'
import { FormsModule } from '@angular/forms';
import { LinkService } from '../../services/link/link.service';
import { VisibilityService } from '../../services/visability/visibility.service';
import { ApiConfigService } from '../../services/api-config/api-config.service';

@Component({
  selector: 'app-card-home-second',
  imports: [MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './card-home-second.component.html',
  styleUrl: './card-home-second.component.css'
})
export class CardHomeSecondComponent implements OnInit {  
  linkService = inject(LinkService);
  visibility = inject(VisibilityService);
  apiService = inject(ApiConfigService);

  shortLink: string = '';
  longLink: string = '';

  ngOnInit(): void {
    this.linkService.currentLongLink.subscribe(longLink => {
      this.longLink = longLink;
      console.log('card-home-second longLink', this.longLink);
    })

    this.linkService.currentShortLink.subscribe(shortLink => {
      this.shortLink = `${this.apiService.apiUrl}/${shortLink}`;
      console.log('card-home-second shortLink:', this.shortLink);
    });
  }

  onGetAnotherLink(): void {
    this.visibility.setCardHomeFirstValue(true);
    this.visibility.setCardHomeSecondValue(false);
  }
}
