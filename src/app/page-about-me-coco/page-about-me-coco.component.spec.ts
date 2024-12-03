import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAboutMeCOCOComponent } from './page-about-me-coco.component';

describe('PageAboutMeCOCOomponent', () => {
  let component: PageAboutMeCOCOComponent;
  let fixture: ComponentFixture<PageAboutMeCOCOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAboutMeCOCOComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PageAboutMeCOCOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
