import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainCostComponent } from './domain-cost.component';

describe('DomainCostComponent', () => {
  let component: DomainCostComponent;
  let fixture: ComponentFixture<DomainCostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomainCostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DomainCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
