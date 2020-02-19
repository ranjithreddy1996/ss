import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisRejectedComponent } from './dis-rejected.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Web3Service } from 'src/app/web3.service';

describe('DisRejectedComponent', () => {
  let component: DisRejectedComponent;
  let fixture: ComponentFixture<DisRejectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisRejectedComponent ],
      imports: [FormsModule, RouterTestingModule],
      providers: [Web3Service]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisRejectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
