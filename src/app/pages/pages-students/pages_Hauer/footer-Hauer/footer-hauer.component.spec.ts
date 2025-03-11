import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterHauerComponent } from './footer-hauer.component';

describe('FooterHauerComponent', () => {
  let component: FooterHauerComponent;
  let fixture: ComponentFixture<FooterHauerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterHauerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterHauerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
