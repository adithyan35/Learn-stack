import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentchangeComponent } from './contentchange.component';

describe('ContentchangeComponent', () => {
  let component: ContentchangeComponent;
  let fixture: ComponentFixture<ContentchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContentchangeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
