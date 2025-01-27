import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLieblingsfotosZhouComponent } from './page-lieblingsfotos-zhou.component';

describe('PageLieblingsfotosZhouComponent', () => {
  let component: PageLieblingsfotosZhouComponent;
  let fixture: ComponentFixture<PageLieblingsfotosZhouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageLieblingsfotosZhouComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageLieblingsfotosZhouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
