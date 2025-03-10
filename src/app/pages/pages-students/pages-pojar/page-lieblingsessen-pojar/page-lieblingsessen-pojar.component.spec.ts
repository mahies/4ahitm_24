import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLieblingsessenPojarComponent } from './page-lieblingsessen-pojar.component';

describe('LieblingsessenComponent', () => {
  let component: PageLieblingsessenPojarComponent;
  let fixture: ComponentFixture<PageLieblingsessenPojarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageLieblingsessenPojarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageLieblingsessenPojarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
