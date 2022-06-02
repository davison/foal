// 3p
import * as request from 'supertest';
import { DataSource } from '@foal/typeorm/node_modules/typeorm';

// FoalTS
import {
  Config,
  Context,
  controller,
  createApp,
  createSession,
  Get,
  HttpResponseNoContent,
  HttpResponseOK,
  IAppController,
  Post,
  ServiceManager,
  Store,
  UseSessions
} from '@foal/core';
import { DatabaseSession, TYPEORM_DATA_SOURCE_KEY } from '@foal/typeorm';
import { createTestDataSource, getTypeORMStorePath } from '../../../common';

describe('Feature: Saving and reading content', () => {

  let dataSource: DataSource;

  beforeEach(() => {
    Config.set('settings.session.store', getTypeORMStorePath());
  });

  afterEach(async () => {
    Config.remove('settings.session.store');
    if (dataSource) {
      await dataSource.destroy();
    }
  });

  it('Example: Usage with premium and free plans', async () => {

    /* ======================= DOCUMENTATION BEGIN ======================= */

    @UseSessions(/* ... */)
    class ApiController {

      @Post('/subscribe')
      subscribe(ctx: Context) {
        const plan = ctx.session!.get<string>('plan', 'free');
        // ...
        // Not in the documentation
        return new HttpResponseOK(plan);
      }

      @Post('/choose-premium-plan')
      choosePremimumPlan(ctx: Context) {
        ctx.session!.set('plan', 'premium');
        return new HttpResponseNoContent();
      }
    }

    /* ======================= DOCUMENTATION END ========================= */

    class AppController implements IAppController {
      subControllers = [
        controller('/api', ApiController),
      ];
    }

    dataSource = await createTestDataSource([ DatabaseSession ]);
    await dataSource.initialize();

    const services = new ServiceManager()
      .set(TYPEORM_DATA_SOURCE_KEY, dataSource);

    const app = await createApp(AppController, { serviceManager: services });
    const store = services.get(Store);

    const session = await createSession(store);
    await session.commit();

    await request(app)
      .post('/api/subscribe')
      .set('Authorization', `Bearer ${session.getToken()}`)
      .send()
      .expect(200)
      .expect('free');

    await request(app)
      .post('/api/choose-premium-plan')
      .set('Authorization', `Bearer ${session.getToken()}`)
      .send()
      .expect(204);

    await request(app)
      .post('/api/subscribe')
      .set('Authorization', `Bearer ${session.getToken()}`)
      .send()
      .expect(200)
      .expect('premium');
  });

  it('Example: Save content temporarily (flash sessions)', async () => {

    @UseSessions({ required: true })
    class AppController implements IAppController {

      @Post('/add-flash-content')
      addFlashContent(ctx: Context) {
        /* ======================= DOCUMENTATION BEGIN ======================= */
        ctx.session!.set('error', 'Incorrect email or password', { flash: true });
        /* ======================= DOCUMENTATION END ========================= */

        return new HttpResponseOK();
      }

      @Get('/read-flash-content')
      readFlashContent(ctx: Context) {
        return new HttpResponseOK(
          ctx.session!.get<string>('error', 'No error')
        );
      }
    }

    dataSource = await createTestDataSource([ DatabaseSession ]);
    await dataSource.initialize();

    const services = new ServiceManager()
      .set(TYPEORM_DATA_SOURCE_KEY, dataSource);

    const app = await createApp(AppController, { serviceManager: services });
    const store = services.get(Store);

    const session = await createSession(store);
    await session.commit();

    await request(app)
      .get('/read-flash-content')
      .set('Authorization', `Bearer ${session.getToken()}`)
      .expect(200)
      .expect('No error');

    await request(app)
      .post('/add-flash-content')
      .set('Authorization', `Bearer ${session.getToken()}`)
      .send()
      .expect(200);

    await request(app)
      .get('/read-flash-content')
      .set('Authorization', `Bearer ${session.getToken()}`)
      .expect(200)
      .expect('Incorrect email or password');

    await request(app)
      .get('/read-flash-content')
      .set('Authorization', `Bearer ${session.getToken()}`)
      .expect(200)
      .expect('No error');
  });

});
