import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-log-in-view',
  templateUrl: './log-in-view.component.html',
  styleUrls: ['./log-in-view.component.css'],
})
export class LogInViewComponent implements OnInit {
  formReg: FormGroup;

  constructor(private userServiceService: UserServiceService, private router: Router) {
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.userServiceService
      .login(this.formReg.value)
      .then((response) => console.log(response))
      this.router.navigate(['/login'])
      .catch((error) => console.log(error));
  }
}
