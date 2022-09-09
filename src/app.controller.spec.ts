import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "ball"', () => {
      expect(appController.mostFrequentWord({paragraph : 'Bob hit a ball, the hit BALL flew long after it was hit.', forbidden: ['hit']})).toBe('ball');
    });
  });
});
