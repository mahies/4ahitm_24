import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subpage1FriedlComponent } from './subpage1-friedl.component';

describe('Subpage1FriedlComponent', () => {
  let component: Subpage1FriedlComponent;
  let fixture: ComponentFixture<Subpage1FriedlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subpage1FriedlComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Subpage1FriedlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
