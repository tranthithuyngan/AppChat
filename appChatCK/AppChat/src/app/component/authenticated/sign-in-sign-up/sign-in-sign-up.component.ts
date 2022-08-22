import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../services/web-socket.service';
import { ActivatedRoute } from '@angular/router'
import { Router } from 'express';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign-in-sign-up',
  templateUrl: './sign-in-sign-up.component.html',
  styleUrls: ['./sign-in-sign-up.component.scss']
})
export class SignInSignUpComponent implements OnInit {
  hide:boolean = false;
  user: string = ''
  pass: string = ''

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private fb: FormBuilder,
    private socket: WebSocketService) {
}

  ngOnInit(): void {
    this.socket.client.onmessage = (resp: any) => {
      if(resp) {
        const data = JSON.parse(resp.data)
       if(data?.status === 'success') {
        console.log(data);
        this.user = '';
        this.pass = '';
        
       }
      }      
    }
  }
  login($event: MouseEvent) {
    $event.preventDefault()
    const dataLogin = {
      action: 'onchat',
      data: {
        event: 'LOGIN',
        data: {
          user: this.user,
          pass: this.pass
        }
      }
    }
    this.socket.login(dataLogin)
  }

}