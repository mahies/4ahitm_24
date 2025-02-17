import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subpage1SchoenComponent } from './subpage1-schoen.component';

describe('Subpage1SchoenComponent', () => {
  let component: Subpage1SchoenComponent;
  let fixture: ComponentFixture<Subpage1SchoenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subpage1SchoenComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Subpage1SchoenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
