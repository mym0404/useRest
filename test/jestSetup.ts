import { GlobalWithFetchMock } from 'jest-fetch-mock';

declare const global: any;

const customGlobal: GlobalWithFetchMock = global as GlobalWithFetchMock;
customGlobal.fetch = require('jest-fetch-mock');
customGlobal.fetch.enableMocks();
customGlobal.fetchMock = customGlobal.fetch;
