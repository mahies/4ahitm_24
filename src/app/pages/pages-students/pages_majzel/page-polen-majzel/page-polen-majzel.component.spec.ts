import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePolenMajzelComponent } from './page-polen-majzel.component';

describe('PagePolenMajzelComponent', () => {
  let component: PagePolenMajzelComponent;
  let fixture: ComponentFixture<PagePolenMajzelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagePolenMajzelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagePolenMajzelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
