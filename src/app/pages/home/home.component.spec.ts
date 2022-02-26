import { render } from '@testing-library/angular';
import { HomeComponent } from './home.component';

describe('ValidatorNodesComponent', () => {
  beforeEach(async () => {
    await render(HomeComponent);
  });

  // Note: This is dummy test. This can be removed.
  it('should render nothing', () => {
    expect(true).toBeTruthy();
  });
});
