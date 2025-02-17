import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLieblingsmusikPontComponent } from './page-lieblingsmusik-pont.component';

describe('PageLieblingsmusikPontComponent', () => {
  let component: PageLieblingsmusikPontComponent;
  let fixture: ComponentFixture<PageLieblingsmusikPontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageLieblingsmusikPontComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageLieblingsmusikPontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
