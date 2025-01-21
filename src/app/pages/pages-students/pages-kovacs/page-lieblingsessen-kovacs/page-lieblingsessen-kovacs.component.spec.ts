import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLieblingsessenKovacsComponent } from './page-lieblingsessen-kovacs.component';

describe('PageLieblingsessenKovacsComponent', () => {
  let component: PageLieblingsessenKovacsComponent;
  let fixture: ComponentFixture<PageLieblingsessenKovacsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageLieblingsessenKovacsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageLieblingsessenKovacsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
