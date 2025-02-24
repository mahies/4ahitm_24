import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WSGFriedlComponent } from './WSG-friedl.component';

describe('WSGFriedlComponent', () => {
  let component: WSGFriedlComponent;
  let fixture: ComponentFixture<WSGFriedlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WSGFriedlComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(WSGFriedlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
