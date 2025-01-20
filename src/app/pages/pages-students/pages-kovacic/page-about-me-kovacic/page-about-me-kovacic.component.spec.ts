import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAboutMeKOVACICComponent } from './page-about-me-kovacic.component';

describe('PageAboutMeKOVACICComponent', () => {
  let component: PageAboutMeKOVACICComponent;
  let fixture: ComponentFixture<PageAboutMeKOVACICComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAboutMeKOVACICComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAboutMeKOVACICComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
