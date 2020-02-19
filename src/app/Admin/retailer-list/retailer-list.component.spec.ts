import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerListComponent } from './retailer-list.component';
import { FormsModule } from '@angular/forms';
import { Web3Service } from 'src/app/web3.service';

describe('RetailerListComponent', () => {
  let component: RetailerListComponent;
  let fixture: ComponentFixture<RetailerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailerListComponent ],
      imports: [FormsModule],
      providers: [Web3Service]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
