import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { actions, codeExamples } from './actions';
import { ChatGPTService } from './chat-gpt.service';
import { FormControl, FormsModule, Validators } from '@angular/forms';
import { HighlightLoader, Highlight } from 'ngx-highlightjs';
import { marked } from 'marked';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    NgbDropdownModule,
    FormsModule,
    [Highlight]
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  _actions = actions;
  _codeExamples = codeExamples;
  actionSelected = actions.find((action) => action.id == 1);
  message: any;
  input: string = "";
  code: string = "";
  loading: boolean = false;
  parsedMessage: string = "";
  copiedToClipboard: number = 0;

  constructor(
    private _chatGPTService: ChatGPTService,
    private hljsLoader: HighlightLoader = inject(HighlightLoader),
  ) { }

  changeAction(actionID?: number) {
    if (actionID) {
      this.actionSelected = actions.find((action) => action.id == actionID);
    }
  }

  copyToClipboard(text: string, btnId: number){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = text;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.copiedToClipboard = btnId;
    setTimeout(() => {
      this.copiedToClipboard = 0;
    }, 2000)
  }

  clearMessage(){
    this.message = "";
  }

  submitCode() {
    this.loading = true;

    switch (this.actionSelected?.id) {
      case 1:
        {
          this._chatGPTService.refactorCode(this.code)
            .subscribe({
              next: (res: any) => {
                console.log(res);
                this.message = {
                  sent: this.code,
                  received: this.parseMessage(res.choices[0].message.content)
                };
                this.code = "";
              },
              error: (err) => {
                console.log(err);
              }
            })
            .add(() => this.loading = false)
          break;
        }
      case 2:
        {
          this._chatGPTService.explainCode(this.code)
            .subscribe({
              next: (res: any) => {
                this.message = {
                  sent: this.code,
                  received: this.parseMessage(res.choices[0].message.content)
                };
                this.code = "";
              },
              error: (err) => {
                console.log(err);
              }
            })
            .add(() => this.loading = false)
          break;
        }
      case 3:
        {
          this._chatGPTService.fixBugs(this.code)
            .subscribe({
              next: (res: any) => {
                this.message = {
                  sent: this.code,
                  received: this.parseMessage(res.choices[0].message.content)
                };
                this.code = "";
              },
              error: (err) => {
                console.log(err);
              }
            })
            .add(() => this.loading = false)
          break;
        }
      case 4:
        {
          this._chatGPTService.namingCorrection(this.code)
            .subscribe({
              next: (res: any) => {
                this.message = {
                  sent: this.code,
                  received: this.parseMessage(res.choices[0].message.content)
                };
                this.code = "";
              },
              error: (err) => {
                console.log(err);
              }
            })
            .add(() => this.loading = false)
          break;
        }
      case 5:
        {
          this._chatGPTService.writeDocumentation(this.code)
            .subscribe({
              next: (res: any) => {
                this.message = {
                  sent: this.code,
                  received: this.parseMessage(res.choices[0].message.content)
                };
                this.code = "";
              },
              error: (err) => {
                console.log(err);
              }
            })
            .add(() => this.loading = false)
          break;
        }
      case 6:
        {
          this._chatGPTService.generateUnitTests(this.code)
            .subscribe({
              next: (res: any) => {
                this.message = {
                  sent: this.code,
                  received: this.parseMessage(res.choices[0].message.content)
                };
                this.code = "";
              },
              error: (err) => {
                console.log(err);
              }
            })
            .add(() => this.loading = false)
          break;
        }
    }
  }

  parseMessage(message: string){
    return marked(message);
  }

}
