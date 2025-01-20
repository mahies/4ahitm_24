import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAboutmeMETZComponent } from './page-aboutme-metz.component';

describe('PageAboutmeMETZComponent', () => {
  let component: PageAboutmeMETZComponent;
  let fixture: ComponentFixture<PageAboutmeMETZComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAboutmeMETZComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAboutmeMETZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
