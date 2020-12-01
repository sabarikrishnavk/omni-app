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
    const namespace = "https://hasura.io/jwt/claims";
    const namespaceVal =
      {
        'x-hasura-default-role': user.role,
        // do some custom logic to decide allowed roles
        'x-hasura-allowed-roles': [user.role],
        'x-hasura-user-id': user.usersId
      };
    const payload = { username: user.loginId, usersId: user.usersId, role:user.role , "https://hasura.io/jwt/claims": namespaceVal};
    console.log('authenticate :user: '+ JSON.stringify(user))
    // create a jwt token that is valid for 7 days
    const token = this.jwtService.sign(payload , { expiresIn: '7d' });
    
    user.token=token;
    return user; 
  } 
}
export const users = Array<Users>();
users.push({ usersId: '2f512af8-3882-46b8-bd65-283e1c6cc2b8', role:"guest", loginId: 'guest@test.com', password: 'test', firstName: 'Test', lastName: 'User' });
users.push({ usersId: '7e79309c-b681-4021-bb45-2344b45cfef4', role:"registered", loginId: 'registered@test.com', password: 'test', firstName: 'Test', lastName: 'User' });
users.push({ usersId: '9e79309c-b681-4021-bb45-2344b45cfef4', role:"csradmin", loginId: 'csradmin@test.com', password: 'test', firstName: 'Test', lastName: 'User' });

 
