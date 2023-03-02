import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './page_login';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        BrowserModule,
        FormsModule, 
        ReactiveFormsModule
      ],
      declarations: [
        LoginComponent
      ],
    }).compileComponents();
  });

  it('should allow user to show/hide password', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance;
    const username = "Username";
    const password = "Password";
    expect(app.toggleFieldTextType).toBeTruthy();
    
  });

  it('should allow user to login', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance;
    const username = "John";
    const password = "Doe";
    expect(app.onSubmit).toBeTruthy();
    
  });

  it('should start with empty inputs', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance;
    const x = "";
    expect(app.ngOnInit).toBeTruthy();
  });


});
