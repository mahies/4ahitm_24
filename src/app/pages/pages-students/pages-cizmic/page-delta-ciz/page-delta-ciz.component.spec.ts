import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDeltaCizComponent } from './page-delta-ciz.component';

describe('PageDeltaCizComponent', () => {
  let component: PageDeltaCizComponent;
  let fixture: ComponentFixture<PageDeltaCizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageDeltaCizComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageDeltaCizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
