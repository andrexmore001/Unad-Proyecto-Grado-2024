import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainOperationalExcellenceComponent } from './domain-operational-excellence.component';

describe('DomainOperationalExcellenceComponent', () => {
  let component: DomainOperationalExcellenceComponent;
  let fixture: ComponentFixture<DomainOperationalExcellenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomainOperationalExcellenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DomainOperationalExcellenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
