import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../services/email.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';

import { Meta } from '@angular/platform-browser';

export class Message {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  responseMessage: string;
  sendingStatus: string;
  resonseStatus: string;

  contactForm: FormGroup;

  constructor(private emailService: EmailService, private meta: Meta) {
    this.meta.addTags([
      { charset: 'utf-8' },
      { name: 'description', content: 'Hi, I\'m Zach - A web developer with skills in HTML5, CSS3, Javascript, Angular, WordPress and much more. Based in Brooklyn, NY.' },
      { name: 'robots', content: 'index, follow' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge, chrome=1' },
      { name: 'author', content: 'Zach Bayoff' },
      { name: 'copyright', content: 'Zach Bayoff' },
      { name: 'keywords', content: 'Web developer, front-end developer, brooklyn' }
    ]);
  }

  public sendEmail() {

    if (this.contactForm.valid) {
      this.sendingStatus = 'sending';
      const message = this.contactForm.value;
      this.emailService.sendEmail(message).subscribe(value => {
        if (value === 'ok') {
          this.resonseStatus = 'ok';
          this.sendingStatus = 'sent';
          this.responseMessage = 'Message sent!';
        } else if (value === 'error') {
          this.resonseStatus = 'error';
          this.sendingStatus = 'sent';
          this.responseMessage = 'Sorry, there was a problem sending your message. Please send me an email instead or try sending the message again. Thanks!';
        } else {
          this.resonseStatus = 'error';
          this.sendingStatus = 'sent';
          this.responseMessage = 'Sorry, there was a problem sending your message. Please send me an email instead or try sending the message again. Thanks!';
        }

      },
        err => {
          console.error('Oops:', err.message);
          this.resonseStatus = 'error';
          this.sendingStatus = 'sent';
          this.responseMessage = 'Sorry, there was a problem sending your message. Please send me an email instead or try sending the message again. Thanks!';
        });

      this.contactForm.reset();
    }

  }



  ngOnInit() {

    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required)
    });

  }

}
