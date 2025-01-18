import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAboutMePONTComponent } from './page-about-me-pont.component';

describe('PageAboutMePONTComponent', () => {
  let component: PageAboutMePONTComponent;
  let fixture: ComponentFixture<PageAboutMePONTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAboutMePONTComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAboutMePONTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
