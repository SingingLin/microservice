import axios from 'axios';

// baseUrl
// const baseURL = 'https://de5994fc-1923-4700-bd27-a18fead97f22.mock.pstmn.io';
// export const baseURL = 'http://192.168.130.20:8000';
// export const baseURL = 'http://192.168.100.117:8000';
export const baseURL = '';

// services相關的 api
const servicesRequest = axios.create({
  baseURL: baseURL + '/services'
});
// deployment相關的 api
const deploymentRequest = axios.create({
  baseURL: baseURL + '/deployment'
});
// file upload相關的 api
const filesRequest = axios.create({
  baseURL: 'http://localhost:8080/uploads/upload1'
});

// services相關的 api
export const apiGetServices = () => servicesRequest.get('/');
// data: { "startTime": "1571184000", "endTime": "1571616000", "interval": "86400s" }
export const apiGetSpecificService = (serviceId, data) => servicesRequest.get(`/${serviceId}`, data);
// data: { "status": "OUT_OF_SERVICE" }
export const apiChangeInstanceStatus = (serviceId, instanceId, data) => servicesRequest.put(`/${serviceId}/${instanceId}`, data);

// deployment相關的 api
// data: { "serviceId": 4 }
export const apiGetServiceRecords = data => deploymentRequest.get('/', data);
// data: [ { "serviceId": 2, "deploymentId": 2, "strategy": "default", "instancesCount": "3", "port": "8520,8521,8522" }, ]
export const apiDeployService = data => deploymentRequest.post('/', data);

/**
 * file upload相關的 api
 * @param {*} form 
 * @param {*} config 
 * var config = {
        cancelToken: new CancelToken((c) => {
          this.cancel.push(c);
        }),
        onUploadProgress: myUploadProgress(files[index])
      };
 */
export const apiUploadFileService = (form, config) => filesRequest.post('/', form, config);
// export const apiUploadFileService = (form) => filesRequest.post('/');
