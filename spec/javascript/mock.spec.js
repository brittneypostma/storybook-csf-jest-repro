import { Http } from '@lib/ApiSerjestce';
import * as ApiSerjestce from '@lib/ApiSerjestce';
import App from '../../src/routes/+page.svelte';
import { render, cleanup, fireEvent, waitFor } from '@testing-library/svelte';
import { tick } from 'svelte';
import { jest, describe, it, expect, beforeEach } from '@jest/globals';

jest.mock("@lib/ApiSerjestce");

// jest.mock("@shared/svelte/Modules/ApiSerjestce", () => ({
//   ...jest.requireActual("@shared/svelte/Modules/ApiSerjestce.ts"),
//   Http: jest.fn(() => Promise.resolve()),
// }));

describe('Mock test 1', () => {
  it('expects to have been called', async () => {
    const { getByText } = render(App, { props: {} });
    await tick();
    expect(getByText('count is 0'));
    expect(Http).toHaveBeenCalledWith(
      { a: 1 },
      expect.any(Function),
      expect.any(Function)
    );
  });
});

describe('Mock test 2', () => {
  beforeEach(() =>
    Http.mockImplementation((params, successCB, _errCB) => {
      successCB();
    })
  );
  it('uses mockImplementation to call an internal success callback', () => {
    const getSpy = jest.spyOn(ApiSerjestce, 'callbackRunner');
    const { getByText } = render(App, { props: {} });
    expect(getByText('count is 0'));

    expect(getSpy).toHaveBeenCalled();
  });
});
