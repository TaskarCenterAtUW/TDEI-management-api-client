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
import { Polygon } from './polygon';
/**
 * Describes an Project Group.
 * @export
 * @interface ProjectGroup
 */
export interface ProjectGroup {
    /**
     * Project group Id uniquely represented in the TDEI system. System generated.
     * @type {string}
     * @memberof ProjectGroup
     */
    tdei_project_group_id?: string;
    /**
     * Name of the project group.
     * @type {string}
     * @memberof ProjectGroup
     */
    project_group_name: string;
    /**
     * Phone of the project group for communication.
     * @type {string}
     * @memberof ProjectGroup
     */
    phone?: string;
    /**
     * Url of the transit project group.
     * @type {string}
     * @memberof ProjectGroup
     */
    url?: string;
    /**
     * Address of the transit project group.
     * @type {string}
     * @memberof ProjectGroup
     */
    address: string;
    /**
     *
     * @type {Polygon}
     * @memberof ProjectGroup
     */
    polygon?: Polygon;
}