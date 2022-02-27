import { render } from '@testing-library/angular';

import { ViewHeroComponent } from './hero.component';

describe('ViewHeroComponent', () => {
  beforeEach(async () => {
    await render(ViewHeroComponent);
  });

  // Todo: Implement more test
  it('should render nothing', () => {
    expect(true).toBeTruthy();
  });
});
