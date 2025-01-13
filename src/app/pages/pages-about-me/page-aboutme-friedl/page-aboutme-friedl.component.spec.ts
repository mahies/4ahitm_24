import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAboutmeFriedlComponent } from './page-aboutme-friedl.component';

describe('PageAboutmeFriedlComponent', () => {
  let component: PageAboutmeFriedlComponent;
  let fixture: ComponentFixture<PageAboutmeFriedlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAboutmeFriedlComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PageAboutmeFriedlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
