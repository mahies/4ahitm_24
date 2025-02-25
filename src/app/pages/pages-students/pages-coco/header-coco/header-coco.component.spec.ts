import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCocoComponent } from './header-coco.component';

describe('HeaderCocoComponent', () => {
  let component: HeaderCocoComponent;
  let fixture: ComponentFixture<HeaderCocoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderCocoComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HeaderCocoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
