import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WACFriedlComponent } from './WAC-friedl.component';

describe('WACFriedlComponent', () => {
  let component: WACFriedlComponent;
  let fixture: ComponentFixture<WACFriedlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WACFriedlComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(WACFriedlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
