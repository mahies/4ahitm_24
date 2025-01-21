import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAboutMeZHOUComponent } from './page-about-me-zhou.component';

describe('PageAboutMeZHOUComponent', () => {
  let component: PageAboutMeZHOUComponent;
  let fixture: ComponentFixture<PageAboutMeZHOUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAboutMeZHOUComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAboutMeZHOUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
