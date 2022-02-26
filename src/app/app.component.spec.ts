import { render, screen } from '@testing-library/angular';
import { AppComponent } from './app.component';
import { MENUS } from './models/menus/menu';

describe('AppComponent', () => {
  beforeEach(async () => {
    await render(AppComponent);
  });

  it('should render App Title Support Ukraine', async () => {
    expect(screen.getByText('Support Ukraine')).toBeTruthy();
  });

  it('should render footer title Developer Info', async () => {
    expect(screen.getByText('Developer Info')).toBeTruthy();
  });

  it('should render Company on footer', async () => {
    expect(screen.getByText('Company')).toBeTruthy();
  });

  it('should render Twitter on footer', async () => {
    expect(screen.getByText('Twitter')).toBeTruthy();
  });

  it('should render GitHub on footer', async () => {
    expect(screen.getByText('GitHub')).toBeTruthy();
  });

  it('should render navigation links on sidenav drawer and navbar horizontal menu', async () => {
    MENUS.forEach((menu) => {
      const menuElements = screen.getAllByText(menu.name);
      expect(menuElements.length).toBe(2);
    });
  });
});
