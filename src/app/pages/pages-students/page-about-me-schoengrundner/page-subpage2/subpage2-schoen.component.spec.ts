import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subpage2SchoenComponent } from './subpage2-schoen.component';

describe('Subpage2SchoenComponent', () => {
  let component: Subpage2SchoenComponent;
  let fixture: ComponentFixture<Subpage2SchoenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subpage2SchoenComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Subpage2SchoenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
