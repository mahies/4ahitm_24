import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SturmFriedlComponent } from './Sturm-friedl.component';

describe('SturmFriedlComponent', () => {
  let component: SturmFriedlComponent;
  let fixture: ComponentFixture<SturmFriedlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SturmFriedlComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SturmFriedlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
