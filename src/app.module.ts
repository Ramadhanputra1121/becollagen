import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { UsersModule } from './users/users.module';
import { ForgotPasswordModule } from './forgot-password/forgot-password.module';
import { ChangePasswordModule } from './change-password/change-password.module';
import { MailerModule } from './mailer/mailer.module';
import { ThrottlerModule } from '@nestjs/throttler';
import { UtilsModule } from './utils/utils.module';
import { UniversitiesModule } from './universities/universities.module';
import { UserModule } from './user_group/user/user.module';
import { UserBiodataModule } from './user_group/user_biodata/user_biodata.module';
import { UniversityModule } from './user_group/university/university.module';
import { MajorModule } from './user_group/major/major.module';
import { FriendListModule } from './user_group/friend_list/friend_list.module';
import { BlockListModule } from './user_group/block_list/block_list.module';
import { UserReportModule } from './user_group/user_report/user_report.module';
import { PostModule } from './post_group/post/post.module';
import { PostAttachmentModule } from './post_group/post_attachment/post_attachment.module';
import { PostReactionModule } from './post_group/post_reaction/post_reaction.module';
import { TagModule } from './tag/tag.module';
import { PostTagModule } from './post_group/post_tag/post_tag.module';
import { MessageModule } from './messaging_group/message/message.module';
import { GroupChatModule } from './messaging_group/group_chat/group_chat.module';
import { ParticipantModule } from './messaging_group/participant/participant.module';
import { MessageAttachmentModule } from './messaging_group/message_attachment/message_attachment.module';
import { ShopModule } from './marketplace_group/shop/shop.module';
import { ShopProductModule } from './marketplace_group/shop_product/shop_product.module';
import { ShopManagerModule } from './marketplace_group/shop_manager/shop_manager.module';
import { ProductAttachmentModule } from './marketplace_group/product_attachment/product_attachment.module';
import * as Yup from 'yup';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', '.env.dev', '.env.stage', '.env.prod'],
      validationSchema: Yup.object({
        TYPEORM_HOST: Yup.string().required(),
        TYPEORM_PORT: Yup.number().default(3306),
        TYPEORM_USERNAME: Yup.string().required(),
        TYPEORM_PASSWORD: Yup.string().required(),
        TYPEORM_DATABASE: Yup.string().required(),
      }),
    }),
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        ttl: config.get<number>('THROTTLE_TTL'),
        limit: config.get<number>('THROTTLE_LIMIT'),
      }),
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: config.get<string>('TYPEORM_HOST'),
        port: config.get<number>('TYPEORM_PORT'),
        username: config.get<string>('TYPEORM_USERNAME'),
        password: config.get<string>('TYPEORM_PASSWORD'),
        database: config.get<string>('TYPEORM_DATABASE'),
        synchronize: true,
        entities: ['dist/**/*.entity.js'],
        migrations: ['dist/migrations/**/*.js'],
        subscribers: ['dist/subscriber/**/*.js'],
        cli: {
          migrationsDir: config.get<string>('TYPEORM_MIGRATIONS_DIR'),
          subscribersDir: config.get<string>('TYPEORM_SUBSCRIBERS_DIR'),
        },
      }),
    }),
    LoginModule,
    RegisterModule,
    UsersModule,
    ForgotPasswordModule,
    ChangePasswordModule,
    MailerModule,
    UtilsModule,
    UniversitiesModule,
    UserModule,
    UserBiodataModule,
    UniversityModule,
    MajorModule,
    FriendListModule,
    BlockListModule,
    UserReportModule,
    PostModule,
    PostAttachmentModule,
    PostReactionModule,
    TagModule,
    PostTagModule,
    MessageModule,
    GroupChatModule,
    ParticipantModule,
    MessageAttachmentModule,
    ShopModule,
    ShopProductModule,
    ShopManagerModule,
    ProductAttachmentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
