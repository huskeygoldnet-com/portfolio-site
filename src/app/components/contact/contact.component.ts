import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../email.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  message = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private emailService: EmailService ) { }

  public sendEmail(message) {
    // console.log(message);
    this.emailService.sendEmail(message).subscribe((value) => {
      console.log('success!', value);
    });
  }

  ngOnInit() {
  }

}
