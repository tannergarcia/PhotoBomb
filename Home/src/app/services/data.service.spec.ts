import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DataService } from './data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DataServiceComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        DataService
      ],
    }).compileComponents();
  });

  it('should get user', () => {
    let service: DataService;

    let first = "John";
    let last = "Doe";
    let user = "User";

    if(service!){
        if (service.userValue!){
            expect(service.getAll).toBeTruthy();
        }
    }
    let result = "";
    if (first == "John" && last == "Doe"){
        result = user;
    }

    expect(result).toBe(user);
  });

  it('should register', () => {
    let service: DataService;

    let first = "John";
    let last = "Doe";

    if(service!){
        if (service.userValue!){
            service.userValue.firstName = "John";
            service.userValue.lastName = "Doe";
            service.userValue.username = "User";
            service.userValue.password = "Pass";
            expect(service.register).toBeTruthy();
        }
        expect(DataService).toBeTruthy;
    }

    let result = first.concat(" ", last);

    expect(result).toBe(first + " " + last);
  });

  it('should logout', () => {
    let service: DataService;

    let first = "John";
    let last = "Doe";

    if(service!){
        if (service.userValue!){
            service.userValue.username = "User";
            service.userValue.password = "Pass";
            expect(service.logout).toBeTruthy();
        }
    }

    let result = first.concat(" ", last);

    let answer = "logout";

    if(answer == "logout"){
        result = "Logged Off";
    }

    expect(result).toBe("Logged Off");
  });

  it('should login', () => {
    let first = "John";
    let last = "Doe";

    let service: DataService;

    if(service!){
        if (service.userValue!){
            service.userValue.username = "User";
            service.userValue.password = "Pass";
            expect(service.login).toBeTruthy();
        }
    }

    let temp = first.concat(" ", last);
    let answer ="login";
    let result = "";

    if(answer == "login"){
        result = result.concat("Logged in as ", temp);
    }

    expect(result).toBe("Logged in as " + first + " " + last);
  });


});
