import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterMetzComponent } from './footer-metz.component';

describe('FooterMetzComponent', () => {
  let component: FooterMetzComponent;
  let fixture: ComponentFixture<FooterMetzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterMetzComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterMetzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
