import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getNews() {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=819b763010e64f5790392a15d2b28047')
  }

  addNews(article: any) {
    return this.http.post('http://localhost:9000/auth/favorites', article, {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkFtaXRAZ21haWwuY29tIiwicGFzc3dvcmQiOiIxMjM0NTY3IiwiaWF0IjoxNjY3MzcyNDc4LCJleHAiOjE2NjczOTA0Nzh9.Kd_gH5S8CGUK76MAY8mRu3dEMYIFTgr8iM0K2S0jAPI'
      }
    });
  }

}
