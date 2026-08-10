import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferformComponent } from './transferform.component';

describe('TransferformComponent', () => {
  let component: TransferformComponent;
  let fixture: ComponentFixture<TransferformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransferformComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TransferformComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
