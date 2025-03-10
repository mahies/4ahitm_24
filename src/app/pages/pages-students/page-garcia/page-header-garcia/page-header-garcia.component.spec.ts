import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHeaderGarciaComponent } from './page-header-garcia.component';

describe('HeaderCocoComponent', () => {
  let component: PageHeaderGarciaComponent;
  let fixture: ComponentFixture<PageHeaderGarciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageHeaderGarciaComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PageHeaderGarciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
