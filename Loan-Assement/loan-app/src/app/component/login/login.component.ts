import { Component, OnInit } from '@angular/core';

import { Router,ActivatedRoute } from '@angular/router';
import { HardcodedAuthenticationService } from 'src/app/service/hardcoded-authentication.service';
import { LoanService } from '../../service/loan.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  retUrl:string|any="home";
  loggedIn:boolean;
  loading: boolean;
  constructor(private toastr: ToastrService,private router:Router,private activatedRoute:ActivatedRoute,private loanService:LoanService ,private authService: HardcodedAuthenticationService ) { }

  ngOnInit() {
    this.activatedRoute.queryParamMap
            .subscribe(params => {
        this.retUrl = params.get('retUrl');
        console.log( 'LoginComponent/ngOnInit '+ this.retUrl);
    });
}

  gotosignup(){
    this.router.navigate(['/signup']);
      }

   async onFormSubmit(loginForm:any) {
    this.loading = true;
    this.loggedIn=await  this.authService.authenticate(loginForm.value.username, loginForm.value.password);

   if(this.loggedIn){

       console.log( 'return to '+ this.retUrl);
       if (this.retUrl!=null) {
        this.router.navigate( [this.retUrl]);
   } else {
        this.router.navigate( ['home']);
        this.toastr.success('Login Successfull');
   }
  }
  else{
    this.loading = false;
    this.toastr.error('Try Again or Register');

  }
}


}
