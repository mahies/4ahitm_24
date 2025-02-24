import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageVacationsGarciaComponent } from './page-vacations-garcia.component';

describe('PageVacationsGarciaComponent', () => {
  let component: PageVacationsGarciaComponent;
  let fixture: ComponentFixture<PageVacationsGarciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageVacationsGarciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageVacationsGarciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
