import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'cmail';
  private _isNewEmailFormOpen = false;
  emailList = [];
  email = {
    destinatario: '',
    assunto: '',
    conteudo: ''
  }

  get isNewEmailFormOpen() {
    return this._isNewEmailFormOpen;
  }

  toggleNewEmailForm(){
    this._isNewEmailFormOpen = !this.isNewEmailFormOpen
  }

  handleNewEmail(event: Event){
    event.preventDefault(); // evita recarregar a pagina - checar

    this.emailList.push(this.email);

    this.email = {
      destinatario: '',
      assunto: '',
      conteudo: ''
    }
  }
}
