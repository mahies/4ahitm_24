import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGetesteteDoenerPojarComponent } from './page-getestete-doener-pojar.component';

describe('PageGetesteteDoenerPojarComponent', () => {
  let component: PageGetesteteDoenerPojarComponent;
  let fixture: ComponentFixture<PageGetesteteDoenerPojarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageGetesteteDoenerPojarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageGetesteteDoenerPojarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
