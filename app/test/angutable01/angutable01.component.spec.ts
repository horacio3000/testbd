/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Angutable01Component } from './angutable01.component';

describe('Angutable01Component', () => {
  let component: Angutable01Component;
  let fixture: ComponentFixture<Angutable01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Angutable01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Angutable01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
