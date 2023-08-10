import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetirarFundosComponent } from './retirar-fundos.component';

describe('RetirarFundosComponent', () => {
  let component: RetirarFundosComponent;
  let fixture: ComponentFixture<RetirarFundosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RetirarFundosComponent]
    });
    fixture = TestBed.createComponent(RetirarFundosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
