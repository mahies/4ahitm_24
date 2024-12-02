import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAboutMeMajzelComponent } from './page-about-me-majzel.component';

describe('PageAboutMeMajzelComponent', () => {
  let component: PageAboutMeMajzelComponent;
  let fixture: ComponentFixture<PageAboutMeMajzelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAboutMeMajzelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAboutMeMajzelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
