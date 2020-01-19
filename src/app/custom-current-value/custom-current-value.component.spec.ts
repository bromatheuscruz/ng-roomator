import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCurrentValueComponent } from './custom-current-value.component';

describe('CustomCurrentValueComponent', () => {
  let component: CustomCurrentValueComponent;
  let fixture: ComponentFixture<CustomCurrentValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomCurrentValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomCurrentValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
