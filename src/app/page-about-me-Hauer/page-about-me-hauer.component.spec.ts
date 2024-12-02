import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAboutMeHauerComponent} from './page-about-me-hauer.component';

describe('PageAboutMeHauerComponent', () => {
  let component: PageAboutMeHauerComponent;
  let fixture: ComponentFixture<PageAboutMeHauerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAboutMeHauerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAboutMeHauerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
