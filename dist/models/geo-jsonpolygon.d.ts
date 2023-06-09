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
 * @interface GeoJSONPolygon
 */
export interface GeoJSONPolygon {
    /**
     *
     * @type {string}
     * @memberof GeoJSONPolygon
     */
    type: GeoJSONPolygonTypeEnum;
    /**
     *
     * @type {Array<Array<Array<number>>>}
     * @memberof GeoJSONPolygon
     */
    coordinates: Array<Array<Array<number>>>;
}
/**
    * @export
    * @enum {string}
    */
export declare enum GeoJSONPolygonTypeEnum {
    Polygon = "Polygon"
}
