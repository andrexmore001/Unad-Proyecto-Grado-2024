import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainSecurityComponent } from './domain-security.component';

describe('DomainSecurityComponent', () => {
  let component: DomainSecurityComponent;
  let fixture: ComponentFixture<DomainSecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomainSecurityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DomainSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
