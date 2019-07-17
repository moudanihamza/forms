import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, ControlContainer } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-approach',
  templateUrl: './reactive-approach.component.html',
  styleUrls: ['./reactive-approach.component.css']
})
export class ReactiveApproachComponent implements OnInit {

  genders = ['male', 'female'];
  forbiddenNames = ['Anna', 'Yann'];
  signUpForm: FormGroup;
  user = {
    userName: '',
    email: '',
    secret: '',
    questionAnswer: '',
    gender: ''
  };
  constructor() { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      userData: new FormGroup({
        userName: new FormControl(null, [Validators.required, this.forbiddenNameValidator.bind(this)] ),
        email: new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmailValidator),
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([])
    });
  }

  onSubmit(): void {
    console.log(this.signUpForm);
    this.signUpForm.reset();
  }
  onAddHobby() {
    const formControl = new FormControl(null);
    (this.signUpForm.get('hobbies') as FormArray).push(formControl);
  }

  forbiddenNameValidator(formControl: FormControl): {[s: string]: boolean} {
    if (this.forbiddenNames.indexOf(formControl.value) !== -1) {
       return {nameIsForbidden: true};
    }
    return null;

  }
  forbiddenEmailValidator(formControl: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any> (
       (resolve, reject) => {
            setTimeout(
              () => {
                if (formControl.value === 'test@test.com') {
                  resolve({emailIsForbidden: true});
                }
                resolve(null);
              }
              , 300);
       }
    );
    return promise;
  }

}
