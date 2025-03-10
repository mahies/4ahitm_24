import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterCocoComponent } from './footer-coco.component';

describe('FooterCocoComponent', () => {
  let component: FooterCocoComponent;
  let fixture: ComponentFixture<FooterCocoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterCocoComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FooterCocoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
