import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAboutmeHobelComponent } from './page-aboutme-hobel.component';

describe('PageAboutmeHobelComponent', () => {
  let component: PageAboutmeHobelComponent;
  let fixture: ComponentFixture<PageAboutmeHobelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAboutmeHobelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAboutmeHobelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
