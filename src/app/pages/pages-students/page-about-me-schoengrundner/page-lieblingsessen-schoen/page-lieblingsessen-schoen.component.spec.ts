import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLieblingsessenSchoenComponent } from './page-lieblingsessen-schoen.component';

describe('PageLieblingsessenSchoenComponent', () => {
  let component: PageLieblingsessenSchoenComponent;
  let fixture: ComponentFixture<PageLieblingsessenSchoenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageLieblingsessenSchoenComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PageLieblingsessenSchoenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

