import { Injectable } from '@angular/core';
import { UrlBuilder } from '../../shared/classes/url-build';
import { QueryStringParameters } from '../../shared/classes/query-string-parameters';

import { Constants } from 'src/app/config/constants';

@Injectable()
export class ApiEndpointsService {

  constructor(
    // Application Constants
    private constants: Constants
  ) { }

  // URL
  private createUrl(
    action: string, 
    isMockAPI: boolean = false
  ): string {
    const urlBuilder: UrlBuilder = new UrlBuilder(
      isMockAPI ? this.constants.API_MOCK_ENDPOINT :   
      this.constants.API_ENDPOINT,
      action
    );
    return urlBuilder.toString();
  }
  
  // URL WITH QUERY PARAMS
  private createUrlWithQueryParameters(
    action: string, 
    queryStringHandler?: 
      (queryStringParameters: QueryStringParameters) => void
  ): string {
    const urlBuilder: UrlBuilder = new UrlBuilder(
      this.constants.API_ENDPOINT, 
      action
    );
    // Push extra query string params
    if (queryStringHandler) {
      queryStringHandler(urlBuilder.queryString);
    }
    return urlBuilder.toString();
  }
  
  // URL WITH PATH VARIABLES
  private createUrlWithPathVariables(
    action: string, 
    pathVariables: any[] = []
  ): string {
    let encodedPathVariablesUrl: string = '';
    // Push extra path variables
    for (const pathVariable of pathVariables) {
      if (pathVariable !== null) {
        encodedPathVariablesUrl +=
          `/${encodeURIComponent(pathVariable.toString())}`;
      }
    }
    const urlBuilder: UrlBuilder = new UrlBuilder(
      this.constants.API_ENDPOINT,  
      `${action}${encodedPathVariablesUrl}`
    );
    return urlBuilder.toString();
  }

  public getFieldsEndPoint(): string {
    return this.createUrl('fields');
  }

  public getMappingEndPoint(): string {
    return this.createUrl('mappings');
  }

  public getFormsEndPoint() : string {
    return this.createUrl('forms')
  }

  public getServiceRequestEndPoint() : string {
    return this.createUrl('service_requests')
  }

}