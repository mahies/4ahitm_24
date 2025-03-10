import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFooterMutisevicComponent } from './page-footer-mutisevic.component';

describe('PageFooterMutisevicComponent', () => {
  let component: PageFooterMutisevicComponent;
  let fixture: ComponentFixture<PageFooterMutisevicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageFooterMutisevicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageFooterMutisevicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
