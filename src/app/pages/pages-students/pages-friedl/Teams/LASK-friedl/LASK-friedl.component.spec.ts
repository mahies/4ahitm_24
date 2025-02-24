import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LASKFriedlComponent } from './LASK-friedl.component';

describe('Subpage1FriedlComponent', () => {
  let component: LASKFriedlComponent;
  let fixture: ComponentFixture<LASKFriedlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LASKFriedlComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LASKFriedlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
