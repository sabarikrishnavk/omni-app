import { Module } from '@nestjs/common'; 
import { GraphQLGatewayModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLGatewayModule.forRoot({
      server: {
        // ... Apollo server options
        cors: true,
      },
      gateway: {
        serviceList: [
          { name: 'product', url: 'http://localhost:4001/graphql' },
          { name: 'inventory', url: 'http://localhost:4002/graphql' },
        ],
      },
    }),
  ],
})
export class AppModule {}
