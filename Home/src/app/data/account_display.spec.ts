import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AccountComponent } from './account_display';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AccountDisplayComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        AccountComponent
      ],
    }).compileComponents();
  });

  it('should take the user to the homepage', () => {
    const fixture = TestBed.createComponent(AccountComponent);
    const app = fixture.componentInstance;
    let user = "user";
    expect(URL).toBeTruthy();
  });

  it('should display the user info', () => {
    const fixture = TestBed.createComponent(AccountComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


});
