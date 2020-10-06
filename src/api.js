const axios = require('axios');

// TODO: Update this when the API is given the slohacks domain
const BASE_URL = 'https://3icrnor67d.execute-api.us-west-2.amazonaws.com/prod';

const APPLICATIONS_ROUTE = 'slohacks/applications';
const PARTIAL_APPLICATIONS_ROUTE = 'slohacks/partialApplications';
// const RESUME_ROUTE = 'slohacks/resume';

export async function getApplication(userSub, accessToken) {
  const config = {
    headers: {
      Authorization: accessToken,
    },
  };

  const applicationResp = await axios.get(`${BASE_URL}/${APPLICATIONS_ROUTE}/${userSub}`, config);

  return applicationResp.data;
}

export async function postApplication(userSub, applicationBody, accessToken) {
  const config = {
    headers: {
      Authorization: accessToken,
    },
  };

  await axios.post(`${BASE_URL}/${APPLICATIONS_ROUTE}/${userSub}`, { ...applicationBody }, config);
}

export async function getPartialApplication(userSub, accessToken) {
  const config = {
    headers: {
      Authorization: accessToken,
    },
  };

  const partialApplicationResp = await axios.get(`${BASE_URL}/${PARTIAL_APPLICATIONS_ROUTE}/${userSub}`, config);

  return partialApplicationResp.data;
}

export async function postPartialApplciation(userSub, applicationBody, accessToken) {
  const config = {
    headers: {
      Authorization: accessToken,
    },
  };

  await axios.post(`${BASE_URL}/${PARTIAL_APPLICATIONS_ROUTE}/${userSub}`, { ...applicationBody }, config);
}
