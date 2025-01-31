import { inject, Injectable } from '@angular/core';
import { ApiConfigService } from '../api-config/api-config.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LinkService {
  api = inject(ApiConfigService);
  http = inject(HttpClient);

  private shortLinkSource = new BehaviorSubject<string>('');
  currentShortLink = this.shortLinkSource.asObservable();

  private longLinkSource = new BehaviorSubject<string>('');
  currentLongLink = this.longLinkSource.asObservable();
  

  createShortUrl(originalUrl: string): Observable<{ shortUrl: string }> {
    const payload = { originalUrl: originalUrl };
    return this.http.post<{ shortUrl: string }>(`${this.api.apiShortUrls}/create-short-url`, payload);
  }

  changeShortLink(shortLink: string) {
    this.shortLinkSource.next(shortLink);
    console.log('link service', this.shortLinkSource);
  }

  changeLongLink(longLink: string) {
    this.longLinkSource.next(longLink);
  }
}
