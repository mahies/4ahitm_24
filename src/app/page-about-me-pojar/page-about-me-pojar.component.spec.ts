import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAboutMePOJARComponent } from './page-about-me-pojar.component';

describe('PageAboutMePOJARComponent', () => {
  let component: PageAboutMePOJARComponent;
  let fixture: ComponentFixture<PageAboutMePOJARComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAboutMePOJARComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAboutMePOJARComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
