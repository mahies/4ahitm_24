import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHobbyMutisevicComponent } from './page-hobby-mutisevic.component';

describe('PageHobbyMutisevicComponent', () => {
  let component: PageHobbyMutisevicComponent;
  let fixture: ComponentFixture<PageHobbyMutisevicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageHobbyMutisevicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageHobbyMutisevicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
