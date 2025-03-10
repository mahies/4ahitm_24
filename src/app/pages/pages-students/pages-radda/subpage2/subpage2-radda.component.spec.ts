import { ComponentFixture, TestBed } from '@angular/core/testing';

import { 'MainpageRADDAComponent'} from  './mainpage-radda.component';

describe('MainpageRADDAComponent', () => {
  let component: MainpageRADDAComponent;
  let fixture: ComponentFixture<MainpageRADDAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainpageRADDAComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MainpageRADDAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
