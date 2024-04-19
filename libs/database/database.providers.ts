
import { User } from 'src/users/methods/user.entity';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5439,
        username: 'postgres',
        password: '123',
        database: 'nest',
        entities: [
          User
        ],
        synchronize: true,
      });
      return dataSource.initialize();
    },
  },
];