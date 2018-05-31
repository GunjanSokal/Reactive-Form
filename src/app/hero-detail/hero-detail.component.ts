import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup , FormControl , Validators } from '@angular/forms';
import {  Address, Hero, states  } from '../data-model';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  heroForm : FormGroup;
  states = states;


  constructor(private fb : FormBuilder ){
    this.createForm();
  };
  

  ngOnInit() {

  }

 createForm(){
  this.heroForm = this.fb.group({
    name: ['', Validators.required ],
    // address : this.fb.group({
    //   street: '',
    //   city: '',
    //   state: '',
    //   zip: '',
    // }),
    address : this.fb.group(new Address),
    power: '',
    sidekick: '',
  });
 }

  // heroForm =  new FormGroup({
  //   name : new FormControl()
  // });

}
