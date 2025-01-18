import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAboutmeNovoComponent } from './page-aboutme-novo.component';

describe('PageAboutmeNovoComponent', () => {
  let component: PageAboutmeNovoComponent;
  let fixture: ComponentFixture<PageAboutmeNovoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAboutmeNovoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAboutmeNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
