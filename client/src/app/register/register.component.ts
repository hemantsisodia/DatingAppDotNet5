import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountsService } from '../_services/accounts.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private accountService: AccountsService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  register(){
    // console.log(this.model);
    this.accountService.register(this.model).subscribe(response => {
      // console.log(response);
      this.cancel();
    }, error => {
      console.log(error);
      this.toastr.error(error.error);
    });
  }

  cancel(){
    // console.log('cancelled');
    this.cancelRegister.emit(false);
  }

}
