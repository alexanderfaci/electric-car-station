import { Migrator } from '@mikro-orm/migrations';
import { MikroOrmModuleSyncOptions } from '@mikro-orm/nestjs';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';

const config: MikroOrmModuleSyncOptions = {
  driver: PostgreSqlDriver,
  dbName: 'charging_station',
  user: 'your_username', // Replace with your actual database username
  password: 'your_password', // Replace with your actual database password
  host: 'localhost',
  port: 5432,
  entities: ['./dist/**/*.entity.js'],
  entitiesTs: ['./src/**/*.entity.ts'],
  autoLoadEntities: false,
  // migrations: {
  //   path: './src/migrations', // The directory to store your migration files
  //   pathTs: './src/migrations', // Path to TypeScript migration files, useful in development
  //   transactional: true, // Wrap each migration in a transaction
  //   disableForeignKeys: false, // Automatically disable foreign key checks during migrations
  //   allOrNothing: true, // Run all migrations in a single transaction
  //   dropTables: true, // Allow migrations to drop tables
  //   safe: false, // Do not allow migrations to remove columns or tables
  //   emit: 'ts', // Emit migrations in TypeScript
  // },
  extensions: [Migrator],
};

export default config;
