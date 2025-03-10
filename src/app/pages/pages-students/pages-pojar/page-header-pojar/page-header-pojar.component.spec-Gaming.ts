import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHeaderPojarComponent } from './page-header-pojar.component';

describe('PageHeaderPojarComponent', () => {
  let component: PageHeaderPojarComponent;
  let fixture: ComponentFixture<PageHeaderPojarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageHeaderPojarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageHeaderPojarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
