import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLieblingsessenHauerComponent } from './page-lieblingsessen-hauer.component';

describe('PageLieblingsessenHauerComponent', () => {
  let component: PageLieblingsessenHauerComponent;
  let fixture: ComponentFixture<PageLieblingsessenHauerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageLieblingsessenHauerComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PageLieblingsessenHauerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

