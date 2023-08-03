/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AngutableComponent } from './angutable.component';

describe('AngutableComponent', () => {
  let component: AngutableComponent;
  let fixture: ComponentFixture<AngutableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngutableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngutableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
