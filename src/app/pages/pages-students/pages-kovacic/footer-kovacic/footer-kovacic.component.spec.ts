import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterKovacicComponent } from './footer-kovacic.component';

describe('FooterKovacicComponent', () => {
  let component: FooterKovacicComponent;
  let fixture: ComponentFixture<FooterKovacicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterKovacicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterKovacicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
