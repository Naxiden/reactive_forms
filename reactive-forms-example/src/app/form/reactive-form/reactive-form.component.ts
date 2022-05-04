import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder , FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { FormValueStorageService } from './services/form-value-storage.service';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  contactForm!: FormGroup;
  
  constructor(private fb: FormBuilder, private storageService: FormValueStorageService) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3), this.noSpaceAllowed()]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      address: this.fb.group({
        street: [''],
        city: ['', [Validators.required, Validators.minLength(4)]],
      }),
    });
  }
  onSubmit() {
    //passing form value into service on submit.
    this.storageService.formValue = this.contactForm.value;
    console.log(this.storageService.formValue);
  }   

  noSpaceAllowed(): ValidatorFn {
    return (control: AbstractControl) => {
      if (!control.value) {
        console.log(control.value);
        return null;
      }
      const regex = /^\S+$/;
      const valid = regex.test(control.value);
      return valid ? null : { invalidSymbols: true };
    };

  }
}
