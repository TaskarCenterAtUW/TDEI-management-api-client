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
import { POC } from './poc';
import { Polygon } from './polygon';
/**
 * Describes an Project group.
 * @export
 * @interface ProjectGroupList
 */
export interface ProjectGroupList {
    /**
     * ProjectGroupId uniquely represented in the TDEI system. System generated.
     * @type {string}
     * @memberof ProjectGroupList
     */
    tdei_project_group_id?: string;
    /**
     * Name of the project group.
     * @type {string}
     * @memberof ProjectGroupList
     */
    name?: string;
    /**
     * Phone of the project group for communication.
     * @type {string}
     * @memberof ProjectGroupList
     */
    phone?: string;
    /**
     * Url of the transit project group.
     * @type {string}
     * @memberof ProjectGroupList
     */
    url?: string;
    /**
     * Address of the transit project group.
     * @type {string}
     * @memberof ProjectGroupList
     */
    address?: string;
    /**
     *
     * @type {Polygon}
     * @memberof ProjectGroupList
     */
    polygon?: Polygon;
    /**
     * Project group POC details
     * @type {Array<POC>}
     * @memberof ProjectGroupList
     */
    poc?: Array<POC>;
}
