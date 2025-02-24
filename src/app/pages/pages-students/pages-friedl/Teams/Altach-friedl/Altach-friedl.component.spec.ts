import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltachFriedlComponent } from './Altach-friedl.component';

describe('AltachFriedlComponent', () => {
  let component: AltachFriedlComponent;
  let fixture: ComponentFixture<AltachFriedlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AltachFriedlComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AltachFriedlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
