/**
 * TDEI Gateway API
 * This is an API for publishing data to the Transportation Data Equity Initiative (TDEI) data system. This API is intended for applications producing data for and consuming data from the TDEI system. This API supports publishing of GTFS-Pathways, GTFS-Flex v2 and OpenSidewalks data to the TDEI.
 *
 * OpenAPI spec version: v0.1
 * Contact: placeholder_support@transequity.cs.washington.edu
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { LoginModel } from '../models';
import { TokenResponse } from '../models';
/**
 * AuthenticationApi - axios parameter creator
 * @export
 */
export declare const AuthenticationApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Authenticates the user to the TDEI system. Returns access token.
     * @summary Authenticates the user to the TDEI system.
     * @param {LoginModel} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authenticate: (body: LoginModel, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Re-issues access token provided the valid refresh token
     * @summary Re-issue access token
     * @param {string} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    refreshToken: (body: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * AuthenticationApi - functional programming interface
 * @export
 */
export declare const AuthenticationApiFp: (configuration?: Configuration) => {
    /**
     * Authenticates the user to the TDEI system. Returns access token.
     * @summary Authenticates the user to the TDEI system.
     * @param {LoginModel} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authenticate(body: LoginModel, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<TokenResponse>>>;
    /**
     * Re-issues access token provided the valid refresh token
     * @summary Re-issue access token
     * @param {string} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    refreshToken(body: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<TokenResponse>>>;
};
/**
 * AuthenticationApi - factory interface
 * @export
 */
export declare const AuthenticationApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Authenticates the user to the TDEI system. Returns access token.
     * @summary Authenticates the user to the TDEI system.
     * @param {LoginModel} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authenticate(body: LoginModel, options?: AxiosRequestConfig): Promise<AxiosResponse<TokenResponse>>;
    /**
     * Re-issues access token provided the valid refresh token
     * @summary Re-issue access token
     * @param {string} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    refreshToken(body: string, options?: AxiosRequestConfig): Promise<AxiosResponse<TokenResponse>>;
};
/**
 * AuthenticationApi - object-oriented interface
 * @export
 * @class AuthenticationApi
 * @extends {BaseAPI}
 */
export declare class AuthenticationApi extends BaseAPI {
    /**
     * Authenticates the user to the TDEI system. Returns access token.
     * @summary Authenticates the user to the TDEI system.
     * @param {LoginModel} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApi
     */
    authenticate(body: LoginModel, options?: AxiosRequestConfig): Promise<AxiosResponse<TokenResponse>>;
    /**
     * Re-issues access token provided the valid refresh token
     * @summary Re-issue access token
     * @param {string} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApi
     */
    refreshToken(body: string, options?: AxiosRequestConfig): Promise<AxiosResponse<TokenResponse>>;
}