import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageReviewsKovacsComponent } from './page-reviews-kovacs.component';

describe('PageHeimatlandKovacsComponent', () => {
  let component: PageReviewsKovacsComponent;
  let fixture: ComponentFixture<PageReviewsKovacsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageReviewsKovacsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageReviewsKovacsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
