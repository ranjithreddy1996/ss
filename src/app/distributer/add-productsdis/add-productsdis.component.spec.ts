import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductsdisComponent } from './add-productsdis.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Web3Service } from 'src/app/web3.service';

describe('AddProductsdisComponent', () => {
  let component: AddProductsdisComponent;
  let fixture: ComponentFixture<AddProductsdisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductsdisComponent ],
      imports: [FormsModule, RouterTestingModule],
      providers: [Web3Service]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductsdisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
