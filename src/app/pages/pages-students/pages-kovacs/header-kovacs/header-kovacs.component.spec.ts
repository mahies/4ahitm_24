import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderKovacsComponent } from './header-kovacs.component';

describe('HeaderKovacsComponent', () => {
  let component: HeaderKovacsComponent;
  let fixture: ComponentFixture<HeaderKovacsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderKovacsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderKovacsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
