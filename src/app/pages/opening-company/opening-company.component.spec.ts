import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpeningCompanyComponent } from './opening-company.component';

describe('OpeningCompanyComponent', () => {
  let component: OpeningCompanyComponent;
  let fixture: ComponentFixture<OpeningCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OpeningCompanyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OpeningCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
