import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAboutMeCocoComponent } from './page-about-me-coco.component.scss';

describe('PageAboutMeCocoComponent', () => {
  let component: PageAboutMeCocoComponent;
  let fixture: ComponentFixture<PageAboutMeCocoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAboutMeCocoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAboutMeCocoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
