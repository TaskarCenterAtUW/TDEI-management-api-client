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
 * Describes a reset credential model.
 * @export
 * @interface ResetCredentialModel
 */
export interface ResetCredentialModel {
    /**
     * User name.
     * @type {string}
     * @memberof ResetCredentialModel
     */
    username: string;
    /**
     * password
     * @type {string}
     * @memberof ResetCredentialModel
     */
    password: string;
}
