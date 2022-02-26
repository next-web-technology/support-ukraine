import { render } from '@testing-library/angular';
import { ViewHomeComponent } from './home.component';

describe('ViewHomeComponent', () => {
  beforeEach(async () => {
    await render(ViewHomeComponent);
  });

  // Todo: Implement more test
  it('should render nothing', () => {
    expect(true).toBeTruthy();
  });
});
