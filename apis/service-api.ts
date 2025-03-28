/* tslint:disable */
/* eslint-disable */
/**
 * TDEI Management API
 * Management API, describes admin & user activities in the TDEI system.
 *
 * OpenAPI spec version: v0.1
 * Contact: placeholder_support@transequity.cs.washington.edu
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { Response } from '../models';
import { Service } from '../models';
import { ServiceUpdate } from '../models';
/**
 * ServiceApi - axios parameter creator
 * @export
 */
export const ServiceApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a Service in the TDEI system.Returns the id for the newly created flex service.
         * @summary Creates a Service in the TDEI system
         * @param {Service} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createService: async (body: Service, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling createService.');
            }
            const localVarPath = `/api/v1/service`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication AuthorizationToken required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Activates/Deactives the service.
         * @summary Activates/Deactives the service.
         * @param {string} projectGroupId Owner project group id.
         * @param {string} serviceId Service Id of the service to be Activated/Deactivated.
         * @param {boolean} status Boolean flag to Activate/Deactivate service.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteService: async (projectGroupId: string, serviceId: string, status: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectGroupId' is not null or undefined
            if (projectGroupId === null || projectGroupId === undefined) {
                throw new RequiredError('projectGroupId','Required parameter projectGroupId was null or undefined when calling deleteService.');
            }
            // verify required parameter 'serviceId' is not null or undefined
            if (serviceId === null || serviceId === undefined) {
                throw new RequiredError('serviceId','Required parameter serviceId was null or undefined when calling deleteService.');
            }
            // verify required parameter 'status' is not null or undefined
            if (status === null || status === undefined) {
                throw new RequiredError('status','Required parameter status was null or undefined when calling deleteService.');
            }
            const localVarPath = `/api/v1/service/{projectGroupId}/{serviceId}/active/{status}`
                .replace(`{${"projectGroupId"}}`, encodeURIComponent(String(projectGroupId)))
                .replace(`{${"serviceId"}}`, encodeURIComponent(String(serviceId)))
                .replace(`{${"status"}}`, encodeURIComponent(String(status)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication AuthorizationToken required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Gets the Services in the TDEI system .
         * @summary Gets the Services in the TDEI system 
         * @param {string} [tdei_service_id] Search by service Id.
         * @param {string} [searchText] Search by service name.
         * @param {string} [service_type] Service type
         * @param {string} [tdei_project_group_id] Owner project group id.
         * @param {Array<number>} [bbox] A bounding box which specifies the area to be searched. A bounding box is specified by a string providing the lat/lon coordinates of the corners of the bounding box. Coordinate should be specified as west, south, east, north.
         * @param {string} [page_no] Page number to fetch
         * @param {string} [page_size] Total records to fetch.
         * @param {boolean} [show_inactive] Show inactive project groups
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getService: async (tdei_service_id?: string, searchText?: string, service_type?: string, tdei_project_group_id?: string, bbox?: Array<number>, page_no?: string, page_size?: string, show_inactive?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/service`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication AuthorizationToken required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            if (tdei_service_id !== undefined) {
                localVarQueryParameter['tdei_service_id'] = tdei_service_id;
            }

            if (searchText !== undefined) {
                localVarQueryParameter['searchText'] = searchText;
            }

            if (service_type !== undefined) {
                localVarQueryParameter['service_type'] = service_type;
            }

            if (tdei_project_group_id !== undefined) {
                localVarQueryParameter['tdei_project_group_id'] = tdei_project_group_id;
            }

            if (bbox) {
                localVarQueryParameter['bbox'] = bbox;
            }

            if (page_no !== undefined) {
                localVarQueryParameter['page_no'] = page_no;
            }

            if (page_size !== undefined) {
                localVarQueryParameter['page_size'] = page_size;
            }

            if (show_inactive !== undefined) {
                localVarQueryParameter['show_inactive'] = show_inactive;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates a Service in the TDEI system.
         * @summary Updates a Service in the TDEI system
         * @param {ServiceUpdate} body 
         * @param {string} projectGroupId Owner project group id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateService: async (body: ServiceUpdate, projectGroupId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling updateService.');
            }
            // verify required parameter 'projectGroupId' is not null or undefined
            if (projectGroupId === null || projectGroupId === undefined) {
                throw new RequiredError('projectGroupId','Required parameter projectGroupId was null or undefined when calling updateService.');
            }
            const localVarPath = `/api/v1/service/{projectGroupId}`
                .replace(`{${"projectGroupId"}}`, encodeURIComponent(String(projectGroupId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication AuthorizationToken required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ServiceApi - functional programming interface
 * @export
 */
export const ServiceApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Creates a Service in the TDEI system.Returns the id for the newly created flex service.
         * @summary Creates a Service in the TDEI system
         * @param {Service} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createService(body: Service, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Response>>> {
            const localVarAxiosArgs = await ServiceApiAxiosParamCreator(configuration).createService(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Activates/Deactives the service.
         * @summary Activates/Deactives the service.
         * @param {string} projectGroupId Owner project group id.
         * @param {string} serviceId Service Id of the service to be Activated/Deactivated.
         * @param {boolean} status Boolean flag to Activate/Deactivate service.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteService(projectGroupId: string, serviceId: string, status: boolean, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await ServiceApiAxiosParamCreator(configuration).deleteService(projectGroupId, serviceId, status, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Gets the Services in the TDEI system .
         * @summary Gets the Services in the TDEI system 
         * @param {string} [tdei_service_id] Search by service Id.
         * @param {string} [searchText] Search by service name.
         * @param {string} [service_type] Service type
         * @param {string} [tdei_project_group_id] Owner project group id.
         * @param {Array<number>} [bbox] A bounding box which specifies the area to be searched. A bounding box is specified by a string providing the lat/lon coordinates of the corners of the bounding box. Coordinate should be specified as west, south, east, north.
         * @param {string} [page_no] Page number to fetch
         * @param {string} [page_size] Total records to fetch.
         * @param {boolean} [show_inactive] Show inactive project groups
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getService(tdei_service_id?: string, searchText?: string, service_type?: string, tdei_project_group_id?: string, bbox?: Array<number>, page_no?: string, page_size?: string, show_inactive?: boolean, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<Service>>>> {
            const localVarAxiosArgs = await ServiceApiAxiosParamCreator(configuration).getService(tdei_service_id, searchText, service_type, tdei_project_group_id, bbox, page_no, page_size, show_inactive, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Updates a Service in the TDEI system.
         * @summary Updates a Service in the TDEI system
         * @param {ServiceUpdate} body 
         * @param {string} projectGroupId Owner project group id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateService(body: ServiceUpdate, projectGroupId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await ServiceApiAxiosParamCreator(configuration).updateService(body, projectGroupId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ServiceApi - factory interface
 * @export
 */
export const ServiceApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Creates a Service in the TDEI system.Returns the id for the newly created flex service.
         * @summary Creates a Service in the TDEI system
         * @param {Service} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createService(body: Service, options?: AxiosRequestConfig): Promise<AxiosResponse<Response>> {
            return ServiceApiFp(configuration).createService(body, options).then((request) => request(axios, basePath));
        },
        /**
         * Activates/Deactives the service.
         * @summary Activates/Deactives the service.
         * @param {string} projectGroupId Owner project group id.
         * @param {string} serviceId Service Id of the service to be Activated/Deactivated.
         * @param {boolean} status Boolean flag to Activate/Deactivate service.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteService(projectGroupId: string, serviceId: string, status: boolean, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return ServiceApiFp(configuration).deleteService(projectGroupId, serviceId, status, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets the Services in the TDEI system .
         * @summary Gets the Services in the TDEI system 
         * @param {string} [tdei_service_id] Search by service Id.
         * @param {string} [searchText] Search by service name.
         * @param {string} [service_type] Service type
         * @param {string} [tdei_project_group_id] Owner project group id.
         * @param {Array<number>} [bbox] A bounding box which specifies the area to be searched. A bounding box is specified by a string providing the lat/lon coordinates of the corners of the bounding box. Coordinate should be specified as west, south, east, north.
         * @param {string} [page_no] Page number to fetch
         * @param {string} [page_size] Total records to fetch.
         * @param {boolean} [show_inactive] Show inactive project groups
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getService(tdei_service_id?: string, searchText?: string, service_type?: string, tdei_project_group_id?: string, bbox?: Array<number>, page_no?: string, page_size?: string, show_inactive?: boolean, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<Service>>> {
            return ServiceApiFp(configuration).getService(tdei_service_id, searchText, service_type, tdei_project_group_id, bbox, page_no, page_size, show_inactive, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates a Service in the TDEI system.
         * @summary Updates a Service in the TDEI system
         * @param {ServiceUpdate} body 
         * @param {string} projectGroupId Owner project group id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateService(body: ServiceUpdate, projectGroupId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return ServiceApiFp(configuration).updateService(body, projectGroupId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ServiceApi - object-oriented interface
 * @export
 * @class ServiceApi
 * @extends {BaseAPI}
 */
export class ServiceApi extends BaseAPI {
    /**
     * Creates a Service in the TDEI system.Returns the id for the newly created flex service.
     * @summary Creates a Service in the TDEI system
     * @param {Service} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ServiceApi
     */
    public async createService(body: Service, options?: AxiosRequestConfig) : Promise<AxiosResponse<Response>> {
        return ServiceApiFp(this.configuration).createService(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Activates/Deactives the service.
     * @summary Activates/Deactives the service.
     * @param {string} projectGroupId Owner project group id.
     * @param {string} serviceId Service Id of the service to be Activated/Deactivated.
     * @param {boolean} status Boolean flag to Activate/Deactivate service.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ServiceApi
     */
    public async deleteService(projectGroupId: string, serviceId: string, status: boolean, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return ServiceApiFp(this.configuration).deleteService(projectGroupId, serviceId, status, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Gets the Services in the TDEI system .
     * @summary Gets the Services in the TDEI system 
     * @param {string} [tdei_service_id] Search by service Id.
     * @param {string} [searchText] Search by service name.
     * @param {string} [service_type] Service type
     * @param {string} [tdei_project_group_id] Owner project group id.
     * @param {Array<number>} [bbox] A bounding box which specifies the area to be searched. A bounding box is specified by a string providing the lat/lon coordinates of the corners of the bounding box. Coordinate should be specified as west, south, east, north.
     * @param {string} [page_no] Page number to fetch
     * @param {string} [page_size] Total records to fetch.
     * @param {boolean} [show_inactive] Show inactive project groups
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ServiceApi
     */
    public async getService(tdei_service_id?: string, searchText?: string, service_type?: string, tdei_project_group_id?: string, bbox?: Array<number>, page_no?: string, page_size?: string, show_inactive?: boolean, options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<Service>>> {
        return ServiceApiFp(this.configuration).getService(tdei_service_id, searchText, service_type, tdei_project_group_id, bbox, page_no, page_size, show_inactive, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Updates a Service in the TDEI system.
     * @summary Updates a Service in the TDEI system
     * @param {ServiceUpdate} body 
     * @param {string} projectGroupId Owner project group id.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ServiceApi
     */
    public async updateService(body: ServiceUpdate, projectGroupId: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return ServiceApiFp(this.configuration).updateService(body, projectGroupId, options).then((request) => request(this.axios, this.basePath));
    }
}
