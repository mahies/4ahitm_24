import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCizComponent } from './header-ciz.component';

describe('HeaderCizComponent', () => {
  let component: HeaderCizComponent;
  let fixture: ComponentFixture<HeaderCizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderCizComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderCizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
