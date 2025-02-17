import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLieblingsbuecherPontComponent } from './page-lieblingsbuecher-pont.component';

describe('PageLieblingsbuecherPontComponent', () => {
  let component: PageLieblingsbuecherPontComponent;
  let fixture: ComponentFixture<PageLieblingsbuecherPontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageLieblingsbuecherPontComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageLieblingsbuecherPontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
