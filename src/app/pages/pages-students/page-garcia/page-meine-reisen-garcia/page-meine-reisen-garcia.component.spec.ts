import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMeineReisenGARCIAComponent } from './page-meine-reisen-garcia.component';

describe('PageMeineReisenGARCIAComponent', () => {
  let component: PageMeineReisenGARCIAComponent;
  let fixture: ComponentFixture<PageMeineReisenGARCIAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageMeineReisenGARCIAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMeineReisenGARCIAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
