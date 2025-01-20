import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageReviewsMetzComponent } from './page-reviews-metz.component';

describe('PageReviewsMetzComponent', () => {
  let component: PageReviewsMetzComponent;
  let fixture: ComponentFixture<PageReviewsMetzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageReviewsMetzComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageReviewsMetzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
