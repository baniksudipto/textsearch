import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtrieComponent } from './viewtrie.component';

describe('ViewtrieComponent', () => {
  let component: ViewtrieComponent;
  let fixture: ComponentFixture<ViewtrieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtrieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtrieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
