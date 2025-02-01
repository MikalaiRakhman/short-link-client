import { inject, Injectable } from '@angular/core';
import { ApiConfigService } from '../api-config/api-config.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DoubleUrl } from '../../models/double-url.type';

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

  createShortUrlWithUserId(originalUrl: string, userId: string): Observable<{shortUrl: string}> {
    const payload = { 
      originalUrl: originalUrl,
      userId: userId
    }
    return this.http.post<{ shortUrl: string }>(`${this.api.apiShortUrls}/create-short-url-with-user-id`, payload);
  } 

  changeShortLink(shortLink: string) {
    this.shortLinkSource.next(shortLink);
    console.log('link service', this.shortLinkSource);
  }

  changeLongLink(longLink: string) {
    this.longLinkSource.next(longLink);
  }

  getAllDoubleUrls(): Observable<DoubleUrl[]> {
    return this.http.get<DoubleUrl[]>(`${this.api.apiShortUrls}/get-all-double-urls`);
  }
}
