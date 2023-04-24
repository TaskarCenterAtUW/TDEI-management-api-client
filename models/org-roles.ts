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
 * User associated organizations and roles.
 * @export
 * @interface OrgRoles
 */
export interface OrgRoles {
    /**
     * 
     * @type {string}
     * @memberof OrgRoles
     */
    orgId?: string;
    /**
     * 
     * @type {string}
     * @memberof OrgRoles
     */
    orgName?: string;
    /**
     * List of roles associated with oraganization.
     * @type {Array<string>}
     * @memberof OrgRoles
     */
    roles?: Array<string>;
}
