import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongratLabelComponent } from './congrat-label.component';

describe('CongratLabelComponent', () => {
  let component: CongratLabelComponent;
  let fixture: ComponentFixture<CongratLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CongratLabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CongratLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
