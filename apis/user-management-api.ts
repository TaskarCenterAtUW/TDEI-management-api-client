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
import { OrgRoles } from '../models';
import { Register } from '../models';
import { RegisterResponse } from '../models';
import { Response } from '../models';
import { RoleDetails } from '../models';
import { RoleResponse } from '../models';
/**
 * UserManagementApi - axios parameter creator
 * @export
 */
export const UserManagementApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Gets the user associated organizations with roles.
         * @summary Gets the user associated organizations with roles.
         * @param {string} userId User id for which oraganizations to be fetched
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        orgRoles: async (userId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            if (userId === null || userId === undefined) {
                throw new RequiredError('userId','Required parameter userId was null or undefined when calling orgRoles.');
            }
            const localVarPath = `/api/v1/org-roles/{userId}`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
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
         * Associates a user with the organization and permissions in the TDEI system. Returns the boolean flag true.
         * @summary Associates a user with the organization and permissions in the TDEI system
         * @param {RoleDetails} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        permission: async (body: RoleDetails, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling permission.');
            }
            const localVarPath = `/api/v1/permission`;
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
         * Registers the user to the TDEI system.  Returns new User object. 
         * @summary Registers the user to the TDEI system
         * @param {Register} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        registerUser: async (body: Register, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling registerUser.');
            }
            const localVarPath = `/api/v1/register`;
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
         * Revokes the user permissions.
         * @summary Revokes the user permissions
         * @param {RoleDetails} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        revokePermission: async (body: RoleDetails, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling revokePermission.');
            }
            const localVarPath = `/api/v1/permission/revoke`;
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
        /**
         * Gets the TDEI roles. 
         * @summary Gets the TDEI roles
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        roles: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/roles`;
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
    }
};

/**
 * UserManagementApi - functional programming interface
 * @export
 */
export const UserManagementApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Gets the user associated organizations with roles.
         * @summary Gets the user associated organizations with roles.
         * @param {string} userId User id for which oraganizations to be fetched
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async orgRoles(userId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<OrgRoles>>>> {
            const localVarAxiosArgs = await UserManagementApiAxiosParamCreator(configuration).orgRoles(userId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Associates a user with the organization and permissions in the TDEI system. Returns the boolean flag true.
         * @summary Associates a user with the organization and permissions in the TDEI system
         * @param {RoleDetails} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async permission(body: RoleDetails, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Response>>> {
            const localVarAxiosArgs = await UserManagementApiAxiosParamCreator(configuration).permission(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Registers the user to the TDEI system.  Returns new User object. 
         * @summary Registers the user to the TDEI system
         * @param {Register} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async registerUser(body: Register, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<RegisterResponse>>> {
            const localVarAxiosArgs = await UserManagementApiAxiosParamCreator(configuration).registerUser(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Revokes the user permissions.
         * @summary Revokes the user permissions
         * @param {RoleDetails} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async revokePermission(body: RoleDetails, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Response>>> {
            const localVarAxiosArgs = await UserManagementApiAxiosParamCreator(configuration).revokePermission(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Gets the TDEI roles. 
         * @summary Gets the TDEI roles
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async roles(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<RoleResponse>>> {
            const localVarAxiosArgs = await UserManagementApiAxiosParamCreator(configuration).roles(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * UserManagementApi - factory interface
 * @export
 */
export const UserManagementApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Gets the user associated organizations with roles.
         * @summary Gets the user associated organizations with roles.
         * @param {string} userId User id for which oraganizations to be fetched
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async orgRoles(userId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<OrgRoles>>> {
            return UserManagementApiFp(configuration).orgRoles(userId, options).then((request) => request(axios, basePath));
        },
        /**
         * Associates a user with the organization and permissions in the TDEI system. Returns the boolean flag true.
         * @summary Associates a user with the organization and permissions in the TDEI system
         * @param {RoleDetails} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async permission(body: RoleDetails, options?: AxiosRequestConfig): Promise<AxiosResponse<Response>> {
            return UserManagementApiFp(configuration).permission(body, options).then((request) => request(axios, basePath));
        },
        /**
         * Registers the user to the TDEI system.  Returns new User object. 
         * @summary Registers the user to the TDEI system
         * @param {Register} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async registerUser(body: Register, options?: AxiosRequestConfig): Promise<AxiosResponse<RegisterResponse>> {
            return UserManagementApiFp(configuration).registerUser(body, options).then((request) => request(axios, basePath));
        },
        /**
         * Revokes the user permissions.
         * @summary Revokes the user permissions
         * @param {RoleDetails} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async revokePermission(body: RoleDetails, options?: AxiosRequestConfig): Promise<AxiosResponse<Response>> {
            return UserManagementApiFp(configuration).revokePermission(body, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets the TDEI roles. 
         * @summary Gets the TDEI roles
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async roles(options?: AxiosRequestConfig): Promise<AxiosResponse<RoleResponse>> {
            return UserManagementApiFp(configuration).roles(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UserManagementApi - object-oriented interface
 * @export
 * @class UserManagementApi
 * @extends {BaseAPI}
 */
export class UserManagementApi extends BaseAPI {
    /**
     * Gets the user associated organizations with roles.
     * @summary Gets the user associated organizations with roles.
     * @param {string} userId User id for which oraganizations to be fetched
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserManagementApi
     */
    public async orgRoles(userId: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<OrgRoles>>> {
        return UserManagementApiFp(this.configuration).orgRoles(userId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Associates a user with the organization and permissions in the TDEI system. Returns the boolean flag true.
     * @summary Associates a user with the organization and permissions in the TDEI system
     * @param {RoleDetails} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserManagementApi
     */
    public async permission(body: RoleDetails, options?: AxiosRequestConfig) : Promise<AxiosResponse<Response>> {
        return UserManagementApiFp(this.configuration).permission(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Registers the user to the TDEI system.  Returns new User object. 
     * @summary Registers the user to the TDEI system
     * @param {Register} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserManagementApi
     */
    public async registerUser(body: Register, options?: AxiosRequestConfig) : Promise<AxiosResponse<RegisterResponse>> {
        return UserManagementApiFp(this.configuration).registerUser(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Revokes the user permissions.
     * @summary Revokes the user permissions
     * @param {RoleDetails} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserManagementApi
     */
    public async revokePermission(body: RoleDetails, options?: AxiosRequestConfig) : Promise<AxiosResponse<Response>> {
        return UserManagementApiFp(this.configuration).revokePermission(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Gets the TDEI roles. 
     * @summary Gets the TDEI roles
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserManagementApi
     */
    public async roles(options?: AxiosRequestConfig) : Promise<AxiosResponse<RoleResponse>> {
        return UserManagementApiFp(this.configuration).roles(options).then((request) => request(this.axios, this.basePath));
    }
}
