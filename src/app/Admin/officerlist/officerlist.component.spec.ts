import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerlistComponent } from './officerlist.component';
import { FormsModule } from '@angular/forms';
import { Web3Service } from 'src/app/web3.service';

describe('OfficerlistComponent', () => {
  let component: OfficerlistComponent;
  let fixture: ComponentFixture<OfficerlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficerlistComponent ],
      imports: [FormsModule],
      providers: [Web3Service]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
