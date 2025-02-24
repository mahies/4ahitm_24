import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMetzComponent } from './header-metz.component';

describe('HeaderMetzComponent', () => {
  let component: HeaderMetzComponent;
  let fixture: ComponentFixture<HeaderMetzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderMetzComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderMetzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
