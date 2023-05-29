/* tslint:disable */
/* eslint-disable */
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
import { GtfsPathwaysUpload } from './gtfs-pathways-upload';
/**
 * 
 * @export
 * @interface V1GtfspathwaysBody
 */
export interface V1GtfspathwaysBody {
    /**
     * 
     * @type {GtfsPathwaysUpload}
     * @memberof V1GtfspathwaysBody
     */
    meta: GtfsPathwaysUpload;
    /**
     * 
     * @type {Blob}
     * @memberof V1GtfspathwaysBody
     */
    file: Blob;
}
