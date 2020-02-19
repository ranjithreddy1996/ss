import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionNavComponent } from './transaction-nav.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Web3Service } from 'src/app/web3.service';

describe('TransactionNavComponent', () => {
  let component: TransactionNavComponent;
  let fixture: ComponentFixture<TransactionNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionNavComponent ],
      imports: [FormsModule, RouterTestingModule],
      providers: [Web3Service]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
