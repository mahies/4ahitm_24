import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlagenfurtFriedlComponent } from './Klagenfurt-friedl.component';

describe('KlagenfurtFriedlComponent', () => {
  let component: KlagenfurtFriedlComponent;
  let fixture: ComponentFixture<KlagenfurtFriedlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KlagenfurtFriedlComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(KlagenfurtFriedlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
