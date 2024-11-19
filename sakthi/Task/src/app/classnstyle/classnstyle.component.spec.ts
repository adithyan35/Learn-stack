import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassnstyleComponent } from './classnstyle.component';

describe('ClassnstyleComponent', () => {
  let component: ClassnstyleComponent;
  let fixture: ComponentFixture<ClassnstyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClassnstyleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassnstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
