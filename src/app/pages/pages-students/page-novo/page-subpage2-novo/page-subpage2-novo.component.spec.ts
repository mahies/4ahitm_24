import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSubpage2NovoComponent } from './page-subpage2-novo.component';

describe('PageSubpage2NovoComponent', () => {
  let component: PageSubpage2NovoComponent;
  let fixture: ComponentFixture<PageSubpage2NovoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageSubpage2NovoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageSubpage2NovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
