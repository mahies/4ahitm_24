import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterFriedlComponent } from './mainpages-footer-friedl.component';

describe('FooterFriedlComponent', () => {
  let component: FooterFriedlComponent;
  let fixture: ComponentFixture<FooterFriedlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterFriedlComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FooterFriedlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
