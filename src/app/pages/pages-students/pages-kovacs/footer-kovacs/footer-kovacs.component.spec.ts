import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterKovacsComponent } from './footer-kovacs.component';

describe('FooterKovacsComponent', () => {
  let component: FooterKovacsComponent;
  let fixture: ComponentFixture<FooterKovacsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterKovacsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterKovacsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
