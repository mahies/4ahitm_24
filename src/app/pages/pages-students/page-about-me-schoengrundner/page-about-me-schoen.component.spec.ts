import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAboutMeSCHOENComponent } from './page-about-me-schoen.component';

describe('PageAboutMeSCHOENComponent', () => {
  let component: PageAboutMeSCHOENComponent;
  let fixture: ComponentFixture<PageAboutMeSCHOENComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAboutMeSCHOENComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAboutMeSCHOENComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
