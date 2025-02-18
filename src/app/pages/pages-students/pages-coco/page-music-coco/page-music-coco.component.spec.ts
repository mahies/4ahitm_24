import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMusicCocoComponent } from './page-music-coco.component';

describe('PageMusicMutisevicComponent', () => {
  let component: PageMusicCocoComponent;
  let fixture: ComponentFixture<PageMusicCocoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageMusicCocoComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PageMusicCocoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
