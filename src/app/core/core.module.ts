import { CommonModule } from '@angular/common';
import {
    HttpClient,
    HttpClientModule,
    HTTP_INTERCEPTORS
} from '@angular/common/http';
import { ErrorHandler, NgModule, Optional, SkipSelf } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import {
    RouterStateSerializer,
    StoreRouterConnectingModule
} from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { environment } from '../../environments/environment';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthGuardService } from '../pages/auth/guards/auth-guard.service';
import { authLogin, authLogout } from '../pages/auth/store/actions/auth.actions';
import { AuthEffects } from '../pages/auth/store/effects/auth.effects';
import { selectAuth, selectIsAuthenticated } from '../pages/auth/store/selectors/auth.selectors';
import { AnimationsService } from './animations/animations.service';
import {
    routeAnimations,
    ROUTE_ANIMATIONS_ELEMENTS
} from './animations/route.animations';
import {
    AppState,
    metaReducers,
    reducers,
    selectRouterState
} from './core.state';
import { AppErrorHandler } from './error-handler/app-error-handler.service';
import { HttpErrorInterceptor } from './http-interceptors/http-error.interceptor';
import { LocalStorageService } from './local-storage/local-storage.service';
import { NotificationService } from './notifications/notification.service';
import { CustomSerializer } from './router/custom-serializer';
import { SettingsEffects } from './settings/settings.effects';
import {
    selectEffectiveTheme,
    selectSettingsLanguage,
    selectSettingsStickyHeader
} from './settings/settings.selectors';
import { TitleService } from './title/title.service';

export {
    TitleService,
    selectAuth,
    authLogin,
    authLogout,
    routeAnimations,
    AppState,
    LocalStorageService,
    selectIsAuthenticated,
    ROUTE_ANIMATIONS_ELEMENTS,
    AnimationsService,
    // AuthGuardService,
    selectRouterState,
    NotificationService,
    selectEffectiveTheme,
    selectSettingsLanguage,
    selectSettingsStickyHeader,
};

export function httpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(
        http,
        `${environment.i18nPrefix}/assets/i18n/`,
        '.json',
    );
}

@NgModule({
    imports: [
        // angular
        // CommonModule,
        HttpClientModule,
        // FormsModule,

        // ngrx
        StoreModule.forRoot(reducers, { metaReducers }),
        StoreRouterConnectingModule.forRoot(),
        EffectsModule.forRoot([
            AuthEffects,
            SettingsEffects,
            // GoogleAnalyticsEffects
        ]),
        environment.production
            ? []
            : StoreDevtoolsModule.instrument({
                name: 'Angular NgRx Material Starter',
            }),

        // 3rd party
        MatSnackBarModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: httpLoaderFactory,
                deps: [HttpClient],
            },
        }),
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
        { provide: ErrorHandler, useClass: AppErrorHandler },
        { provide: RouterStateSerializer, useClass: CustomSerializer },
    ],
    exports: [
        // angular
        // FormsModule,

        // 3rd party
        TranslateModule,
    ],
})
export class CoreModule {
    constructor(
        @Optional()
        @SkipSelf()
        parentModule: CoreModule,
    ) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import only in AppModule');
        }
    }
}
