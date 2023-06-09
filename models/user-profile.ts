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
 * Describes a gtfs pathways station.
 * @export
 * @interface UserProfile
 */
export interface UserProfile {
    /**
     * Id uniquely represented in the TDEI system. System generated.
     * @type {string}
     * @memberof UserProfile
     */
    id?: string;
    /**
     * First name of the user.
     * @type {string}
     * @memberof UserProfile
     */
    firstName?: string;
    /**
     * Last name of the user.
     * @type {string}
     * @memberof UserProfile
     */
    lastName?: string;
    /**
     * Email of the user.
     * @type {string}
     * @memberof UserProfile
     */
    email?: string;
    /**
     * Phone of the user.
     * @type {string}
     * @memberof UserProfile
     */
    phone?: string;
    /**
     * Api key of the user.
     * @type {string}
     * @memberof UserProfile
     */
    apiKey?: string;
}
