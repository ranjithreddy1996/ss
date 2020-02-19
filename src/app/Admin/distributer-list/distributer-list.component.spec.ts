import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributerListComponent } from './distributer-list.component';
import { FormsModule } from '@angular/forms';
import { Web3Service } from 'src/app/web3.service';

describe('DistributerListComponent', () => {
  let component: DistributerListComponent;
  let fixture: ComponentFixture<DistributerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DistributerListComponent],
      imports: [FormsModule],
      providers: [Web3Service]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
