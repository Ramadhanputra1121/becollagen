import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import * as basicAuth from 'express-basic-auth';

const SWAGGER_ENVS = ['local', 'dev', 'staging'];

export function configureSwaggerDocs(
  app: INestApplication,
  configService: ConfigService,
) {
  if (SWAGGER_ENVS.includes(configService.get<string>('NODE_ENV'))) {
    app.use(
      ['/docs', '/docs-json', '/docs-yaml'],
      basicAuth({
        challenge: true,
        users: {
          [configService.get<string>('SWAGGER_USER')]:
            configService.get<string>('SWAGGER_PASSWORD'),
        },
      }),
    );

    const config = new DocumentBuilder()
      .setTitle("Collagen API")
      .setDescription("Collagen is a mobile app that runs on NestJS framework. This is the API documentation created by Back-End development team.")
      .setVersion('1.0')
      .addBearerAuth()
      .addTag('auth')
      .addTag('users')
      .addTag('User', "Contains API related to user.")
      .addTag('Messaging', "Contains API related to messaging functionalities.")
      .addTag('Post', "Contains API related to post functionalities.")
      .addTag('Marketplace', "Contains API related to marketplace.")
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/docs', app, document);
  }
}
