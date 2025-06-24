import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactarseComponent } from './contactarse.component';

describe('ContactarseComponent', () => {
  let component: ContactarseComponent;
  let fixture: ComponentFixture<ContactarseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactarseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactarseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
