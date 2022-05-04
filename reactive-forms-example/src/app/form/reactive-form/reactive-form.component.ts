import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  contactForm!: FormGroup;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.pattern("^[0-9]*$")]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.pattern("^[0-9]*$")]],
      address: this.fb.group({
        street: [''],
        city: ['', [Validators.required, Validators.minLength(4)]],
        zip: ['']
      }),
    });
  }
  onSubmit() {
    console.log(this.contactForm.value);
  }

}
