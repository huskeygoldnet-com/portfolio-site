import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../email.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';

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

  // message = {
  //   name: '',
  //   email: '',
  //   message: ''
  // };

  contactForm: FormGroup;

  constructor(private emailService: EmailService) { }

  public sendEmail() {

    if (this.contactForm.valid) {

      console.log(this.contactForm.value);
      const message = this.contactForm.value;
      /* Any API call logic via services goes here */
      this.emailService.sendEmail(message).subscribe(value => {
        console.log(value);

      },
        err => {
          console.error('Oops:', err.message);
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
    // console.log(this.message);

  }

}
