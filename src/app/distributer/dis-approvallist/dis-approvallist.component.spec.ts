import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisApprovallistComponent } from './dis-approvallist.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Web3Service } from 'src/app/web3.service';

describe('DisApprovallistComponent', () => {
  let component: DisApprovallistComponent;
  let fixture: ComponentFixture<DisApprovallistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisApprovallistComponent ],
      imports: [FormsModule, RouterTestingModule],
      providers: [Web3Service]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisApprovallistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
