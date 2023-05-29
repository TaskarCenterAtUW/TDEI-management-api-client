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
 * Describes a user permissions.
 * @export
 * @interface RoleDetails
 */
export interface RoleDetails {
    /**
     * Organization id to which user to be associated.
     * @type {string}
     * @memberof RoleDetails
     */
    tdei_org_id: string;
    /**
     * Username represents user uniquely in the TDEI system.  User should be already registered in the TDEI system using [POST] /user API.
     * @type {string}
     * @memberof RoleDetails
     */
    user_name: string;
    /**
     * List of roles to be assigned to the user.
     * @type {Array<string>}
     * @memberof RoleDetails
     */
    roles: Array<string>;
}
