import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAboutMeMutisevicComponent } from './page-about-me-mutisevic.component';

describe('PageAboutMeMutisevicComponent', () => {
  let component: PageAboutMeMutisevicComponent;
  let fixture: ComponentFixture<PageAboutMeMutisevicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAboutMeMutisevicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAboutMeMutisevicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
