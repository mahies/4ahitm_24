import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFriedlComponent } from './mainpages-header-friedl.component';

describe('HeaderFriedlComponent', () => {
  let component: HeaderFriedlComponent;
  let fixture: ComponentFixture<HeaderFriedlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderFriedlComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HeaderFriedlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
