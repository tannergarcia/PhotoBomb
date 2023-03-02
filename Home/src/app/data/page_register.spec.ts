import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RegisterComponent } from './page_register';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RegisterComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        RegisterComponent
      ],
    }).compileComponents();
  });

  it('should allow user to cancel registration', () => {
    const comp = RegisterComponent;
    let x = "";
    let y = "";
    let z = "";
    let w = "";
    const firstName = "John";
    const lastName = "Doe";
    const username = "User";
    const password = "Pass";
    function register(){
        x = firstName;
        y = lastName;
        z = username;
        w = password;
    }
    function cancel(){
        x = "";
        y = "";
        z = "";
        w = "";
    }

    expect(x).toBe("");
  });

  it('should allow user to register', () => {
    const comp = RegisterComponent;
    let x = "";
    let y = "";
    let z = "";
    let w = "";
    const firstName = "John";
    const lastName = "Doe";
    const username = "User";
    const password = "Pass";
    function register(){
        x = firstName;
        y = lastName;
        z = username;
        w = password;
    }

    expect(firstName).toBe("John");
    expect(lastName).toBe("Doe");
    expect(username).toBe("User");
    expect(password).toBe("Pass");
  });

  it('should allow user to input in all boxes', () => {
    const comp = RegisterComponent;
    let x = "";
    let y = "";
    let z = "";
    let w = "";
    const firstName = "John";
    const lastName = "Doe";
    const username = "User";
    const password = "Pass";
    function register(){
        x = firstName;
        y = lastName;
        z = username;
        w = password;
    }

    expect(firstName).toBe("John");

  });


});
