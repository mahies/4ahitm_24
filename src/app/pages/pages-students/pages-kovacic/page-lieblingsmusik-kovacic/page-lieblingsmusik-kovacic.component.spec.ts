import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLieblingsmusikKovacicComponent } from './page-lieblingsmusik-kovacic.component';

describe('PageLieblingsmusikKovacicComponent', () => {
  let component: PageLieblingsmusikKovacicComponent;
  let fixture: ComponentFixture<PageLieblingsmusikKovacicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageLieblingsmusikKovacicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageLieblingsmusikKovacicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
