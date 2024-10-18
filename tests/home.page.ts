import { Page } from '@playwright/test';

export class HomePage {
  public url = '/';
  private page: Page;
  saveButton = this.page.locator('save-button');

  constructor(page: Page) {
    this.page = page;
  }
}
