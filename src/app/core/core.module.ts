import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { ApiService } from './services';
import { ModuleWithProviders } from '@angular/core';
import { ApiEndpointsService } from './services/api-endpoints.service';
import { ApiHttpService } from './services/api-http.service';
import { Constants } from '../config/constants';


@NgModule({
  declarations: [
    //ApiService,
  ],
  imports: [
    CommonModule, 

  ],
  providers: [
    ApiEndpointsService,
    ApiHttpService,
    Constants,
  ]
})

export class CoreModule{
  public constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}

