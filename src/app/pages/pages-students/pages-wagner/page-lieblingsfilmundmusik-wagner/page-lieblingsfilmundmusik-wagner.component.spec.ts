import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLieblingsfilmundmusikWAGNERComponent } from './page-lieblingsfilmundmusik-wagner.component';

describe('PageLieblingsfilmundmusikWAGNERComponent', () => {
  let component: PageLieblingsfilmundmusikWAGNERComponent;
  let fixture: ComponentFixture<PageLieblingsfilmundmusikWAGNERComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageLieblingsfilmundmusikWAGNERComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageLieblingsfilmundmusikWAGNERComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
