
// std
import { notStrictEqual, strictEqual } from 'assert';

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
  HttpResponseNoContent,
  IAppController,
  Post,
  readSession,
  ServiceManager,
  Store,
  UseSessions
} from '@foal/core';
import { DatabaseSession, TYPEORM_DATA_SOURCE_KEY } from '@foal/typeorm';
import { createTestDataSource, getTypeORMStorePath } from '../../../common';

describe('Feature: Destroying the session', () => {

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

  it('Example: Simple log out', async () => {

    /* ======================= DOCUMENTATION BEGIN ======================= */

    class AuthController {

      @Post('/logout')
      @UseSessions()
      async logout(ctx: Context) {
        if (ctx.session) {
          await ctx.session.destroy();
        }
        return new HttpResponseNoContent();
      }

    }

    /* ======================= DOCUMENTATION END ========================= */

    class AppController implements IAppController {
      subControllers = [
        controller('', AuthController),
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

    notStrictEqual(await readSession(store, session.getToken()), null);

    await request(app)
      .post('/logout')
      .send()
      .expect(204);

    await request(app)
      .post('/logout')
      .set('Authorization', `Bearer ${session.getToken()}`)
      .send()
      .expect(204);

    strictEqual(await readSession(store, session.getToken()), null);
  });

});
