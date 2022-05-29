// std
import { strictEqual } from 'assert';

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
  dependency,
  HttpResponseOK,
  IAppController,
  Post,
  ServiceManager,
  Store,
  UseSessions
} from '@foal/core';
import { DatabaseSession, TYPEORM_DATA_SOURCE_KEY } from '@foal/typeorm';
import { createTestDataSource, getTypeORMStorePath } from '../../../common';

describe('Feature: Do not Auto-Create the Session when using sessions with cookies', async () => {

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

  it('Example: Simple usage.', async () => {

    let alreadyExists = true;

    /* ======================= DOCUMENTATION BEGIN ======================= */

    class ApiController {
      @dependency
      store: Store;

      @Post('/login')
      @UseSessions({ cookie: true, create: false })
      async login(ctx: Context) {
        // Check the credentials...

        // ctx.session is potentially undefined
        if (!ctx.session) {
          // Not in the documentation:
          alreadyExists = false;
          ctx.session = await createSession(this.store);
        }

        return new HttpResponseOK();
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

    const serviceManager = new ServiceManager()
      .set(TYPEORM_DATA_SOURCE_KEY, dataSource);

    const app = await createApp(AppController, { serviceManager });

    strictEqual(alreadyExists, true);

    const response = await request(app)
      .post('/api/login')
      .send()
      .expect(200);

    strictEqual(alreadyExists, false);
    strictEqual(response.get('Set-Cookie').length, 1);
  });

});
