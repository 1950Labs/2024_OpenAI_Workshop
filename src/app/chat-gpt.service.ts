import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './environment';

@Injectable({
  providedIn: 'root'
})
export class ChatGPTService {

  private readonly _apiUrl = "https://api.openai.com/v1/chat/completions";
  headers = new HttpHeaders({
    'Authorization': `Bearer ${environment.apiKey}`,
    'Content-Type': 'application/json'
  });

  constructor(private _http: HttpClient) {
  }

  refactorCode(input: string) {
    return this._http.post(this._apiUrl,
      {
        model: 'gpt-4o',
        messages: [
          {
            role: "system",
            content: `You will be delivered a piece of code. You will have to make improvements if possible, following
              programming good practices. Deliver the refactored code and explain what was modified.`
          },
          {
            role: "user",
            content: input
          }
        ],
        temperature: 0.1
      }, { headers: this.headers })
  }

  explainCode(input: string) {
    return this._http.post("",
      {
       //write your code here
      }, { headers: this.headers })
  }

  fixBugs(input: string) {
    return this._http.post("",
      {
       //write your code here
      }, { headers: this.headers })
  }

  namingCorrection(input: string) {
    return this._http.post("",
      {
        //write your code here
      }, { headers: this.headers })
  }

  writeDocumentation(input: string) {
    return this._http.post("",
      {
       //write your code here
      }, { headers: this.headers })
  }

  generateUnitTests(input: string) {
    return this._http.post("",
      {
       //write your code here
      }, { headers: this.headers })
  }

}
