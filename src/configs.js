const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

const appApi = path => `${REACT_APP_API_URL}/${path}`;

// API call routes
export const endpoints = version => ({});

export const REACT_APP_URL = process.env.REACT_APP_URL;

export const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

export const LINKEDIN_CLIENT_ID = process.env.REACT_APP_LINKEDIN_CLIENT_ID;

export const LINKEDIN_REDIRECT_URI =
  process.env.REACT_APP_LINKEDIN_REDIRECT_URI;

export const OFFICE365_CLIENT_ID = process.env.REACT_APP_OFFICE365_CLIENT_ID;

export const OFFICE365_REDIRECT_URI =
  process.env.REACT_APP_OFFICE365_REDIRECT_URI;

export const DEFAULT_API_KEY = process.env.REACT_APP_DEFAULT_API_KEY;

export const STRIPE_PROVIDER_API_KEY =
  process.env.REACT_APP_STRIPE_PROVIDER_API_KEY;
