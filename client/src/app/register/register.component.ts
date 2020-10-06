import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountsService } from '../_services/accounts.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private accountService: AccountsService) { }

  ngOnInit(): void {
  }

  register(){
    // console.log(this.model);
    this.accountService.register(this.model).subscribe(response => {
      // console.log(response);
      this.cancel();
    }, error => {
      console.log(error);
    });
  }

  cancel(){
    // console.log('cancelled');
    this.cancelRegister.emit(false);
  }

}
