import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerRegistrationComponent } from './officer-registration.component';
import { FormsModule } from '@angular/forms';
import { Web3Service } from 'src/app/web3.service';

describe('OfficerRegistrationComponent', () => {
  let component: OfficerRegistrationComponent;
  let fixture: ComponentFixture<OfficerRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficerRegistrationComponent ],
      imports: [FormsModule],
      providers: [Web3Service]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficerRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
