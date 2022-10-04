import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import { RequestService } from 'src/app/shared/services/request.service';

@Component({
  selector: 'app-client-phone',
  templateUrl: './client-phone.component.html',
  styleUrls: ['./client-phone.component.scss']
})
export class ClientPhoneComponent implements OnInit {
  
  @Input() phone: string | undefined;
  @Input() id!: number;
  
  public canEdit: boolean = false;
  public displayModal: boolean = false;
  public clientGroup: FormGroup;

  constructor(
    private primengConfig: PrimeNGConfig,
    private formBuilder: FormBuilder,
    private requestService: RequestService
  ) {
    
    this.clientGroup = formBuilder.group({
      phone: ["", [Validators.required, this.validatePhone]]
    })
  }

  ngOnInit(): void {
    this.clientGroup.controls['phone'].setValue(this.phone);
    this.primengConfig.ripple = true;
    this.disablePhoneInput();
  }

  public disablePhoneInput() {
    this.canEdit = false;
    this.clientGroup.controls['phone'].disable();
  }

  public enablePhoneInput() {
    this.canEdit = true;
    this.clientGroup.controls['phone'].enable();
  }

  public showModal() {
    this.displayModal = true;
  }

  public confirmModal() {
    let demaskPhone = this.clientGroup.controls['phone'].value.split().map((el: any) => {
      if(el != " " && el != "(" && el != ")") return el;
    })[0];
    this.requestService.postPhone(demaskPhone, this.id);
  }

  private validatePhone(control: AbstractControl) {
    if (!control.value || !control.value.match(/^((8|\+7)[\- ]?)?(\(?\d{3,4}\)?[\- ]?)?[\d\- ]{5,10}$/)) {
      return { invalidPhone: true };
    }
    return null;
  }

}
