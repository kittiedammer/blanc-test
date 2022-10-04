import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPhoneComponent } from './client-phone.component';

describe('ClientPhoneComponent', () => {
  let component: ClientPhoneComponent;
  let fixture: ComponentFixture<ClientPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientPhoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
