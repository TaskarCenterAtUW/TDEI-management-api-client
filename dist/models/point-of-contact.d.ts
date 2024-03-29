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
 * Describes a point of contact details.
 * @export
 * @interface PointOfContact
 */
export interface PointOfContact {
    /**
     * Project group id to which point of contact to be associated.
     * @type {string}
     * @memberof PointOfContact
     */
    tdei_project_group_id?: string;
    /**
     * Point of contact username. Username represents user uniquely in the TDEI system. User should be already registered in the TDEI system using [POST] /user API.
     * @type {string}
     * @memberof PointOfContact
     */
    poc_user_name: string;
}
