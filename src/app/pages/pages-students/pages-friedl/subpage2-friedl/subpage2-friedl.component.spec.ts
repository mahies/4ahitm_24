import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subpage2FriedlComponent } from './subpage2-friedl.component';

describe('Subpage1FriedlComponent', () => {
  let component: Subpage2FriedlComponent;
  let fixture: ComponentFixture<Subpage2FriedlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subpage2FriedlComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Subpage2FriedlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
