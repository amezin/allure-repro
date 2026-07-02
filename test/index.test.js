const { setTimeout } = require('node:timers/promises');

describe('suite', () => {
  beforeAll(async () => {
    await setTimeout(10);
  });
  beforeEach(async () => {
    await setTimeout(10);
  });
  it('test', async () => {
    await setTimeout(10);
  });
  afterEach(async () => {
    await setTimeout(10);
  });
  afterAll(async () => {
    await setTimeout(10);
  });
});
