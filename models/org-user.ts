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
/**
 * 
 * @export
 * @interface OrgUser
 */
export interface OrgUser {
    /**
     * 
     * @type {string}
     * @memberof OrgUser
     */
    user_id: string;
    /**
     * 
     * @type {string}
     * @memberof OrgUser
     */
    first_name: string;
    /**
     * 
     * @type {string}
     * @memberof OrgUser
     */
    last_name: string;
    /**
     * 
     * @type {string}
     * @memberof OrgUser
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof OrgUser
     */
    username: string;
    /**
     * 
     * @type {string}
     * @memberof OrgUser
     */
    phone: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof OrgUser
     */
    roles: Array<string>;
}
