import {Component, Input, Output, EventEmitter, HostListener} from '@angular/core';

@Component({
  selector: 'my-cell',
  template: `<div >{{value}}</div>`,
  styles: [
    `div {height: 50px; width: 50px; background-color: #76D7C4 ; float: left; margin: 0 4px 4px 0; color: #5B2C6F ;}`
  ]
})
export class CellComponent {
  @Input() value: string;
  @Output('userClick') click = new EventEmitter<string>();

  @HostListener('click')
  clickHandler() {
    this.click.emit('');
  }
}