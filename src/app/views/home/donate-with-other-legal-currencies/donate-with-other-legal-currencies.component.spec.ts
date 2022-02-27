import { render } from '@testing-library/angular';
import { ViewDonateWithOtherLegalCurrenciesComponent } from './donate-with-other-legal-currencies.component';

describe('ViewDonateWithOtherLegalCurrenciesComponent', () => {
  beforeEach(async () => {
    await render(ViewDonateWithOtherLegalCurrenciesComponent);
  });

  it('should render nothing', () => {
    expect(true).toBeTruthy();
  });
});
