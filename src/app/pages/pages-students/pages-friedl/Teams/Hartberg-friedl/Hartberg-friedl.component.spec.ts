import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HartbergFriedlComponent } from './Hartberg-friedl.component';

describe('HartbergFriedlComponent', () => {
  let component: HartbergFriedlComponent;
  let fixture: ComponentFixture<HartbergFriedlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HartbergFriedlComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HartbergFriedlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
