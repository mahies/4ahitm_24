import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderHauerComponent } from './header-hauer.component';

describe('HeaderHauerComponent', () => {
  let component: HeaderHauerComponent;
  let fixture: ComponentFixture<HeaderHauerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderHauerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderHauerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
