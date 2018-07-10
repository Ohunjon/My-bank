import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'validator',
  templateUrl: './validator.component.html',
  styleUrls: ['./validator.component.scss']
})
export class ValidatorComponent implements OnInit {

  @Input() control: FormControl;
  @Input() extraMessage: string;
  @Input() successMessage: string;


  constructor() { }

  ngOnInit() {
  }

}
