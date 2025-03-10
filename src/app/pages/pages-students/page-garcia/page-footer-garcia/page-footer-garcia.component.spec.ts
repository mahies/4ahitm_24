import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFooterGarciaComponent } from './page-footer-garcia.component';

describe('PageFooterGarciaComponent', () => {
  let component: PageFooterGarciaComponent;
  let fixture: ComponentFixture<PageFooterGarciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageFooterGarciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageFooterGarciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
