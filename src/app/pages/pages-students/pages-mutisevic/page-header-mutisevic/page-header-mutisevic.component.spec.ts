import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHeaderMutisevicComponent } from './page-header-mutisevic.component';

describe('HeaderCocoComponent', () => {
  let component: PageHeaderMutisevicComponent;
  let fixture: ComponentFixture<PageHeaderMutisevicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageHeaderMutisevicComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PageHeaderMutisevicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
