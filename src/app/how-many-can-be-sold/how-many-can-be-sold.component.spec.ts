import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowManyCanBeSoldComponent } from './how-many-can-be-sold.component';

describe('HowManyCanBeSoldComponent', () => {
  let component: HowManyCanBeSoldComponent;
  let fixture: ComponentFixture<HowManyCanBeSoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowManyCanBeSoldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowManyCanBeSoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
