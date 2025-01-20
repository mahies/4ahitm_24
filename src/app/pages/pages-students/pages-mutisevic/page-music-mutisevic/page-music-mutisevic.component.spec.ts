import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMusicMutisevicComponent } from './page-music-mutisevic.component';

describe('PageMusicMutisevicComponent', () => {
  let component: PageMusicMutisevicComponent;
  let fixture: ComponentFixture<PageMusicMutisevicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageMusicMutisevicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMusicMutisevicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
