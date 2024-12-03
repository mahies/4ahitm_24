import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAboutMeGARCIAComponent} from './page-about-me-garcia.component';

describe('PageAboutMeGARCIAComponent', () => {
  let component: PageAboutMeGARCIAComponent;
  let fixture: ComponentFixture<PageAboutMeGARCIAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAboutMeGARCIAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAboutMeGARCIAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
