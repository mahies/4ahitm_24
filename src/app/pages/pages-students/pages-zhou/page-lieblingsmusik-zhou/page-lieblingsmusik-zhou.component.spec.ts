import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLieblingsmusikZhouComponent } from './page-lieblingsmusik-zhou.component';

describe('PageLieblingsmusikZhouComponent', () => {
  let component: PageLieblingsmusikZhouComponent;
  let fixture: ComponentFixture<PageLieblingsmusikZhouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageLieblingsmusikZhouComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageLieblingsmusikZhouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
