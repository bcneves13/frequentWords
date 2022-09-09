import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/frequent -> ball (GET)', () => {
    return request(app.getHttpServer())
      .get('/frequent?paragraph=Bob hit a ball, the hit BALL flew long after it was hit.&forbidden=["hit"]')
      .expect(200)
      .expect('ball');
  });

  it('/frequent -> a (GET)', () => {
    return request(app.getHttpServer())
      .get('/frequent?paragraph=a.&forbidden=[]')
      .expect(200)
      .expect('a');
  });

});
