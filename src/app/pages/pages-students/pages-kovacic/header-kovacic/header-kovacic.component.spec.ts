import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderKovacicComponent } from './header-kovacic.component';

describe('HeaderKovacicComponent', () => {
  let component: HeaderKovacicComponent;
  let fixture: ComponentFixture<HeaderKovacicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderKovacicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderKovacicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
