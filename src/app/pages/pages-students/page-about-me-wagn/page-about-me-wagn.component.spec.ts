import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAboutMeWAGNComponent } from './page-about-me-wagn.component';

describe('PageAboutMeWAGNComponent', () => {
  let component: PageAboutMeWAGNComponent;
  let fixture: ComponentFixture<PageAboutMeWAGNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAboutMeWAGNComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAboutMeWAGNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
