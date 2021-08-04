import {Component} from '@angular/core';

@Component({
  selector: 'pagenotfound',
  template: `
    <h1> Page NOt Found</h1>
  `,
  styles: [`h1 {
    color: red;
    font-size: 8rem;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }`]
})
export class PageNotFoundComponent {
  title = 'Error 404';
}
