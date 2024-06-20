import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  "username": string;
  "password": string;

  constructor(private authService: AuthService, private router: Router) { }

  register() {
    this.authService.register(this.username, this.password).subscribe(
      data => {
        this.router.navigate(['/login']);
      },
      err => console.log(err)
    );
  }
}
