import { Component, OnInit } from '@angular/core';

import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent implements OnInit {

  constructor(private meta: Meta) {
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

  ngOnInit() {
  }

}
