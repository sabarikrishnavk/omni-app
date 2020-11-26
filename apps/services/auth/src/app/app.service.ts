import { Injectable } from '@nestjs/common';
import { Login, Users } from '@omni-app/dto'; 
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AppService {
 
  constructor(private readonly jwtService: JwtService) {}

  getData(): { message: string } {
    return { message: 'Welcome to auth!' };
  }
  authenticate(login:Login):Users {
    console.log('authenticate : '+ JSON.stringify(login))

    let user = users.find(u => u.loginId === login.loginId 
      && u.password === login.password);

    if (!user) throw 'Username or password is incorrect';

    user.password=null;
    console.log('authenticate :user: '+ JSON.stringify(user))
    // create a jwt token that is valid for 7 days
    const token = this.jwtService.sign(user , { expiresIn: '7d' });

    user.token=token;
    return user; 
  } 
}
export const users = Array<Users>();
users.push({ usersId: 'USER1', role:"Registered", loginId: 'test@test.com', password: 'test', firstName: 'Test', lastName: 'User' });

export const config = {
  "secret": "THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING"
};
