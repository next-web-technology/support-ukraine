import { render } from '@testing-library/angular';

import { ViewKunaComponent } from './kuna.component';

describe('KunaComponent', () => {
  beforeEach(async () => {
    await render(ViewKunaComponent);
  });

  // Todo: Implement more tests.
  it('should render nothing', () => {
    expect(true).toBeTruthy();
  });
});
