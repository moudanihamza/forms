import { element } from 'protractor';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
  @ViewChild('myForm', { static: false }) myForm: NgForm;
  answer = '';
  genders = ['male', 'female'];
  user = {
    userName: '',
    email: '',
    secret: '',
    questionAnswer: '',
    gender: ''
  };
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.myForm);
    this.user.userName = this.myForm.form.value.userData.userName;
    this.user.email = this.myForm.form.value.userData.email;
    this.user.secret = this.myForm.form.value.secret;
    this.user.questionAnswer = this.myForm.form.value.questionAnswer ;
    this.user.gender = this.myForm.form.value.gender;
    this.myForm.reset();
  }
  SuggestUserName() {
    const suggestedName = 'superUser';
    this.myForm.form.patchValue({
      userData: {
        userName: suggestedName
      }
    });
  }
}
