import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSubpage1NovoComponent } from './page-subpage1-novo.component';

describe('PageSubpage1NovoComponent', () => {
  let component: PageSubpage1NovoComponent;
  let fixture: ComponentFixture<PageSubpage1NovoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageSubpage1NovoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageSubpage1NovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
