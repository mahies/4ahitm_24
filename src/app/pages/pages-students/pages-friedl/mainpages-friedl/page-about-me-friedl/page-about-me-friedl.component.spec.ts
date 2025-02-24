import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAboutFriedlComponent } from './page-about-me-friedl.component';

describe('PageAboutFriedlComponent', () => {
  let component: PageAboutFriedlComponent;
  let fixture: ComponentFixture<PageAboutFriedlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAboutFriedlComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PageAboutFriedlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
