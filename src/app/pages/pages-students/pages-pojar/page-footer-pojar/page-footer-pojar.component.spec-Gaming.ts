import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFooterPojarComponent } from './page-footer-pojar.component';

describe('PageFooterPojarComponent', () => {
  let component: PageFooterPojarComponent;
  let fixture: ComponentFixture<PageFooterPojarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageFooterPojarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageFooterPojarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
