import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAboutMeKOVACSComponent } from './page-about-me-kovacs.component';

describe('PageAboutMeKOVACSComponent', () => {
  let component: PageAboutMeKOVACSComponent;
  let fixture: ComponentFixture<PageAboutMeKOVACSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAboutMeKOVACSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAboutMeKOVACSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
