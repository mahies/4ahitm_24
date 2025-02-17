import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLieblingsessenKovacicComponent } from './page-lieblingsessen-kovacic.component';

describe('PageLieblingsessenKovacicComponent', () => {
  let component: PageLieblingsessenKovacicComponent;
  let fixture: ComponentFixture<PageLieblingsessenKovacicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageLieblingsessenKovacicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageLieblingsessenKovacicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
