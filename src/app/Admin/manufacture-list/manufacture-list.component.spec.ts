import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufactureListComponent } from './manufacture-list.component';
import { FormsModule } from '@angular/forms';
import { Web3Service } from 'src/app/web3.service';

describe('ManufactureListComponent', () => {
  let component: ManufactureListComponent;
  let fixture: ComponentFixture<ManufactureListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufactureListComponent ],
      imports: [FormsModule],
      providers: [Web3Service]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufactureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
