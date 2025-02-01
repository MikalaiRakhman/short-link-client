import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule} from '@angular/material/input'
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { VisibilityService } from '../../services/visability/visibility.service';
import { LinkService } from '../../services/link/link.service';
import { AuthService } from '../../services/auth/auth.service';
import { TokenService } from '../../services/token/token.service';

@Component({
  selector: 'app-card-home-first',
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatIconModule, MatCardModule],
  templateUrl: './card-home-first.component.html',
  styleUrl: './card-home-first.component.css'
})
export class CardHomeFirstComponent {
  formLongLink: FormGroup;
  fb = inject(FormBuilder);
  visibility = inject(VisibilityService);
  linkService = inject(LinkService);
  authService = inject(AuthService);
  tokenService = inject(TokenService);
  longLink: string;
  

  constructor() {
    this.longLink = '';
    this.formLongLink = this.fb.group({
      longLink: ['', [Validators.required]]
    })
  }


  async onSaveLongLink(): Promise<void> {
    if(this.formLongLink.valid) {
      this.longLink = this.formLongLink.get('longLink')?.value;
      console.log(this.longLink);
      this.linkService.changeLongLink(this.longLink);
      this.createShortUrl();      
      this.visibility.setCardHomeFirstValue(false);
      this.visibility.setCardHomeSecondValue(true);
    }
  }

  createShortUrl() {
    if(this.isLoggedIn()) {
      this.linkService.createShortUrlWithUserId(this.longLink, this.tokenService.getIdFromToken(this.tokenService.getToken()!))
      .subscribe(response => {
        this.linkService.changeShortLink(response.shortUrl);
        console.log(response.shortUrl);
      }, error => {
        console.error('Error creating short URL with user id:', error);
      });      
    } else {
      this.linkService.createShortUrl(this.longLink).subscribe(response => {
        this.linkService.changeShortLink(response.shortUrl);
        console.log(response.shortUrl);
      }, error => {
        console.error('Error creating short URL:', error);
      });
    }    
  }

  isLoggedIn(): boolean {
    return this.authService.isAuthenticated();
  }

}
