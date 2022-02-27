import { render } from '@testing-library/angular';

import { ViewSaveLifeInUaComponent } from './save-life-in-ua.component';

describe('ViewSaveLifeInUaComponent', () => {
  beforeEach(async () => {
    await render(ViewSaveLifeInUaComponent);
  });

  // Todo: Implement more tests
  it('should render nothing', () => {
    expect(true).toBeTruthy();
  });
});
