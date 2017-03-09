import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import {AfterViewInit} from '@angular/core';

declare var $:any;

@Component({
  // moduleId: module.id,
  selector: 'my-profile',
  templateUrl: 'user-profile.component.html',
  styleUrls: ['user-profile.component.css']
})

export class UserProfileComponent implements AfterViewInit {

  public myProfile = new FormGroup({

    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    zipcode: new FormControl('',Validators.required),
    country: new FormControl('', Validators.required),
    linkedin: new FormControl('', Validators.required),
    github: new FormControl('', Validators.required),
    website: new FormControl('', Validators.required),
    resume: new FormControl('', Validators.required),
    skills: new FormControl('', Validators.required)


  });

  ngAfterViewInit() {

     $('select').material_select();


   }

  constructor() {

   }

  updateProfile(event) {
    const profile = this.myProfile.value;
    console.log(event);
    console.log(profile);

  }

}
