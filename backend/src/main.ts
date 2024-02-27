import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Load environment variables
import 'dotenv/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Setup global validation pipe
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,                 // Only allow validated properties
    transform: true,                 // Transform payloads to DTO instances
    forbidNonWhitelisted: true,      // Disallow non-whitelisted properties
  }));

  // Enable CORS for your Vue frontend
  app.enableCors({
    origin: 'http://localhost:8080', // Allow requests from the Vue app origin
    methods: 'GET,POST,PUT,DELETE',  // Optionally restrict to certain methods
    allowedHeaders: 'Content-Type,Authorization', // Optionally restrict headers
  });

  // Start the application
  await app.listen(process.env.PORT || 3000); // Use port from .env or default to 3000
}

bootstrap();

