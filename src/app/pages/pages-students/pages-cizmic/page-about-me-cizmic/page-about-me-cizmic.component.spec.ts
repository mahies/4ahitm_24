import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDemoComponent } from './page-demo.component';

describe('PageAboutMeCizmicComponent', () => {
  let component: PageAboutMeCizmicComponent;
  let fixture: ComponentFixture<PageAboutMeCizmicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAboutMeCizmicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAboutMeCizmicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
