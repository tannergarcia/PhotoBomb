import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './page_login';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LoginComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        LoginComponent
      ],
    }).compileComponents();
  });

  it('should allow user to login', () => {
    let username = "Test";
    let password = "Pass";
    
    expect(onsubmit);
    
  });

  it('should start with empty inputs', () => {
    let username;
    let password;
    expect(username);
    expect(password);
  });


});

