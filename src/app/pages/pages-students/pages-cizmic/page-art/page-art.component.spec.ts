import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageArtComponent } from './page-art.component';

describe('PageArtComponent', () => {
  let component: PageArtComponent;
  let fixture: ComponentFixture<PageArtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageArtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
