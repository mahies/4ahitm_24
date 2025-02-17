import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BWLFriedlComponent } from './BWL-friedl.component';

describe('BWLFriedlComponent', () => {
  let component: BWLFriedlComponent;
  let fixture: ComponentFixture<BWLFriedlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BWLFriedlComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BWLFriedlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
