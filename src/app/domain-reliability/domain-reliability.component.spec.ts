import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainReliabilityComponent } from './domain-reliability.component';

describe('DomainReliabilityComponent', () => {
  let component: DomainReliabilityComponent;
  let fixture: ComponentFixture<DomainReliabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomainReliabilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DomainReliabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
