import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalzburgFriedlComponent } from './Salzburg-friedl.component';

describe('Subpage1FriedlComponent', () => {
  let component: SalzburgFriedlComponent;
  let fixture: ComponentFixture<SalzburgFriedlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalzburgFriedlComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SalzburgFriedlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
