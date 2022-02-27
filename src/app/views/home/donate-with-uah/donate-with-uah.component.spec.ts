import { render } from '@testing-library/angular';

import { ViewDonateWithUahComponent } from './donate-with-uah.component';

describe('ViewDonateWithUahComponent', () => {
  beforeEach(async () => {
    await render(ViewDonateWithUahComponent);
  });

  // Todo: Implement more tests
  it('should render nothing', () => {
    expect(true).toBeTruthy();
  });
});
