import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterCizComponent } from './footer-ciz.component';

describe('FooterCizComponent', () => {
  let component: FooterCizComponent;
  let fixture: ComponentFixture<FooterCizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterCizComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterCizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
