import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositarFundosComponent } from './depositar-fundos.component';

describe('DepositarFundosComponent', () => {
  let component: DepositarFundosComponent;
  let fixture: ComponentFixture<DepositarFundosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepositarFundosComponent]
    });
    fixture = TestBed.createComponent(DepositarFundosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
