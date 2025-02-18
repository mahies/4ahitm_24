import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDesignCocoComponent } from './page-design-coco.component';

describe('PageMusicMutisevicComponent', () => {
  let component: PageDesignCocoComponent;
  let fixture: ComponentFixture<PageDesignCocoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageDesignCocoComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PageDesignCocoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
