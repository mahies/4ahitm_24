import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FAKFriedlComponent } from './FAK-friedl.component';

describe('FAKFriedlComponent', () => {
  let component: FAKFriedlComponent;
  let fixture: ComponentFixture<FAKFriedlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FAKFriedlComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FAKFriedlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
