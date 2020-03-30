/// <reference path="android-declarations.d.ts"/>

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module cloud {
					export class ApiDefs {
						public static class: java.lang.Class<io.particle.android.sdk.cloud.ApiDefs>;
						public constructor();
					}
					export module ApiDefs {
						export class CloudApi {
							public static class: java.lang.Class<io.particle.android.sdk.cloud.ApiDefs.CloudApi>;
							/**
							 * Constructs a new instance of the io.particle.android.sdk.cloud.ApiDefs$CloudApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getCurrentDataUsage(param0: string): retrofit.client.Response;
								getDevices(): java.util.List<io.particle.android.sdk.cloud.Responses.Models.CompleteDevice>;
								getDevice(param0: string): io.particle.android.sdk.cloud.Responses.Models.CompleteDevice;
								nameDevice(param0: string, param1: string): retrofit.client.Response;
								flashKnownApp(param0: string, param1: string): retrofit.client.Response;
								flashFile(param0: string, param1: retrofit.mime.TypedOutput): retrofit.client.Response;
								callFunction(param0: string, param1: string, param2: io.particle.android.sdk.cloud.FunctionArgs): io.particle.android.sdk.cloud.Responses.CallFunctionResponse;
								getVariable(param0: string, param1: string): io.particle.android.sdk.cloud.Responses.ReadObjectVariableResponse;
								getIntVariable(param0: string, param1: string): io.particle.android.sdk.cloud.Responses.ReadIntVariableResponse;
								getStringVariable(param0: string, param1: string): io.particle.android.sdk.cloud.Responses.ReadStringVariableResponse;
								getDoubleVariable(param0: string, param1: string): io.particle.android.sdk.cloud.Responses.ReadDoubleVariableResponse;
								publishEvent(param0: string, param1: string, param2: boolean, param3: number): io.particle.android.sdk.cloud.Responses.SimpleResponse;
								generateClaimCode(param0: string): io.particle.android.sdk.cloud.Responses.ClaimCodeResponse;
								generateClaimCodeForOrg(param0: string, param1: java.lang.Integer): io.particle.android.sdk.cloud.Responses.ClaimCodeResponse;
								generateClaimCodeForOrg(param0: string, param1: string, param2: string): io.particle.android.sdk.cloud.Responses.ClaimCodeResponse;
								claimDevice(param0: string): io.particle.android.sdk.cloud.Responses.SimpleResponse;
								unclaimDevice(param0: string): io.particle.android.sdk.cloud.Responses.SimpleResponse;
								getNetworks(): java.util.List<io.particle.android.sdk.cloud.models.ParticleNetworkData>;
								getNetwork(param0: string): io.particle.android.sdk.cloud.models.ParticleNetworkData;
								getNetworkDevices(param0: string): java.util.List<io.particle.android.sdk.cloud.Responses.DeviceMeshMembership>;
								registerMeshNetwork(param0: string, param1: io.particle.android.sdk.cloud.ParticleNetworkType, param2: string): io.particle.android.sdk.cloud.Responses.MeshNetworkRegistrationResponse;
								registerMeshNetwork(param0: string, param1: io.particle.android.sdk.cloud.ParticleNetworkType, param2: string, param3: string): io.particle.android.sdk.cloud.Responses.MeshNetworkRegistrationResponse;
								modifyMeshNetwork(param0: string, param1: io.particle.android.sdk.cloud.models.MeshNetworkChange): retrofit.client.Response;
								removeDeviceFromAnyNetwork(param0: string): retrofit.client.Response;
								getFirmwareUpdateInfo(param0: number, param1: string, param2: string, param3: java.lang.Integer): io.particle.android.sdk.cloud.Responses.FirmwareUpdateInfoResponse;
								getPaymentCard(): io.particle.android.sdk.cloud.Responses.CardOnFileResponse;
								checkSim(param0: string): retrofit.client.Response;
								takeActionOnSim(param0: string, param1: string, param2: java.lang.Integer, param3: string): retrofit.client.Response;
								setDataLimit(param0: string, param1: number): retrofit.client.Response;
								getSim(param0: string): io.particle.android.sdk.cloud.models.ParticleSim;
								getPricingImpact(param0: string, param1: string, param2: string, param3: string, param4: string): io.particle.android.sdk.cloud.ParticlePricingInfo;
								getFullMobileSecret(param0: string, param1: string): io.particle.android.sdk.cloud.models.MobileSecretResponse;
								getDeviceIdentifiers(param0: string): io.particle.android.sdk.cloud.models.DeviceIdentifiers;
								shoutRainbows(param0: string, param1: number): retrofit.client.Response;
								pingDevice(param0: string, param1: string): io.particle.android.sdk.cloud.Responses.PingResponse;
								setDeviceNote(param0: string, param1: string): retrofit.client.Response;
							});
							public constructor();
							public getVariable(param0: string, param1: string): io.particle.android.sdk.cloud.Responses.ReadObjectVariableResponse;
							public getNetworkDevices(param0: string): java.util.List<io.particle.android.sdk.cloud.Responses.DeviceMeshMembership>;
							public checkSim(param0: string): retrofit.client.Response;
							public flashFile(param0: string, param1: retrofit.mime.TypedOutput): retrofit.client.Response;
							public getDeviceIdentifiers(param0: string): io.particle.android.sdk.cloud.models.DeviceIdentifiers;
							public generateClaimCodeForOrg(param0: string, param1: java.lang.Integer): io.particle.android.sdk.cloud.Responses.ClaimCodeResponse;
							/** @deprecated */
							public generateClaimCodeForOrg(param0: string, param1: string, param2: string): io.particle.android.sdk.cloud.Responses.ClaimCodeResponse;
							public nameDevice(param0: string, param1: string): retrofit.client.Response;
							public getDoubleVariable(param0: string, param1: string): io.particle.android.sdk.cloud.Responses.ReadDoubleVariableResponse;
							public generateClaimCode(param0: string): io.particle.android.sdk.cloud.Responses.ClaimCodeResponse;
							public getDevice(param0: string): io.particle.android.sdk.cloud.Responses.Models.CompleteDevice;
							public registerMeshNetwork(param0: string, param1: io.particle.android.sdk.cloud.ParticleNetworkType, param2: string, param3: string): io.particle.android.sdk.cloud.Responses.MeshNetworkRegistrationResponse;
							public removeDeviceFromAnyNetwork(param0: string): retrofit.client.Response;
							public getFirmwareUpdateInfo(param0: number, param1: string, param2: string, param3: java.lang.Integer): io.particle.android.sdk.cloud.Responses.FirmwareUpdateInfoResponse;
							public registerMeshNetwork(param0: string, param1: io.particle.android.sdk.cloud.ParticleNetworkType, param2: string): io.particle.android.sdk.cloud.Responses.MeshNetworkRegistrationResponse;
							public getNetworks(): java.util.List<io.particle.android.sdk.cloud.models.ParticleNetworkData>;
							public claimDevice(param0: string): io.particle.android.sdk.cloud.Responses.SimpleResponse;
							public getNetwork(param0: string): io.particle.android.sdk.cloud.models.ParticleNetworkData;
							public getDevices(): java.util.List<io.particle.android.sdk.cloud.Responses.Models.CompleteDevice>;
							public getStringVariable(param0: string, param1: string): io.particle.android.sdk.cloud.Responses.ReadStringVariableResponse;
							public getCurrentDataUsage(param0: string): retrofit.client.Response;
							public getPricingImpact(param0: string, param1: string, param2: string, param3: string, param4: string): io.particle.android.sdk.cloud.ParticlePricingInfo;
							public setDeviceNote(param0: string, param1: string): retrofit.client.Response;
							public modifyMeshNetwork(param0: string, param1: io.particle.android.sdk.cloud.models.MeshNetworkChange): retrofit.client.Response;
							public shoutRainbows(param0: string, param1: number): retrofit.client.Response;
							public flashKnownApp(param0: string, param1: string): retrofit.client.Response;
							public pingDevice(param0: string, param1: string): io.particle.android.sdk.cloud.Responses.PingResponse;
							public takeActionOnSim(param0: string, param1: string, param2: java.lang.Integer, param3: string): retrofit.client.Response;
							public publishEvent(param0: string, param1: string, param2: boolean, param3: number): io.particle.android.sdk.cloud.Responses.SimpleResponse;
							public unclaimDevice(param0: string): io.particle.android.sdk.cloud.Responses.SimpleResponse;
							public getFullMobileSecret(param0: string, param1: string): io.particle.android.sdk.cloud.models.MobileSecretResponse;
							public getSim(param0: string): io.particle.android.sdk.cloud.models.ParticleSim;
							public getIntVariable(param0: string, param1: string): io.particle.android.sdk.cloud.Responses.ReadIntVariableResponse;
							public callFunction(param0: string, param1: string, param2: io.particle.android.sdk.cloud.FunctionArgs): io.particle.android.sdk.cloud.Responses.CallFunctionResponse;
							public getPaymentCard(): io.particle.android.sdk.cloud.Responses.CardOnFileResponse;
							public setDataLimit(param0: string, param1: number): retrofit.client.Response;
						}
						export module CloudApi {
							export class DefaultImpls {
								public static class: java.lang.Class<io.particle.android.sdk.cloud.ApiDefs.CloudApi.DefaultImpls>;
							}
						}
						export class IdentityApi {
							public static class: java.lang.Class<io.particle.android.sdk.cloud.ApiDefs.IdentityApi>;
							/**
							 * Constructs a new instance of the io.particle.android.sdk.cloud.ApiDefs$IdentityApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								signUp(param0: io.particle.android.sdk.cloud.models.SignUpInfo): retrofit.client.Response;
								signUpAndLogInWithCustomer(param0: io.particle.android.sdk.cloud.models.SignUpInfo, param1: java.lang.Integer): io.particle.android.sdk.cloud.Responses.LogInResponse;
								signUpAndLogInWithCustomer(param0: io.particle.android.sdk.cloud.models.SignUpInfo, param1: string): io.particle.android.sdk.cloud.Responses.LogInResponse;
								logIn(param0: string, param1: string, param2: string): io.particle.android.sdk.cloud.Responses.LogInResponse;
								authenticate(param0: string, param1: string, param2: string): io.particle.android.sdk.cloud.Responses.LogInResponse;
								logIn(param0: string, param1: string): io.particle.android.sdk.cloud.Responses.LogInResponse;
								requestPasswordReset(param0: string): retrofit.client.Response;
							});
							public constructor();
							public signUpAndLogInWithCustomer(param0: io.particle.android.sdk.cloud.models.SignUpInfo, param1: java.lang.Integer): io.particle.android.sdk.cloud.Responses.LogInResponse;
							public logIn(param0: string, param1: string, param2: string): io.particle.android.sdk.cloud.Responses.LogInResponse;
							/** @deprecated */
							public signUpAndLogInWithCustomer(param0: io.particle.android.sdk.cloud.models.SignUpInfo, param1: string): io.particle.android.sdk.cloud.Responses.LogInResponse;
							public authenticate(param0: string, param1: string, param2: string): io.particle.android.sdk.cloud.Responses.LogInResponse;
							public logIn(param0: string, param1: string): io.particle.android.sdk.cloud.Responses.LogInResponse;
							public signUp(param0: io.particle.android.sdk.cloud.models.SignUpInfo): retrofit.client.Response;
							public requestPasswordReset(param0: string): retrofit.client.Response;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module cloud {
					export class ApiFactory {
						public static class: java.lang.Class<io.particle.android.sdk.cloud.ApiFactory>;
					}
					export module ApiFactory {
						export class OauthBasicAuthCredentialsProvider {
							public static class: java.lang.Class<io.particle.android.sdk.cloud.ApiFactory.OauthBasicAuthCredentialsProvider>;
							/**
							 * Constructs a new instance of the io.particle.android.sdk.cloud.ApiFactory$OauthBasicAuthCredentialsProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getClientId(): string;
								getClientSecret(): string;
							});
							public constructor();
							public getClientSecret(): string;
							public getClientId(): string;
						}
						export class ResourceValueBasicAuthCredentialsProvider extends io.particle.android.sdk.cloud.ApiFactory.OauthBasicAuthCredentialsProvider {
							public static class: java.lang.Class<io.particle.android.sdk.cloud.ApiFactory.ResourceValueBasicAuthCredentialsProvider>;
							public getClientSecret(): string;
							public constructor(param0: globalAndroid.content.Context, param1: number, param2: number);
							public getClientId(): string;
						}
						export class TokenGetterDelegate {
							public static class: java.lang.Class<io.particle.android.sdk.cloud.ApiFactory.TokenGetterDelegate>;
							/**
							 * Constructs a new instance of the io.particle.android.sdk.cloud.ApiFactory$TokenGetterDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getTokenValue(): string;
							});
							public constructor();
							public getTokenValue(): string;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module cloud {
					export class BroadcastContract {
						public static class: java.lang.Class<io.particle.android.sdk.cloud.BroadcastContract>;
						/**
						 * Constructs a new instance of the io.particle.android.sdk.cloud.BroadcastContract interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static BROADCAST_SYSTEM_EVENT: string;
						public static BROADCAST_DEVICES_UPDATED: string;
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module cloud {
					export class BuildConfig {
						public static class: java.lang.Class<io.particle.android.sdk.cloud.BuildConfig>;
						public static DEBUG: boolean;
						public static LIBRARY_PACKAGE_NAME: string;
						public static APPLICATION_ID: string;
						public static BUILD_TYPE: string;
						public static FLAVOR: string;
						public static VERSION_CODE: number;
						public static VERSION_NAME: string;
						public constructor();
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module cloud {
					export class DeviceState {
						public static class: java.lang.Class<io.particle.android.sdk.cloud.DeviceState>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator;
						public getLastHeard$cloudsdk_release(): java.util.Date;
						public component11$cloudsdk_release(): string;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public equals(param0: any): boolean;
						public component1$cloudsdk_release(): string;
						public getDeviceType$cloudsdk_release(): io.particle.android.sdk.cloud.ParticleDevice.ParticleDeviceType;
						public component8$cloudsdk_release(): java.lang.Boolean;
						public getImei$cloudsdk_release(): string;
						public getProductId$cloudsdk_release(): java.lang.Integer;
						public component4$cloudsdk_release(): string;
						public component22$cloudsdk_release(): string;
						public getVariables$cloudsdk_release(): java.util.Map<string,io.particle.android.sdk.cloud.ParticleDevice.VariableType>;
						public component13$cloudsdk_release(): string;
						public getSerialNumber$cloudsdk_release(): string;
						public getMobileSecret$cloudsdk_release(): string;
						public getFunctions$cloudsdk_release(): java.util.Set<string>;
						public getDeviceId$cloudsdk_release(): string;
						public getName$cloudsdk_release(): string;
						public component3$cloudsdk_release(): java.lang.Integer;
						public component2$cloudsdk_release(): java.lang.Integer;
						public toString(): string;
						public component14$cloudsdk_release(): java.util.Set<string>;
						public getSystemFirmwareVersion$cloudsdk_release(): string;
						public component19$cloudsdk_release(): string;
						public component6$cloudsdk_release(): string;
						public getCurrentBuild$cloudsdk_release(): string;
						public hashCode(): number;
						public component7$cloudsdk_release(): string;
						public component20$cloudsdk_release(): string;
						public getIpAddress$cloudsdk_release(): string;
						public copy(param0: string, param1: java.lang.Integer, param2: java.lang.Integer, param3: string, param4: string, param5: string, param6: string, param7: java.lang.Boolean, param8: java.lang.Boolean, param9: string, param10: string, param11: string, param12: string, param13: java.util.Set<string>, param14: java.util.Map<string,any>, param15: io.particle.android.sdk.cloud.ParticleDevice.ParticleDeviceType, param16: java.util.Date, param17: string, param18: string, param19: string, param20: string, param21: string): io.particle.android.sdk.cloud.DeviceState;
						public getNotes$cloudsdk_release(): string;
						public component9$cloudsdk_release(): java.lang.Boolean;
						public component18$cloudsdk_release(): string;
						public getPlatformId$cloudsdk_release(): java.lang.Integer;
						public getStatus$cloudsdk_release(): string;
						public component17$cloudsdk_release(): java.util.Date;
						public component10$cloudsdk_release(): string;
						public constructor(param0: string, param1: java.lang.Integer, param2: java.lang.Integer, param3: string, param4: string, param5: string, param6: string, param7: java.lang.Boolean, param8: java.lang.Boolean, param9: string, param10: string, param11: string, param12: string, param13: java.util.Set<string>, param14: java.util.Map<string,any>, param15: io.particle.android.sdk.cloud.ParticleDevice.ParticleDeviceType, param16: java.util.Date, param17: string, param18: string, param19: string, param20: string, param21: string);
						public describeContents(): number;
						public component16$cloudsdk_release(): io.particle.android.sdk.cloud.ParticleDevice.ParticleDeviceType;
						public component15$cloudsdk_release(): java.util.Map<string,io.particle.android.sdk.cloud.ParticleDevice.VariableType>;
						public getIccid$cloudsdk_release(): string;
						public component5$cloudsdk_release(): string;
						public getLastIccid$cloudsdk_release(): string;
						public getDefaultBuild$cloudsdk_release(): string;
						public component12$cloudsdk_release(): string;
						public getCellular$cloudsdk_release(): java.lang.Boolean;
						public getLastAppName$cloudsdk_release(): string;
						public component21$cloudsdk_release(): string;
						public isConnected$cloudsdk_release(): java.lang.Boolean;
					}
					export module DeviceState {
						export class Creator {
							public static class: java.lang.Class<io.particle.android.sdk.cloud.DeviceState.Creator>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module cloud {
					export class EventsDelegate {
						public static class: java.lang.Class<io.particle.android.sdk.cloud.EventsDelegate>;
						public static Companion: io.particle.android.sdk.cloud.EventsDelegate.Companion;
						public constructor(param0: io.particle.android.sdk.cloud.ApiDefs.CloudApi, param1: globalAndroid.net.Uri, param2: com.google.gson.Gson, param3: java.util.concurrent.ExecutorService, param4: io.particle.android.sdk.cloud.ParticleCloud);
						public subscribeToAllEvents(param0: string, param1: io.particle.android.sdk.cloud.ParticleEventHandler): number;
						public subscribeToMyDevicesEvents(param0: string, param1: io.particle.android.sdk.cloud.ParticleEventHandler): number;
						public unsubscribeFromEventWithID(param0: number): void;
						public publishEvent(param0: string, param1: string, param2: number, param3: number): void;
						public subscribeToDeviceEvents(param0: string, param1: string, param2: io.particle.android.sdk.cloud.ParticleEventHandler): number;
						public unsubscribeFromEventWithHandler(param0: io.particle.android.sdk.cloud.SimpleParticleEventHandler): void;
					}
					export module EventsDelegate {
						export class Companion {
							public static class: java.lang.Class<io.particle.android.sdk.cloud.EventsDelegate.Companion>;
						}
						export class EventApiUris {
							public static class: java.lang.Class<io.particle.android.sdk.cloud.EventsDelegate.EventApiUris>;
							public constructor(param0: globalAndroid.net.Uri);
							public buildAllEventsUri$cloudsdk_release(param0: string): globalAndroid.net.Uri;
							public buildMyDevicesEventUri$cloudsdk_release(param0: string): globalAndroid.net.Uri;
							public buildSingleDeviceEventUri$cloudsdk_release(param0: string, param1: string): globalAndroid.net.Uri;
						}
						export class EventReader {
							public static class: java.lang.Class<io.particle.android.sdk.cloud.EventsDelegate.EventReader>;
							public startListening$cloudsdk_release(): void;
							public getSseEventSource$cloudsdk_release(): org.kaazing.net.sse.SseEventSource;
							public setFuture$cloudsdk_release(param0: java.util.concurrent.Future<any>): void;
							public stopListening$cloudsdk_release(): void;
							public constructor(param0: io.particle.android.sdk.cloud.ParticleEventHandler, param1: java.util.concurrent.ExecutorService, param2: com.google.gson.Gson, param3: globalAndroid.net.Uri, param4: org.kaazing.net.sse.SseEventSourceFactory);
							public getExecutor$cloudsdk_release(): java.util.concurrent.ExecutorService;
							public getHandler$cloudsdk_release(): io.particle.android.sdk.cloud.ParticleEventHandler;
							public getFuture$cloudsdk_release(): java.util.concurrent.Future<any>;
							public getGson$cloudsdk_release(): com.google.gson.Gson;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module cloud {
					export class FunctionArgs {
						public static class: java.lang.Class<io.particle.android.sdk.cloud.FunctionArgs>;
						public params: string;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module cloud {
					export class ParticleAccessToken {
						public static class: java.lang.Class<io.particle.android.sdk.cloud.ParticleAccessToken>;
						public static fromSavedSession(): io.particle.android.sdk.cloud.ParticleAccessToken;
						public setDelegate(param0: io.particle.android.sdk.cloud.ParticleAccessToken.ParticleAccessTokenDelegate): void;
						public static fromTokenData(param0: java.util.Date, param1: string, param2: string): io.particle.android.sdk.cloud.ParticleAccessToken;
						public getRefreshToken(): string;
						public static removeSession(): void;
						public static fromNewSession(param0: io.particle.android.sdk.cloud.Responses.LogInResponse): io.particle.android.sdk.cloud.ParticleAccessToken;
						public static fromTokenData(param0: java.util.Date, param1: string): io.particle.android.sdk.cloud.ParticleAccessToken;
						public getDelegate(): io.particle.android.sdk.cloud.ParticleAccessToken.ParticleAccessTokenDelegate;
						public getAccessToken(): string;
						public finalize(): void;
					}
					export module ParticleAccessToken {
						export class ExpirationHandler {
							public static class: java.lang.Class<io.particle.android.sdk.cloud.ParticleAccessToken.ExpirationHandler>;
							public run(): void;
						}
						export class ParticleAccessTokenDelegate {
							public static class: java.lang.Class<io.particle.android.sdk.cloud.ParticleAccessToken.ParticleAccessTokenDelegate>;
							/**
							 * Constructs a new instance of the io.particle.android.sdk.cloud.ParticleAccessToken$ParticleAccessTokenDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								accessTokenExpiredAt(param0: io.particle.android.sdk.cloud.ParticleAccessToken, param1: java.util.Date): void;
							});
							public constructor();
							public accessTokenExpiredAt(param0: io.particle.android.sdk.cloud.ParticleAccessToken, param1: java.util.Date): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module cloud {
					export class ParticleCloud {
						public static class: java.lang.Class<io.particle.android.sdk.cloud.ParticleCloud>;
						public static Companion: io.particle.android.sdk.cloud.ParticleCloud.Companion;
						public constructor(param0: globalAndroid.net.Uri, param1: io.particle.android.sdk.cloud.ApiDefs.CloudApi, param2: io.particle.android.sdk.cloud.ApiDefs.IdentityApi, param3: io.particle.android.sdk.persistance.AppDataStorage, param4: androidx.localbroadcastmanager.content.LocalBroadcastManager, param5: com.google.gson.Gson, param6: java.util.concurrent.ExecutorService);
						public disableGatewayOnMeshNetwork(param0: string, param1: string): void;
						public deactivateSim(param0: string): retrofit.client.Response;
						public subscribeToMyDevicesEvents(param0: string, param1: io.particle.android.sdk.cloud.ParticleEventHandler): number;
						public checkSim(param0: string): kotlin.Pair<io.particle.android.sdk.cloud.models.ParticleSimStatus,string>;
						public registerMeshNetwork(param0: string, param1: io.particle.android.sdk.cloud.ParticleNetworkType, param2: string): io.particle.android.sdk.cloud.Responses.MeshNetworkRegistrationResponse.RegisteredNetwork;
						public getPricingImpact(param0: io.particle.android.sdk.cloud.PricingImpactAction, param1: io.particle.android.sdk.cloud.PricingImpactNetworkType, param2: string, param3: string, param4: string): io.particle.android.sdk.cloud.ParticlePricingInfo;
						public logIn(param0: string, param1: string): void;
						public getNetworks(): java.util.List<io.particle.android.sdk.cloud.ParticleNetwork>;
						public getSim(param0: string): io.particle.android.sdk.cloud.models.ParticleSim;
						public unpauseSim(param0: string, param1: number): retrofit.client.Response;
						public getLoggedInUsername(): string;
						public signUpWithUser(param0: string, param1: string): void;
						public signUpAndLogInWithCustomer(param0: string, param1: string, param2: number): void;
						public signUpAndLogInWithCustomer(param0: io.particle.android.sdk.cloud.models.SignUpInfo, param1: number): void;
						/** @deprecated */
						public generateClaimCodeForOrg(param0: string, param1: string): io.particle.android.sdk.cloud.Responses.ClaimCodeResponse;
						public signUpWithUser(param0: io.particle.android.sdk.cloud.models.SignUpInfo): void;
						/** @deprecated */
						public changeDeviceName$cloudsdk_release(param0: string, param1: string): void;
						/** @deprecated */
						public signUpAndLogInWithCustomer(param0: io.particle.android.sdk.cloud.models.SignUpInfo, param1: string): void;
						public activateSim(param0: string): retrofit.client.Response;
						public getFullMobileSecret(param0: string, param1: string): io.particle.android.sdk.cloud.models.MobileSecretResponse;
						public sendSystemEventBroadcast$cloudsdk_release(param0: io.particle.android.sdk.cloud.models.DeviceStateChange): void;
						public addDeviceToMeshNetwork(param0: string, param1: string): void;
						public getPlatformId(param0: string): io.particle.android.sdk.cloud.ParticleDevice.ParticleDeviceType;
						public getNetwork(param0: string): io.particle.android.sdk.cloud.ParticleNetwork;
						public getAccessToken(): string;
						public subscribeToDeviceEvents(param0: string, param1: string, param2: io.particle.android.sdk.cloud.ParticleEventHandler): number;
						public unclaimDevice$cloudsdk_release(param0: string): void;
						public onDeviceNotConnected$cloudsdk_release(param0: io.particle.android.sdk.cloud.DeviceState): void;
						public userOwnsDevice(param0: string): boolean;
						public getDeviceFromState$cloudsdk_release(param0: io.particle.android.sdk.cloud.DeviceState): io.particle.android.sdk.cloud.ParticleDevice;
						public removeDeviceFromAnyMeshNetwork(param0: string): void;
						public unsubscribeFromEventWithID(param0: number): void;
						public publishEvent(param0: string, param1: string, param2: number, param3: number): void;
						/** @deprecated */
						public signUpAndLogInWithCustomer(param0: string, param1: string, param2: string): void;
						public logOut(): void;
						/** @deprecated */
						public static get(param0: globalAndroid.content.Context): io.particle.android.sdk.cloud.ParticleCloud;
						public setAccessToken(param0: string): void;
						public generateClaimCode(): io.particle.android.sdk.cloud.Responses.ClaimCodeResponse;
						public enableGatewayOnMeshNetwork(param0: string, param1: string): void;
						/** @deprecated */
						public subscribeToAllEvents(param0: string, param1: io.particle.android.sdk.cloud.ParticleEventHandler): number;
						public setAccessToken(param0: string, param1: java.util.Date, param2: string): void;
						public isLoggedIn(): boolean;
						public registerMeshNetwork(param0: string, param1: io.particle.android.sdk.cloud.ParticleNetworkType, param2: string, param3: string): io.particle.android.sdk.cloud.Responses.MeshNetworkRegistrationResponse.RegisteredNetwork;
						public claimDevice(param0: string): void;
						public unsubscribeFromEventWithHandler$cloudsdk_release(param0: io.particle.android.sdk.cloud.SimpleParticleEventHandler): void;
						public getNetworkDevices(param0: string): java.util.List<io.particle.android.sdk.cloud.Responses.DeviceMeshMembership>;
						public notifyDeviceChanged$cloudsdk_release(): void;
						public getDevices(): java.util.List<io.particle.android.sdk.cloud.ParticleDevice>;
						public getFirmwareUpdateInfo(param0: number, param1: string, param2: string, param3: java.lang.Integer): java.net.URL;
						public reactivateSim(param0: string): retrofit.client.Response;
						public rename$cloudsdk_release(param0: string, param1: string): void;
						public setDataLimit(param0: string, param1: number): retrofit.client.Response;
						public getPaymentCard(): io.particle.android.sdk.cloud.Responses.CardOnFileResponse;
						public generateClaimCode(param0: number): io.particle.android.sdk.cloud.Responses.ClaimCodeResponse;
						public setAccessToken(param0: string, param1: java.util.Date): void;
						public requestPasswordReset(param0: string): void;
						public logIn(param0: string, param1: string, param2: string, param3: string): void;
						public getDevice(param0: string): io.particle.android.sdk.cloud.ParticleDevice;
					}
					export module ParticleCloud {
						export class Companion {
							public static class: java.lang.Class<io.particle.android.sdk.cloud.ParticleCloud.Companion>;
							/** @deprecated */
							public get(param0: globalAndroid.content.Context): io.particle.android.sdk.cloud.ParticleCloud;
						}
						export class TokenDelegate extends io.particle.android.sdk.cloud.ParticleAccessToken.ParticleAccessTokenDelegate {
							public static class: java.lang.Class<io.particle.android.sdk.cloud.ParticleCloud.TokenDelegate>;
							public constructor(param0: io.particle.android.sdk.cloud.ParticleCloud);
							public accessTokenExpiredAt(param0: io.particle.android.sdk.cloud.ParticleAccessToken, param1: java.util.Date): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module cloud {
					export class ParticleCloudSDK {
						public static class: java.lang.Class<io.particle.android.sdk.cloud.ParticleCloudSDK>;
						public static getCloud(): io.particle.android.sdk.cloud.ParticleCloud;
						public static initWithOauthCredentialsProvider(param0: globalAndroid.content.Context, param1: io.particle.android.sdk.cloud.ApiFactory.OauthBasicAuthCredentialsProvider): void;
						public static init(param0: globalAndroid.content.Context): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module cloud {
					export class ParticleDevice {
						public static class: java.lang.Class<io.particle.android.sdk.cloud.ParticleDevice>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<io.particle.android.sdk.cloud.ParticleDevice>;
						public static Companion: io.particle.android.sdk.cloud.ParticleDevice.Companion;
						public isRunningTinker(): boolean;
						public getVariable(param0: string): any;
						public getMobileSecret(): string;
						public getDeviceState$cloudsdk_release(): io.particle.android.sdk.cloud.DeviceState;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public equals(param0: any): boolean;
						public getDefaultBuild(): string;
						public pingDevice(): boolean;
						public subscribeToEvents(param0: string, param1: io.particle.android.sdk.cloud.ParticleEventHandler): number;
						public getCurrentDataUsage(): number;
						public unclaim(): void;
						public getIpAddress(): string;
						public getSerialNumber(): string;
						public startStopSignaling(param0: boolean): void;
						public getImei(): string;
						public flashBinaryFile(param0: java.io.File): void;
						public getCurrentBuild(): string;
						public isFlashing(): boolean;
						public getLastAppName(): string;
						public getLastHeard(): java.util.Date;
						public constructor(param0: io.particle.android.sdk.cloud.ApiDefs.CloudApi, param1: io.particle.android.sdk.cloud.ParticleCloud, param2: io.particle.android.sdk.cloud.DeviceState);
						public getStatus(): string;
						/** @deprecated */
						public requiresUpdate(): boolean;
						public refresh(): void;
						public toString(): string;
						public isCellular(): java.lang.Boolean;
						public getPlatformID(): java.lang.Integer;
						public flashCodeFile(param0: java.io.InputStream): void;
						public getNotes(): string;
						public getFunctions(): java.util.Set<string>;
						public callFunction(param0: string): number;
						public getVersion(): string;
						public getCloud(): io.particle.android.sdk.cloud.ParticleCloud;
						public getIntVariable(param0: string): number;
						public setNotes(param0: string): void;
						public callFunction(param0: string, param1: java.util.List<string>): number;
						public unsubscribeFromEvents(param0: number): void;
						public hashCode(): number;
						public isConnected(): boolean;
						public getVariables(): java.util.Map<string,io.particle.android.sdk.cloud.ParticleDevice.VariableType>;
						public getName(): string;
						public getDeviceType(): io.particle.android.sdk.cloud.ParticleDevice.ParticleDeviceType;
						public flashBinaryFile(param0: java.io.InputStream): void;
						public getId(): string;
						public getLastIccid(): string;
						public unsubscribeFromSystemEvents(): void;
						public getProductID(): java.lang.Integer;
						public subscribeToSystemEvents(): void;
						/** @deprecated */
						public getID(): string;
						public describeContents(): number;
						public flashKnownApp(param0: io.particle.android.sdk.cloud.ParticleDevice.KnownApp): void;
						public flashCodeFile(param0: java.io.File): void;
						public setName(param0: string): void;
						public setDeviceState$cloudsdk_release(param0: io.particle.android.sdk.cloud.DeviceState): void;
						public getStringVariable(param0: string): string;
						public getDoubleVariable(param0: string): number;
						public getIccid(): string;
					}
					export module ParticleDevice {
						export class Companion {
							public static class: java.lang.Class<io.particle.android.sdk.cloud.ParticleDevice.Companion>;
						}
						export class FunctionDoesNotExistException {
							public static class: java.lang.Class<io.particle.android.sdk.cloud.ParticleDevice.FunctionDoesNotExistException>;
							public constructor(param0: string);
						}
						export class KnownApp {
							public static class: java.lang.Class<io.particle.android.sdk.cloud.ParticleDevice.KnownApp>;
							public static TINKER: io.particle.android.sdk.cloud.ParticleDevice.KnownApp;
							public static valueOf(param0: string): io.particle.android.sdk.cloud.ParticleDevice.KnownApp;
							public getAppName(): string;
							public static values(): native.Array<io.particle.android.sdk.cloud.ParticleDevice.KnownApp>;
						}
						export class ParticleDeviceState {
							public static class: java.lang.Class<io.particle.android.sdk.cloud.ParticleDevice.ParticleDeviceState>;
							public static CAME_ONLINE: io.particle.android.sdk.cloud.ParticleDevice.ParticleDeviceState;
							public static FLASH_STARTED: io.particle.android.sdk.cloud.ParticleDevice.ParticleDeviceState;
							public static FLASH_SUCCEEDED: io.particle.android.sdk.cloud.ParticleDevice.ParticleDeviceState;
							public static FLASH_FAILED: io.particle.android.sdk.cloud.ParticleDevice.ParticleDeviceState;
							public static APP_HASH_UPDATED: io.particle.android.sdk.cloud.ParticleDevice.ParticleDeviceState;
							public static ENTERED_SAFE_MODE: io.particle.android.sdk.cloud.ParticleDevice.ParticleDeviceState;
							public static SAFE_MODE_UPDATER: io.particle.android.sdk.cloud.ParticleDevice.ParticleDeviceState;
							public static WENT_OFFLINE: io.particle.android.sdk.cloud.ParticleDevice.ParticleDeviceState;
							public static UNKNOWN: io.particle.android.sdk.cloud.ParticleDevice.ParticleDeviceState;
							public static valueOf(param0: string): io.particle.android.sdk.cloud.ParticleDevice.ParticleDeviceState;
							public static values(): native.Array<io.particle.android.sdk.cloud.ParticleDevice.ParticleDeviceState>;
						}
						export class ParticleDeviceType {
							public static class: java.lang.Class<io.particle.android.sdk.cloud.ParticleDevice.ParticleDeviceType>;
							public static OTHER: io.particle.android.sdk.cloud.ParticleDevice.ParticleDeviceType;
							public static CORE: io.particle.android.sdk.cloud.ParticleDevice.ParticleDeviceType;
							public static PHOTON: io.particle.android.sdk.cloud.ParticleDevice.ParticleDeviceType;
							public static P1: io.particle.android.sdk.cloud.ParticleDevice.ParticleDeviceType;
							public static RASPBERRY_PI: io.particle.android.sdk.cloud.ParticleDevice.ParticleDeviceType;
							public static RED_BEAR_DUO: io.particle.android.sdk.cloud.ParticleDevice.ParticleDeviceType;
							public static BLUZ: io.particle.android.sdk.cloud.ParticleDevice.ParticleDeviceType;
							public static DIGISTUMP_OAK: io.particle.android.sdk.cloud.ParticleDevice.ParticleDeviceType;
							public static ELECTRON: io.particle.android.sdk.cloud.ParticleDevice.ParticleDeviceType;
							public static ESP32: io.particle.android.sdk.cloud.ParticleDevice.ParticleDeviceType;
							public static ARGON: io.particle.android.sdk.cloud.ParticleDevice.ParticleDeviceType;
							public static BORON: io.particle.android.sdk.cloud.ParticleDevice.ParticleDeviceType;
							public static XENON: io.particle.android.sdk.cloud.ParticleDevice.ParticleDeviceType;
							public static A_SOM: io.particle.android.sdk.cloud.ParticleDevice.ParticleDeviceType;
							public static B_SOM: io.particle.android.sdk.cloud.ParticleDevice.ParticleDeviceType;
							public static X_SOM: io.particle.android.sdk.cloud.ParticleDevice.ParticleDeviceType;
							public static Companion: io.particle.android.sdk.cloud.ParticleDevice.ParticleDeviceType.Companion;
							public static fromInt(param0: number): io.particle.android.sdk.cloud.ParticleDevice.ParticleDeviceType;
							public static valueOf(param0: string): io.particle.android.sdk.cloud.ParticleDevice.ParticleDeviceType;
							public static values(): native.Array<io.particle.android.sdk.cloud.ParticleDevice.ParticleDeviceType>;
							public getIntValue(): number;
						}
						export module ParticleDeviceType {
							export class Companion {
								public static class: java.lang.Class<io.particle.android.sdk.cloud.ParticleDevice.ParticleDeviceType.Companion>;
								public fromInt(param0: number): io.particle.android.sdk.cloud.ParticleDevice.ParticleDeviceType;
							}
						}
						export class TypedFakeFile {
							public static class: java.lang.Class<io.particle.android.sdk.cloud.ParticleDevice.TypedFakeFile>;
							public constructor(param0: native.Array<number>);
							public fileName(): string;
							public constructor(param0: native.Array<number>, param1: string, param2: string);
							public constructor(param0: native.Array<number>, param1: string);
						}
						export class VariableDoesNotExistException {
							public static class: java.lang.Class<io.particle.android.sdk.cloud.ParticleDevice.VariableDoesNotExistException>;
							public constructor(param0: string);
						}
						export abstract class VariableRequester<T, R>  extends java.lang.Object {
							public static class: java.lang.Class<io.particle.android.sdk.cloud.ParticleDevice.VariableRequester<any,any>>;
							public callApi$cloudsdk_release(param0: string): R;
							public constructor(param0: io.particle.android.sdk.cloud.ParticleDevice);
							public getVariable$cloudsdk_release(param0: string): T;
						}
						export class VariableType {
							public static class: java.lang.Class<io.particle.android.sdk.cloud.ParticleDevice.VariableType>;
							public static INT: io.particle.android.sdk.cloud.ParticleDevice.VariableType;
							public static DOUBLE: io.particle.android.sdk.cloud.ParticleDevice.VariableType;
							public static STRING: io.particle.android.sdk.cloud.ParticleDevice.VariableType;
							public static BOOLEAN: io.particle.android.sdk.cloud.ParticleDevice.VariableType;
							public static valueOf(param0: string): io.particle.android.sdk.cloud.ParticleDevice.VariableType;
							public static values(): native.Array<io.particle.android.sdk.cloud.ParticleDevice.VariableType>;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module cloud {
					export class ParticleEvent {
						public static class: java.lang.Class<io.particle.android.sdk.cloud.ParticleEvent>;
						public getDeviceId(): string;
						public getTimeToLive(): java.lang.Integer;
						public getDataPayload(): string;
						public getPublishedAt(): java.util.Date;
						public constructor(param0: string, param1: string, param2: java.util.Date, param3: java.lang.Integer);
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module cloud {
					export class ParticleEventHandler extends io.particle.android.sdk.cloud.SimpleParticleEventHandler {
						public static class: java.lang.Class<io.particle.android.sdk.cloud.ParticleEventHandler>;
						/**
						 * Constructs a new instance of the io.particle.android.sdk.cloud.ParticleEventHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onEventError(param0: java.lang.Exception): void;
							onEvent(param0: string, param1: io.particle.android.sdk.cloud.ParticleEvent): void;
						});
						public constructor();
						public onEventError(param0: java.lang.Exception): void;
						public onEvent(param0: string, param1: io.particle.android.sdk.cloud.ParticleEvent): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module cloud {
					export class ParticleEventVisibility {
						public static class: java.lang.Class<io.particle.android.sdk.cloud.ParticleEventVisibility>;
						/**
						 * Constructs a new instance of the io.particle.android.sdk.cloud.ParticleEventVisibility interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static PUBLIC: number;
						public static PRIVATE: number;
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module cloud {
					export class ParticleNetwork {
						public static class: java.lang.Class<io.particle.android.sdk.cloud.ParticleNetwork>;
						public getNotes(): string;
						public getChannel(): java.lang.Integer;
						public getState(): io.particle.android.sdk.cloud.ParticleNetworkState;
						public getLastHeard(): java.util.Date;
						public getXpanId(): string;
						public getDeviceCount(): number;
						public constructor(param0: io.particle.android.sdk.cloud.models.ParticleNetworkData);
						public getType(): io.particle.android.sdk.cloud.ParticleNetworkType;
						public getName(): string;
						public refresh(): void;
						public toString(): string;
						public getId(): string;
						public getGatewayCount(): number;
						public getPanId(): string;
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module cloud {
					export class ParticleNetworkKt {
						public static class: java.lang.Class<io.particle.android.sdk.cloud.ParticleNetworkKt>;
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module cloud {
					export class ParticleNetworkState {
						public static class: java.lang.Class<io.particle.android.sdk.cloud.ParticleNetworkState>;
						public static PENDING: io.particle.android.sdk.cloud.ParticleNetworkState;
						public static CONFIRMED: io.particle.android.sdk.cloud.ParticleNetworkState;
						public static values(): native.Array<io.particle.android.sdk.cloud.ParticleNetworkState>;
						public static valueOf(param0: string): io.particle.android.sdk.cloud.ParticleNetworkState;
						public toString(): string;
					}
					export module ParticleNetworkState {
						export class WhenMappings {
							public static class: java.lang.Class<io.particle.android.sdk.cloud.ParticleNetworkState.WhenMappings>;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module cloud {
					export class ParticleNetworkType {
						public static class: java.lang.Class<io.particle.android.sdk.cloud.ParticleNetworkType>;
						public static MICRO_WIFI: io.particle.android.sdk.cloud.ParticleNetworkType;
						public static MICRO_CELLULAR: io.particle.android.sdk.cloud.ParticleNetworkType;
						public static HIGH_AVAILABILITY: io.particle.android.sdk.cloud.ParticleNetworkType;
						public static LARGE_SITE: io.particle.android.sdk.cloud.ParticleNetworkType;
						public static values(): native.Array<io.particle.android.sdk.cloud.ParticleNetworkType>;
						public static valueOf(param0: string): io.particle.android.sdk.cloud.ParticleNetworkType;
						public toString(): string;
					}
					export module ParticleNetworkType {
						export class WhenMappings {
							public static class: java.lang.Class<io.particle.android.sdk.cloud.ParticleNetworkType.WhenMappings>;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module cloud {
					export class ParticlePricingInfo {
						public static class: java.lang.Class<io.particle.android.sdk.cloud.ParticlePricingInfo>;
						public component4(): boolean;
						public component5(): boolean;
						public getPlanSlug(): string;
						public getChargeable(): boolean;
						public component6(): boolean;
						public getCcLast4(): string;
						public component1(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
						public getPlanUpgradeNeeded(): boolean;
						public copy(param0: string, param1: string, param2: io.particle.android.sdk.cloud.ParticlePricingPlanInfo, param3: boolean, param4: boolean, param5: boolean, param6: boolean): io.particle.android.sdk.cloud.ParticlePricingInfo;
						public getCcOnFile(): boolean;
						public constructor(param0: string, param1: string, param2: io.particle.android.sdk.cloud.ParticlePricingPlanInfo, param3: boolean, param4: boolean, param5: boolean, param6: boolean);
						public component2(): string;
						public getPlan(): io.particle.android.sdk.cloud.ParticlePricingPlanInfo;
						public component3(): io.particle.android.sdk.cloud.ParticlePricingPlanInfo;
						public component7(): boolean;
						public getAllowed(): boolean;
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module cloud {
					export class ParticlePricingPlanInfo {
						public static class: java.lang.Class<io.particle.android.sdk.cloud.ParticlePricingPlanInfo>;
						public getMonthlyBaseAmount(): number;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getFreeDeviceMaxCount(): number;
						public getIncludedGatewayCount(): number;
						public component6(): number;
						public copy(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number): io.particle.android.sdk.cloud.ParticlePricingPlanInfo;
						public component2(): number;
						public component9(): number;
						public component10(): number;
						public component1(): number;
						public component5(): number;
						public component8(): number;
						public getIncludedNodeCount(): number;
						public component4(): number;
						public getIncludedDataMb(): number;
						public getFreeMonths(): number;
						public toString(): string;
						public getFreeDevicesAvailableCount(): number;
						public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number);
						public getFreeWifiNetworksAvailableCount(): number;
						public getOverageMinCostMb(): number;
						public component7(): number;
						public component3(): number;
						public getFreeWifiNetworkMaxCount(): number;
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module cloud {
					export class ParticleUser {
						public static class: java.lang.Class<io.particle.android.sdk.cloud.ParticleUser>;
						public static fromNewCredentials(param0: string, param1: string): io.particle.android.sdk.cloud.ParticleUser;
						public getUser(): string;
						public static removeSession(): void;
						public getPassword(): string;
						public static fromSavedSession(): io.particle.android.sdk.cloud.ParticleUser;
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module cloud {
					export class PricingImpactAction {
						public static class: java.lang.Class<io.particle.android.sdk.cloud.PricingImpactAction>;
						public static ADD_USER_DEVICE: io.particle.android.sdk.cloud.PricingImpactAction;
						public static ADD_NETWORK_DEVICE: io.particle.android.sdk.cloud.PricingImpactAction;
						public static CREATE_NETWORK: io.particle.android.sdk.cloud.PricingImpactAction;
						public static values(): native.Array<io.particle.android.sdk.cloud.PricingImpactAction>;
						public getApiString(): string;
						public static valueOf(param0: string): io.particle.android.sdk.cloud.PricingImpactAction;
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module cloud {
					export class PricingImpactNetworkType {
						public static class: java.lang.Class<io.particle.android.sdk.cloud.PricingImpactNetworkType>;
						public static WIFI: io.particle.android.sdk.cloud.PricingImpactNetworkType;
						public static CELLULAR: io.particle.android.sdk.cloud.PricingImpactNetworkType;
						public getApiString(): string;
						public static values(): native.Array<io.particle.android.sdk.cloud.PricingImpactNetworkType>;
						public static valueOf(param0: string): io.particle.android.sdk.cloud.PricingImpactNetworkType;
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module cloud {
					export class Responses {
						public static class: java.lang.Class<io.particle.android.sdk.cloud.Responses>;
						public constructor();
					}
					export module Responses {
						export class CallFunctionResponse {
							public static class: java.lang.Class<io.particle.android.sdk.cloud.Responses.CallFunctionResponse>;
							public getDeviceName(): string;
							public getConnected(): boolean;
							public getReturnValue(): number;
							public constructor(param0: string, param1: string, param2: boolean, param3: number);
							public getDeviceId(): string;
						}
						export class CardOnFileResponse {
							public static class: java.lang.Class<io.particle.android.sdk.cloud.Responses.CardOnFileResponse>;
							public hashCode(): number;
							public component1(): io.particle.android.sdk.cloud.Responses.CardOnFileResponse.CardOnFile;
							public constructor(param0: io.particle.android.sdk.cloud.Responses.CardOnFileResponse.CardOnFile);
							public toString(): string;
							public getCard(): io.particle.android.sdk.cloud.Responses.CardOnFileResponse.CardOnFile;
							public equals(param0: any): boolean;
							public copy(param0: io.particle.android.sdk.cloud.Responses.CardOnFileResponse.CardOnFile): io.particle.android.sdk.cloud.Responses.CardOnFileResponse;
						}
						export module CardOnFileResponse {
							export class CardOnFile {
								public static class: java.lang.Class<io.particle.android.sdk.cloud.Responses.CardOnFileResponse.CardOnFile>;
								public toString(): string;
								public copy(param0: string, param1: string, param2: string, param3: string, param4: string): io.particle.android.sdk.cloud.Responses.CardOnFileResponse.CardOnFile;
								public getExpiryYearString(): string;
								public equals(param0: any): boolean;
								public component4(): string;
								public getLast4(): string;
								public component2(): string;
								public component1(): string;
								public constructor(param0: string, param1: string, param2: string, param3: string, param4: string);
								public getToken(): string;
								public getBrand(): string;
								public component5(): string;
								public component3(): string;
								public hashCode(): number;
								public getExpiryMonthString(): string;
							}
						}
						export class ClaimCodeResponse {
							public static class: java.lang.Class<io.particle.android.sdk.cloud.Responses.ClaimCodeResponse>;
							public getDeviceIds(): native.Array<string>;
							public getClaimCode(): string;
							public constructor(param0: string, param1: native.Array<string>);
						}
						export class DeviceMeshMembership {
							public static class: java.lang.Class<io.particle.android.sdk.cloud.Responses.DeviceMeshMembership>;
							public hashCode(): number;
							public copy(param0: string, param1: io.particle.android.sdk.cloud.Responses.MeshMembership): io.particle.android.sdk.cloud.Responses.DeviceMeshMembership;
							public component2(): io.particle.android.sdk.cloud.Responses.MeshMembership;
							public toString(): string;
							public constructor(param0: string, param1: io.particle.android.sdk.cloud.Responses.MeshMembership);
							public getMembership(): io.particle.android.sdk.cloud.Responses.MeshMembership;
							public equals(param0: any): boolean;
							public getDeviceId(): string;
							public component1(): string;
						}
						export class FirmwareUpdateInfoResponse {
							public static class: java.lang.Class<io.particle.android.sdk.cloud.Responses.FirmwareUpdateInfoResponse>;
							public constructor(param0: string);
							public getNextFileUrl(): string;
						}
						export class LogInResponse {
							public static class: java.lang.Class<io.particle.android.sdk.cloud.Responses.LogInResponse>;
							public constructor(param0: number, param1: string, param2: string, param3: string);
							public getTokenType(): string;
							public getAccessToken(): string;
							public getExpiresInSeconds(): number;
							public getRefreshToken(): string;
						}
						export class MeshMembership {
							public static class: java.lang.Class<io.particle.android.sdk.cloud.Responses.MeshMembership>;
							public getNetworkId(): string;
							public constructor(param0: string, param1: io.particle.android.sdk.cloud.Responses.MeshRoleData);
							public component2(): io.particle.android.sdk.cloud.Responses.MeshRoleData;
							public hashCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
							public getRoleData(): io.particle.android.sdk.cloud.Responses.MeshRoleData;
							public component1(): string;
							public copy(param0: string, param1: io.particle.android.sdk.cloud.Responses.MeshRoleData): io.particle.android.sdk.cloud.Responses.MeshMembership;
						}
						export class MeshNetworkRegistrationResponse {
							public static class: java.lang.Class<io.particle.android.sdk.cloud.Responses.MeshNetworkRegistrationResponse>;
							public constructor(param0: io.particle.android.sdk.cloud.Responses.MeshNetworkRegistrationResponse.RegisteredNetwork);
							public getNetwork(): io.particle.android.sdk.cloud.Responses.MeshNetworkRegistrationResponse.RegisteredNetwork;
						}
						export module MeshNetworkRegistrationResponse {
							export class RegisteredNetwork {
								public static class: java.lang.Class<io.particle.android.sdk.cloud.Responses.MeshNetworkRegistrationResponse.RegisteredNetwork>;
								public toString(): string;
								public copy(param0: string, param1: string, param2: io.particle.android.sdk.cloud.ParticleNetworkState, param3: io.particle.android.sdk.cloud.ParticleNetworkType): io.particle.android.sdk.cloud.Responses.MeshNetworkRegistrationResponse.RegisteredNetwork;
								public constructor(param0: string, param1: string, param2: io.particle.android.sdk.cloud.ParticleNetworkState, param3: io.particle.android.sdk.cloud.ParticleNetworkType);
								public getName(): string;
								public component3(): io.particle.android.sdk.cloud.ParticleNetworkState;
								public equals(param0: any): boolean;
								public component2(): string;
								public component4(): io.particle.android.sdk.cloud.ParticleNetworkType;
								public component1(): string;
								public getState(): io.particle.android.sdk.cloud.ParticleNetworkState;
								public getType(): io.particle.android.sdk.cloud.ParticleNetworkType;
								public getId(): string;
								public hashCode(): number;
							}
						}
						export class MeshRoleData {
							public static class: java.lang.Class<io.particle.android.sdk.cloud.Responses.MeshRoleData>;
							public component1(): boolean;
							public hashCode(): number;
							public copy(param0: boolean): io.particle.android.sdk.cloud.Responses.MeshRoleData;
							public constructor(param0: boolean);
							public toString(): string;
							public equals(param0: any): boolean;
							public isGateway(): boolean;
						}
						export class Models {
							public static class: java.lang.Class<io.particle.android.sdk.cloud.Responses.Models>;
							public constructor();
						}
						export module Models {
							export class CompleteDevice {
								public static class: java.lang.Class<io.particle.android.sdk.cloud.Responses.Models.CompleteDevice>;
								public getIpAddress(): string;
								public getFunctions(): java.util.List<string>;
								public getName(): string;
								public getIccid(): string;
								public getProductId(): number;
								public getStatus(): string;
								public getLastIccid(): string;
								public getDeviceId(): string;
								public getSystemFirmwareVersion(): string;
								public getPlatformId(): number;
								public getMobileSecret(): string;
								public getSerialNumber(): string;
								public getLastAppName(): string;
								public isConnected(): boolean;
								public getCellular(): boolean;
								public getCurrentBuild(): string;
								public getNotes(): string;
								public getVariables(): java.util.Map<string,string>;
								public getLastHeard(): java.util.Date;
								public getImei(): string;
								public getDefaultBuild(): string;
								public constructor(param0: string, param1: string, param2: boolean, param3: boolean, param4: string, param5: string, param6: string, param7: string, param8: string, param9: java.util.Map<string,string>, param10: java.util.List<string>, param11: number, param12: number, param13: string, param14: string, param15: string, param16: java.util.Date, param17: string, param18: string, param19: string, param20: string);
							}
							export class CoreInfo {
								public static class: java.lang.Class<io.particle.android.sdk.cloud.Responses.Models.CoreInfo>;
								public getConnected(): boolean;
								public getLastHeard(): java.util.Date;
								public getDeviceId(): string;
								public constructor(param0: string, param1: java.util.Date, param2: boolean, param3: string);
								public getLastApp(): string;
							}
						}
						export class PingResponse {
							public static class: java.lang.Class<io.particle.android.sdk.cloud.Responses.PingResponse>;
							public getOnline(): boolean;
							public constructor(param0: boolean);
						}
						export class ReadDoubleVariableResponse extends io.particle.android.sdk.cloud.Responses.ReadVariableResponse<java.lang.Double> {
							public static class: java.lang.Class<io.particle.android.sdk.cloud.Responses.ReadDoubleVariableResponse>;
							public constructor(param0: string, param1: string, param2: io.particle.android.sdk.cloud.Responses.Models.CoreInfo, param3: any);
							public constructor(param0: string, param1: string, param2: io.particle.android.sdk.cloud.Responses.Models.CoreInfo, param3: number);
						}
						export class ReadIntVariableResponse extends io.particle.android.sdk.cloud.Responses.ReadVariableResponse<java.lang.Integer> {
							public static class: java.lang.Class<io.particle.android.sdk.cloud.Responses.ReadIntVariableResponse>;
							public constructor(param0: string, param1: string, param2: io.particle.android.sdk.cloud.Responses.Models.CoreInfo, param3: any);
							public constructor(param0: string, param1: string, param2: io.particle.android.sdk.cloud.Responses.Models.CoreInfo, param3: number);
						}
						export class ReadObjectVariableResponse extends io.particle.android.sdk.cloud.Responses.ReadVariableResponse<any> {
							public static class: java.lang.Class<io.particle.android.sdk.cloud.Responses.ReadObjectVariableResponse>;
							public constructor(param0: string, param1: string, param2: io.particle.android.sdk.cloud.Responses.Models.CoreInfo, param3: any);
						}
						export class ReadStringVariableResponse extends io.particle.android.sdk.cloud.Responses.ReadVariableResponse<string> {
							public static class: java.lang.Class<io.particle.android.sdk.cloud.Responses.ReadStringVariableResponse>;
							public constructor(param0: string, param1: string, param2: io.particle.android.sdk.cloud.Responses.Models.CoreInfo, param3: any);
							public constructor(param0: string, param1: string, param2: io.particle.android.sdk.cloud.Responses.Models.CoreInfo, param3: string);
						}
						export abstract class ReadVariableResponse<T>  extends java.lang.Object {
							public static class: java.lang.Class<io.particle.android.sdk.cloud.Responses.ReadVariableResponse<any>>;
							public getResult(): T;
							public constructor(param0: string, param1: string, param2: io.particle.android.sdk.cloud.Responses.Models.CoreInfo, param3: T);
							public getCoreInfo(): io.particle.android.sdk.cloud.Responses.Models.CoreInfo;
							public getVariableName(): string;
							public getCommandName(): string;
						}
						export class SimpleResponse {
							public static class: java.lang.Class<io.particle.android.sdk.cloud.Responses.SimpleResponse>;
							public constructor(param0: boolean, param1: string);
							public getOk(): boolean;
							public toString(): string;
							public getError(): string;
						}
						export class TokenResponse {
							public static class: java.lang.Class<io.particle.android.sdk.cloud.Responses.TokenResponse>;
							public constructor(param0: string);
							public getToken(): string;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module cloud {
					export class SDKGlobals {
						public static class: java.lang.Class<io.particle.android.sdk.cloud.SDKGlobals>;
						public constructor();
						public static getSensitiveDataStorage(): io.particle.android.sdk.persistance.SensitiveDataStorage;
						public static getAppDataStorage(): io.particle.android.sdk.persistance.AppDataStorage;
						public static init(param0: globalAndroid.content.Context): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module cloud {
					export class SDKProvider {
						public static class: java.lang.Class<io.particle.android.sdk.cloud.SDKProvider>;
					}
					export module SDKProvider {
						export class TokenGetterDelegateImpl extends io.particle.android.sdk.cloud.ApiFactory.TokenGetterDelegate {
							public static class: java.lang.Class<io.particle.android.sdk.cloud.SDKProvider.TokenGetterDelegateImpl>;
							public getTokenValue(): string;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module cloud {
					export class SimpleParticleEventHandler {
						public static class: java.lang.Class<io.particle.android.sdk.cloud.SimpleParticleEventHandler>;
						/**
						 * Constructs a new instance of the io.particle.android.sdk.cloud.SimpleParticleEventHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onEvent(param0: string, param1: io.particle.android.sdk.cloud.ParticleEvent): void;
						});
						public constructor();
						public onEvent(param0: string, param1: io.particle.android.sdk.cloud.ParticleEvent): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module cloud {
					export module exceptions {
						export class PartialDeviceListResultException {
							public static class: java.lang.Class<io.particle.android.sdk.cloud.exceptions.PartialDeviceListResultException>;
							public devices: java.util.List<io.particle.android.sdk.cloud.ParticleDevice>;
							public constructor(param0: java.util.List<io.particle.android.sdk.cloud.ParticleDevice>, param1: retrofit.RetrofitError);
							public constructor(param0: java.util.List<io.particle.android.sdk.cloud.ParticleDevice>, param1: java.lang.Exception);
							public constructor(param0: java.util.List<io.particle.android.sdk.cloud.ParticleDevice>);
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module cloud {
					export module exceptions {
						export class ParticleCloudException {
							public static class: java.lang.Class<io.particle.android.sdk.cloud.exceptions.ParticleCloudException>;
							public getResponseData(): io.particle.android.sdk.cloud.exceptions.ParticleCloudException.ResponseErrorData;
							public getKind(): io.particle.android.sdk.cloud.exceptions.ParticleCloudException.Kind;
							public getBestMessage(): string;
							public constructor(param0: java.lang.Exception);
							public getServerErrorMsg(): string;
						}
						export module ParticleCloudException {
							export class Kind {
								public static class: java.lang.Class<io.particle.android.sdk.cloud.exceptions.ParticleCloudException.Kind>;
								public static NETWORK: io.particle.android.sdk.cloud.exceptions.ParticleCloudException.Kind;
								public static CONVERSION: io.particle.android.sdk.cloud.exceptions.ParticleCloudException.Kind;
								public static HTTP: io.particle.android.sdk.cloud.exceptions.ParticleCloudException.Kind;
								public static UNEXPECTED: io.particle.android.sdk.cloud.exceptions.ParticleCloudException.Kind;
								public static valueOf(param0: string): io.particle.android.sdk.cloud.exceptions.ParticleCloudException.Kind;
								public static values(): native.Array<io.particle.android.sdk.cloud.exceptions.ParticleCloudException.Kind>;
							}
							export class ResponseErrorData {
								public static class: java.lang.Class<io.particle.android.sdk.cloud.exceptions.ParticleCloudException.ResponseErrorData>;
								public getBody(): string;
								public getHttpStatusCode(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module cloud {
					export module exceptions {
						export class ParticleLoginException extends io.particle.android.sdk.cloud.exceptions.ParticleCloudException {
							public static class: java.lang.Class<io.particle.android.sdk.cloud.exceptions.ParticleLoginException>;
							public getMfaToken(): string;
							public constructor(param0: java.lang.Exception);
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module cloud {
					export module models {
						export class AccountInfo {
							public static class: java.lang.Class<io.particle.android.sdk.cloud.models.AccountInfo>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<io.particle.android.sdk.cloud.models.AccountInfo>;
							public constructor();
							public constructor(param0: string, param1: string, param2: string, param3: boolean);
							public setFirstName(param0: string): void;
							public setBusinessAccount(param0: boolean): void;
							public getFirstName(): string;
							public getCompanyName(): string;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public getLastName(): string;
							public describeContents(): number;
							public isBusinessAccount(): boolean;
							public constructor(param0: globalAndroid.os.Parcel);
							public setLastName(param0: string): void;
							public setCompanyName(param0: string): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module cloud {
					export module models {
						export class DeviceIdentifiers {
							public static class: java.lang.Class<io.particle.android.sdk.cloud.models.DeviceIdentifiers>;
							public constructor(param0: string, param1: string, param2: number);
							public component2(): string;
							public hashCode(): number;
							public component3(): number;
							public getIccid(): string;
							public toString(): string;
							public getPlatformId(): number;
							public equals(param0: any): boolean;
							public copy(param0: string, param1: string, param2: number): io.particle.android.sdk.cloud.models.DeviceIdentifiers;
							public getDeviceId(): string;
							public component1(): string;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module cloud {
					export module models {
						export class DeviceStateChange {
							public static class: java.lang.Class<io.particle.android.sdk.cloud.models.DeviceStateChange>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<io.particle.android.sdk.cloud.models.DeviceStateChange>;
							public getState(): io.particle.android.sdk.cloud.ParticleDevice.ParticleDeviceState;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: io.particle.android.sdk.cloud.ParticleDevice, param1: io.particle.android.sdk.cloud.ParticleDevice.ParticleDeviceState);
							public getDevice(): io.particle.android.sdk.cloud.ParticleDevice;
							public describeContents(): number;
							public constructor(param0: globalAndroid.os.Parcel);
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module cloud {
					export module models {
						export class MeshNetworkChange {
							public static class: java.lang.Class<io.particle.android.sdk.cloud.models.MeshNetworkChange>;
							public component2(): string;
							public hashCode(): number;
							public getDeviceID(): string;
							public constructor(param0: string, param1: string);
							public getAction(): string;
							public copy(param0: string, param1: string): io.particle.android.sdk.cloud.models.MeshNetworkChange;
							public toString(): string;
							public equals(param0: any): boolean;
							public component1(): string;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module cloud {
					export module models {
						export class MobileSecretResponse {
							public static class: java.lang.Class<io.particle.android.sdk.cloud.models.MobileSecretResponse>;
							public component2(): string;
							public hashCode(): number;
							public constructor(param0: string, param1: string);
							public copy(param0: string, param1: string): io.particle.android.sdk.cloud.models.MobileSecretResponse;
							public toString(): string;
							public equals(param0: any): boolean;
							public getDeviceId(): string;
							public component1(): string;
							public getFullMobileSecret(): string;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module cloud {
					export module models {
						export class ModifyMeshNetworkAction {
							public static class: java.lang.Class<io.particle.android.sdk.cloud.models.ModifyMeshNetworkAction>;
							public static ADD_DEVICE: io.particle.android.sdk.cloud.models.ModifyMeshNetworkAction;
							public static REMOVE_DEVICE: io.particle.android.sdk.cloud.models.ModifyMeshNetworkAction;
							public static GATEWAY_ENABLE: io.particle.android.sdk.cloud.models.ModifyMeshNetworkAction;
							public static GATEWAY_DISABLE: io.particle.android.sdk.cloud.models.ModifyMeshNetworkAction;
							public static valueOf(param0: string): io.particle.android.sdk.cloud.models.ModifyMeshNetworkAction;
							public static values(): native.Array<io.particle.android.sdk.cloud.models.ModifyMeshNetworkAction>;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module cloud {
					export module models {
						export class ParticleApiSimStatus {
							public static class: java.lang.Class<io.particle.android.sdk.cloud.models.ParticleApiSimStatus>;
							public static ACTIVE: io.particle.android.sdk.cloud.models.ParticleApiSimStatus;
							public static INACTIVE_NEVER_ACTIVATED: io.particle.android.sdk.cloud.models.ParticleApiSimStatus;
							public static INACTIVE_USER_DEACTIVATED: io.particle.android.sdk.cloud.models.ParticleApiSimStatus;
							public static INACTIVE_DATA_LIMIT_REACHED: io.particle.android.sdk.cloud.models.ParticleApiSimStatus;
							public static INACTIVE_INVALID_PAYMENT_METHOD: io.particle.android.sdk.cloud.models.ParticleApiSimStatus;
							public static Companion: io.particle.android.sdk.cloud.models.ParticleApiSimStatus.Companion;
							public static valueOf(param0: string): io.particle.android.sdk.cloud.models.ParticleApiSimStatus;
							public getApiString(): string;
							public static values(): native.Array<io.particle.android.sdk.cloud.models.ParticleApiSimStatus>;
						}
						export module ParticleApiSimStatus {
							export class Companion {
								public static class: java.lang.Class<io.particle.android.sdk.cloud.models.ParticleApiSimStatus.Companion>;
								public fromString(param0: string): io.particle.android.sdk.cloud.models.ParticleApiSimStatus;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module cloud {
					export module models {
						export class ParticleApiSimStatusAdapter extends com.google.gson.TypeAdapter<io.particle.android.sdk.cloud.models.ParticleApiSimStatus> {
							public static class: java.lang.Class<io.particle.android.sdk.cloud.models.ParticleApiSimStatusAdapter>;
							public static Companion: io.particle.android.sdk.cloud.models.ParticleApiSimStatusAdapter.Companion;
							public constructor();
							public write(param0: com.google.gson.stream.JsonWriter, param1: io.particle.android.sdk.cloud.models.ParticleApiSimStatus): void;
							public read(param0: com.google.gson.stream.JsonReader): io.particle.android.sdk.cloud.models.ParticleApiSimStatus;
						}
						export module ParticleApiSimStatusAdapter {
							export class Companion {
								public static class: java.lang.Class<io.particle.android.sdk.cloud.models.ParticleApiSimStatusAdapter.Companion>;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module cloud {
					export module models {
						export class ParticleNetworkData {
							public static class: java.lang.Class<io.particle.android.sdk.cloud.models.ParticleNetworkData>;
							public hashCode(): number;
							public getId(): string;
							public getLastHeard(): java.util.Date;
							public component5(): number;
							public toString(): string;
							public copy(param0: string, param1: string, param2: io.particle.android.sdk.cloud.ParticleNetworkType, param3: io.particle.android.sdk.cloud.ParticleNetworkState, param4: number, param5: number, param6: java.util.Date, param7: string, param8: string, param9: java.lang.Integer, param10: string): io.particle.android.sdk.cloud.models.ParticleNetworkData;
							public component1(): string;
							public component10(): java.lang.Integer;
							public component6(): number;
							public getPanId(): string;
							public constructor(param0: string, param1: string, param2: io.particle.android.sdk.cloud.ParticleNetworkType, param3: io.particle.android.sdk.cloud.ParticleNetworkState, param4: number, param5: number, param6: java.util.Date, param7: string, param8: string, param9: java.lang.Integer, param10: string);
							public getNotes(): string;
							public getChannel(): java.lang.Integer;
							public component2(): string;
							public component3(): io.particle.android.sdk.cloud.ParticleNetworkType;
							public getDeviceCount(): number;
							public component4(): io.particle.android.sdk.cloud.ParticleNetworkState;
							public component9(): string;
							public getType(): io.particle.android.sdk.cloud.ParticleNetworkType;
							public getGatewayCount(): number;
							public component8(): string;
							public getName(): string;
							public getState(): io.particle.android.sdk.cloud.ParticleNetworkState;
							public getXpanId(): string;
							public component11(): string;
							public equals(param0: any): boolean;
							public component7(): java.util.Date;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module cloud {
					export module models {
						export class ParticleSim {
							public static class: java.lang.Class<io.particle.android.sdk.cloud.models.ParticleSim>;
							public getFirstActivatedOn(): java.util.Date;
							public component13(): string;
							public getBaseMonthlyRateCentsPerMB(): string;
							public hashCode(): number;
							public component2(): number;
							public component11(): number;
							public component10(): string;
							public component16(): string;
							public component9(): number;
							public toString(): string;
							public getStripePlanSlug(): string;
							public getCarrier(): string;
							public getLastDeviceName(): string;
							public component3(): string;
							public component1(): string;
							public component12(): io.particle.android.sdk.cloud.models.ParticleApiSimStatus;
							public component14(): java.util.Date;
							public component17(): string;
							public getMsisdn(): string;
							public getIccId(): string;
							public getLastDeviceId(): string;
							public getLastStatusChangeAction(): string;
							public component15(): string;
							public getMonthlyDataRateLimitInMBs(): number;
							public component18(): string;
							public constructor(param0: string, param1: number, param2: string, param3: string, param4: string, param5: java.util.Date, param6: java.util.Date, param7: string, param8: number, param9: string, param10: number, param11: io.particle.android.sdk.cloud.models.ParticleApiSimStatus, param12: string, param13: java.util.Date, param14: string, param15: string, param16: string, param17: string);
							public component5(): string;
							public getDeactivationsCount(): string;
							public component8(): string;
							public getSimStatus(): io.particle.android.sdk.cloud.models.ParticleApiSimStatus;
							public getOverageMonthlyRateCentsPerMB(): number;
							public component4(): string;
							public getBaseCountryCode(): string;
							public getLastActivatedOn(): java.util.Date;
							public equals(param0: any): boolean;
							public getUpdatedAt(): java.util.Date;
							public component7(): java.util.Date;
							public component6(): java.util.Date;
							public getActivationsCount(): number;
							public getOwnerUserId(): string;
							public copy(param0: string, param1: number, param2: string, param3: string, param4: string, param5: java.util.Date, param6: java.util.Date, param7: string, param8: number, param9: string, param10: number, param11: io.particle.android.sdk.cloud.models.ParticleApiSimStatus, param12: string, param13: java.util.Date, param14: string, param15: string, param16: string, param17: string): io.particle.android.sdk.cloud.models.ParticleSim;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module cloud {
					export module models {
						export class ParticleSimStatus {
							public static class: java.lang.Class<io.particle.android.sdk.cloud.models.ParticleSimStatus>;
							public static READY_TO_ACTIVATE: io.particle.android.sdk.cloud.models.ParticleSimStatus;
							public static ACTIVATED_FREE: io.particle.android.sdk.cloud.models.ParticleSimStatus;
							public static ACTIVATED: io.particle.android.sdk.cloud.models.ParticleSimStatus;
							public static NOT_FOUND: io.particle.android.sdk.cloud.models.ParticleSimStatus;
							public static NOT_OWNED_BY_USER: io.particle.android.sdk.cloud.models.ParticleSimStatus;
							public static ERROR: io.particle.android.sdk.cloud.models.ParticleSimStatus;
							public static values(): native.Array<io.particle.android.sdk.cloud.models.ParticleSimStatus>;
							public static valueOf(param0: string): io.particle.android.sdk.cloud.models.ParticleSimStatus;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module cloud {
					export module models {
						export class ParticleSimStatusKt {
							public static class: java.lang.Class<io.particle.android.sdk.cloud.models.ParticleSimStatusKt>;
							public static statusCodeToSimStatus(param0: number): kotlin.Pair<io.particle.android.sdk.cloud.models.ParticleSimStatus,string>;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module cloud {
					export module models {
						export class SignUpInfo {
							public static class: java.lang.Class<io.particle.android.sdk.cloud.models.SignUpInfo>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<io.particle.android.sdk.cloud.models.SignUpInfo>;
							public constructor(param0: string, param1: string);
							public getUsername(): string;
							public getPassword(): string;
							public setAccountInfo(param0: io.particle.android.sdk.cloud.models.AccountInfo): void;
							public getGrantType(): string;
							public getAccountInfo(): io.particle.android.sdk.cloud.models.AccountInfo;
							public constructor(param0: string, param1: string, param2: io.particle.android.sdk.cloud.models.AccountInfo);
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public getEmail(): string;
							public setGrantType(param0: string): void;
							public describeContents(): number;
							public constructor(param0: globalAndroid.os.Parcel);
							public constructor(param0: string, param1: string, param2: string);
							public constructor(param0: string, param1: string, param2: string, param3: io.particle.android.sdk.cloud.models.AccountInfo);
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module persistance {
					export class AppDataStorage {
						public static class: java.lang.Class<io.particle.android.sdk.persistance.AppDataStorage>;
						public constructor(param0: globalAndroid.content.Context);
						public getUserHasClaimedDevices(): boolean;
						public saveUserHasClaimedDevices(param0: boolean): void;
						public resetUserHasClaimedDevices(): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module persistance {
					export class SensitiveDataStorage {
						public static class: java.lang.Class<io.particle.android.sdk.persistance.SensitiveDataStorage>;
						public getUser(): string;
						public getHasEverHadStoredUsername(): boolean;
						public constructor(param0: globalAndroid.content.Context);
						public getTokenExpirationDate(): java.util.Date;
						public getRefreshToken(): string;
						public getPassword(): string;
						public saveToken(param0: string): void;
						public getToken(): string;
						public resetUser(): void;
						public resetTokenExpirationDate(): void;
						public savePassword(param0: string): void;
						public resetRefreshToken(): void;
						public resetPassword(): void;
						public resetToken(): void;
						public saveTokenExpirationDate(param0: java.util.Date): void;
						public saveUser(param0: string): void;
						public saveRefreshToken(param0: string): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module utils {
					export class Async {
						public static class: java.lang.Class<io.particle.android.sdk.utils.Async>;
						public constructor();
						public static executeAsync(param0: io.particle.android.sdk.cloud.ParticleCloud, param1: io.particle.android.sdk.utils.Async.ApiWork<any,any>): io.particle.android.sdk.utils.Async.AsyncApiWorker<any,any>;
						public static executeAsync(param0: io.particle.android.sdk.cloud.ParticleDevice, param1: io.particle.android.sdk.utils.Async.ApiWork<any,any>): io.particle.android.sdk.utils.Async.AsyncApiWorker<any,any>;
					}
					export module Async {
						export abstract class ApiProcedure<ApiCaller>  extends io.particle.android.sdk.utils.Async.ApiWork<any,java.lang.Void> {
							public static class: java.lang.Class<io.particle.android.sdk.utils.Async.ApiProcedure<any>>;
							public constructor();
							public onSuccess(param0: any): void;
							public onSuccess(param0: java.lang.Void): void;
						}
						export abstract class ApiWork<ApiCaller, Result>  extends java.lang.Object {
							public static class: java.lang.Class<io.particle.android.sdk.utils.Async.ApiWork<any,any>>;
							public constructor();
							public onFailure(param0: io.particle.android.sdk.cloud.exceptions.ParticleCloudException): void;
							public onCancelled(): void;
							public callApi(param0: ApiCaller): Result;
							public onSuccess(param0: Result): void;
							public onTaskFinished(): void;
						}
						export class AsyncApiWorker<ApiCaller, Result>  extends globalAndroid.os.AsyncTask<java.lang.Void,java.lang.Void,any> {
							public static class: java.lang.Class<io.particle.android.sdk.utils.Async.AsyncApiWorker<any,any>>;
							public ioException: java.io.IOException;
							public onCancelled(): void;
							public doInBackground(param0: native.Array<java.lang.Void>): any;
							public andIgnoreCallbacksIfActivityIsFinishing(param0: globalAndroid.app.Activity): io.particle.android.sdk.utils.Async.AsyncApiWorker<any,any>;
							public onPostExecute(param0: any): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module utils {
					export class CoreNameGenerator {
						public static class: java.lang.Class<io.particle.android.sdk.utils.CoreNameGenerator>;
						public constructor();
						public static generateUniqueName(param0: java.util.Set<string>): string;
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module utils {
					export class EZ {
						public static class: java.lang.Class<io.particle.android.sdk.utils.EZ>;
						public constructor();
						public static isThisTheMainThread(): boolean;
						public static threadSleep(param0: number): void;
						public static runOnMainThreadDelayed(param0: number, param1: java.lang.Runnable): void;
						public static runOnMainThread(param0: java.lang.Runnable): void;
						public static closeThisThingOrMaybeDont(param0: java.io.Closeable): void;
						public static runAsync(param0: java.lang.Runnable): void;
						public static isUsingOlderWifiStack(): boolean;
						public static buildRawResourceUri(param0: globalAndroid.content.Context, param1: string): globalAndroid.net.Uri;
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module utils {
					export class EnumsKt {
						public static class: java.lang.Class<io.particle.android.sdk.utils.EnumsKt>;
						public static buildStringValueMap(param0: native.Array<any>, param1: kotlin.jvm.functions.Function1): androidx.collection.ArrayMap;
						public static buildIntValueMap(param0: native.Array<any>, param1: kotlin.jvm.functions.Function1): globalAndroid.util.SparseArray;
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module utils {
					export class Funcy {
						public static class: java.lang.Class<io.particle.android.sdk.utils.Funcy>;
						public static transformList(param0: java.util.List, param1: io.particle.android.sdk.utils.Funcy.Func<any,any>): java.util.List;
						public static transformSet(param0: java.util.Set, param1: io.particle.android.sdk.utils.Funcy.Func<any,any>, param2: io.particle.android.sdk.utils.Funcy.Predicate<any>): java.util.Set;
						public static filter(param0: java.util.List, param1: io.particle.android.sdk.utils.Funcy.Predicate<any>): java.util.List;
						public constructor();
						public static transformList(param0: java.util.List, param1: io.particle.android.sdk.utils.Funcy.Predicate<any>, param2: io.particle.android.sdk.utils.Funcy.Func<any,any>, param3: io.particle.android.sdk.utils.Funcy.Predicate<any>): java.util.List;
						public static findFirstMatch(param0: java.util.Collection, param1: io.particle.android.sdk.utils.Funcy.Predicate<any>): any;
						public static transformList(param0: java.util.List, param1: io.particle.android.sdk.utils.Funcy.Predicate<any>, param2: io.particle.android.sdk.utils.Funcy.Func<any,any>): java.util.List;
						public static notNull(): io.particle.android.sdk.utils.Funcy.Predicate<any>;
						public static transformList(param0: java.util.List, param1: io.particle.android.sdk.utils.Funcy.Func<any,any>, param2: io.particle.android.sdk.utils.Funcy.Predicate<any>): java.util.List;
						public static transformSet(param0: java.util.Set, param1: io.particle.android.sdk.utils.Funcy.Predicate<any>, param2: io.particle.android.sdk.utils.Funcy.Func<any,any>, param3: io.particle.android.sdk.utils.Funcy.Predicate<any>): java.util.Set;
						public static transformSet(param0: java.util.Set, param1: io.particle.android.sdk.utils.Funcy.Func<any,any>): java.util.Set;
						public static transformSet(param0: java.util.Set, param1: io.particle.android.sdk.utils.Funcy.Predicate<any>, param2: io.particle.android.sdk.utils.Funcy.Func<any,any>): java.util.Set;
						public static alwaysFalse(): io.particle.android.sdk.utils.Funcy.Predicate<any>;
						public static alwaysTrue(): io.particle.android.sdk.utils.Funcy.Predicate<any>;
						public static filter(param0: java.util.Set, param1: io.particle.android.sdk.utils.Funcy.Predicate<any>): java.util.Set;
					}
					export module Funcy {
						export class CollectionFactory<C>  extends java.lang.Object {
							public static class: java.lang.Class<io.particle.android.sdk.utils.Funcy.CollectionFactory<any>>;
							/**
							 * Constructs a new instance of the io.particle.android.sdk.utils.Funcy$CollectionFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								newWithCapacity(param0: number): C;
								emptyCollection(): C;
							});
							public constructor();
							public newWithCapacity(param0: number): C;
							public emptyCollection(): C;
						}
						export class Func<In, Out>  extends java.lang.Object {
							public static class: java.lang.Class<io.particle.android.sdk.utils.Funcy.Func<any,any>>;
							/**
							 * Constructs a new instance of the io.particle.android.sdk.utils.Funcy$Func interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								apply(param0: In): Out;
							});
							public constructor();
							public apply(param0: In): Out;
						}
						export class Predicate<T>  extends java.lang.Object {
							public static class: java.lang.Class<io.particle.android.sdk.utils.Funcy.Predicate<any>>;
							/**
							 * Constructs a new instance of the io.particle.android.sdk.utils.Funcy$Predicate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								test(param0: T): boolean;
							});
							public constructor();
							public test(param0: T): boolean;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module utils {
					export class LangUtilsKt {
						public static class: java.lang.Class<io.particle.android.sdk.utils.LangUtilsKt>;
						public static getPass(): kotlin.Unit;
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module utils {
					export class Parcelables {
						public static class: java.lang.Class<io.particle.android.sdk.utils.Parcelables>;
						public constructor();
						public static readStringMap(param0: globalAndroid.os.Parcel): java.util.Map<string,string>;
						public static readSerializableMap(param0: globalAndroid.os.Parcel): java.util.Map;
						public static readParcelableMap(param0: globalAndroid.os.Parcel): java.util.Map;
						public static writeBoolean(param0: globalAndroid.os.Parcel, param1: boolean): void;
						public static readStringList(param0: globalAndroid.os.Parcel): java.util.List<string>;
						public static writeStringMap(param0: globalAndroid.os.Parcel, param1: java.util.Map<string,string>): void;
						public static readBoolean(param0: globalAndroid.os.Parcel): boolean;
						public static writeParcelableMap(param0: globalAndroid.os.Parcel, param1: java.util.Map): void;
						public static writeSerializableMap(param0: globalAndroid.os.Parcel, param1: java.util.Map): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module utils {
					export class ParticleInternalStringUtilsKt {
						public static class: java.lang.Class<io.particle.android.sdk.utils.ParticleInternalStringUtilsKt>;
						public static join(param0: java.lang.Iterable<any>, param1: string): string;
						public static join(param0: java.util.Iterator<any>, param1: string): string;
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module utils {
					export class PermissionsKt {
						public static class: java.lang.Class<io.particle.android.sdk.utils.PermissionsKt>;
						public static appHasPermission(param0: globalAndroid.content.Context, param1: string): boolean;
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module utils {
					export class Preconditions {
						public static class: java.lang.Class<io.particle.android.sdk.utils.Preconditions>;
						public constructor();
						public static checkNotNull(param0: any): any;
						public static checkArgument(param0: boolean, param1: string): void;
						public static checkNotNull(param0: any, param1: any): any;
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module utils {
					export class Py {
						public static class: java.lang.Class<io.particle.android.sdk.utils.Py>;
						public static list(param0: native.Array<any>): java.util.List;
						public static frozenset(param0: native.Array<any>): java.util.Set;
						public constructor();
						public static set(param0: java.util.Collection): io.particle.android.sdk.utils.Py.PySet<any>;
						public static set(param0: native.Array<any>): io.particle.android.sdk.utils.Py.PySet<any>;
						public static map(): java.util.Map;
						public static frozenmap(param0: java.util.List, param1: java.util.List): java.util.Map;
						public static list(param0: java.util.Iterator): java.util.List;
						public static tuple(param0: java.util.List): java.util.List;
						public static any(param0: native.Array<any>): boolean;
						public static list(param0: java.util.Collection): java.util.List;
						public static tuple(param0: native.Array<any>): java.util.List;
						public static frozenmap(): java.util.Map;
						public static all(param0: native.Array<any>): boolean;
						public static list(): java.util.List;
						public static list(param0: java.lang.Iterable): java.util.List;
						public static truthy(param0: any): boolean;
						public static map(param0: java.util.List, param1: java.util.List): java.util.Map;
						public static frozenset(param0: java.util.Set): java.util.Set;
					}
					export module Py {
						export class PySet<T>  extends java.util.LinkedHashSet<any> {
							public static class: java.lang.Class<io.particle.android.sdk.utils.Py.PySet<any>>;
							public getDifference(param0: native.Array<java.util.Collection<any>>): io.particle.android.sdk.utils.Py.PySet<any>;
							public constructor(param0: java.util.Collection<any>);
							public getIntersection(param0: native.Array<java.util.Collection<any>>): io.particle.android.sdk.utils.Py.PySet<any>;
							public getSymmetricDifference(param0: native.Array<java.util.Collection<any>>): io.particle.android.sdk.utils.Py.PySet<any>;
							public getUnion(param0: native.Array<java.util.Collection<any>>): io.particle.android.sdk.utils.Py.PySet<any>;
							public getIntersection(param0: java.util.Collection<any>): io.particle.android.sdk.utils.Py.PySet<any>;
							public getDifference(param0: java.util.Collection<any>): io.particle.android.sdk.utils.Py.PySet<any>;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module utils {
					export class TLog {
						public static class: java.lang.Class<io.particle.android.sdk.utils.TLog>;
						public e(param0: string): void;
						public e(param0: string, param1: java.lang.Throwable): void;
						public d(param0: string): void;
						public i(param0: string, param1: java.lang.Throwable): void;
						public d(param0: string, param1: java.lang.Throwable): void;
						public wtf(param0: string): void;
						public w(param0: string, param1: java.lang.Throwable): void;
						public static get(param0: java.lang.Class<any>): io.particle.android.sdk.utils.TLog;
						public w(param0: string): void;
						public wtf(param0: string, param1: java.lang.Throwable): void;
						public i(param0: string): void;
						public v(param0: string, param1: java.lang.Throwable): void;
						public v(param0: string): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module utils {
					export class Toaster {
						public static class: java.lang.Class<io.particle.android.sdk.utils.Toaster>;
						public static INSTANCE: io.particle.android.sdk.utils.Toaster;
						public static s(param0: globalAndroid.app.Activity, param1: string): void;
						public static l(param0: globalAndroid.app.Activity, param1: string): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module utils {
					export class UnknownEnumIntValueException {
						public static class: java.lang.Class<io.particle.android.sdk.utils.UnknownEnumIntValueException>;
						public constructor(param0: number);
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module utils {
					export class UnknownEnumStringValueException {
						public static class: java.lang.Class<io.particle.android.sdk.utils.UnknownEnumStringValueException>;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module bridge {
				export class ValidateOrigin {
					public static class: java.lang.Class<org.kaazing.gateway.bridge.ValidateOrigin>;
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export class Channel {
						public static class: java.lang.Class<org.kaazing.gateway.client.impl.Channel>;
						public static HEADER_SEQUENCE: string;
						public challengeResponse: org.kaazing.net.auth.ChallengeResponse;
						public authenticationReceived: boolean;
						public preventFallback: boolean;
						public constructor();
						public constructor(param0: number);
						public setParent(param0: org.kaazing.gateway.client.impl.Channel): void;
						public getParent(): org.kaazing.gateway.client.impl.Channel;
						public nextSequence(): number;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export class CommandMessage {
						public static class: java.lang.Class<org.kaazing.gateway.client.impl.CommandMessage>;
						/**
						 * Constructs a new instance of the org.kaazing.gateway.client.impl.CommandMessage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export class DecoderInput<C>  extends java.lang.Object {
						public static class: java.lang.Class<org.kaazing.gateway.client.impl.DecoderInput<any>>;
						/**
						 * Constructs a new instance of the org.kaazing.gateway.client.impl.DecoderInput<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							read(param0: C): org.kaazing.gateway.client.util.WrappedByteBuffer;
						});
						public constructor();
						public read(param0: C): org.kaazing.gateway.client.util.WrappedByteBuffer;
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export class DecoderListener<C>  extends java.lang.Object {
						public static class: java.lang.Class<org.kaazing.gateway.client.impl.DecoderListener<any>>;
						/**
						 * Constructs a new instance of the org.kaazing.gateway.client.impl.DecoderListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							messageDecoded(param0: C, param1: org.kaazing.gateway.client.util.WrappedByteBuffer): void;
							messageDecoded(param0: C, param1: string): void;
						});
						public constructor();
						public messageDecoded(param0: C, param1: org.kaazing.gateway.client.util.WrappedByteBuffer): void;
						public messageDecoded(param0: C, param1: string): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export class EncoderOutput<C>  extends java.lang.Object {
						public static class: java.lang.Class<org.kaazing.gateway.client.impl.EncoderOutput<any>>;
						/**
						 * Constructs a new instance of the org.kaazing.gateway.client.impl.EncoderOutput<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							write(param0: C, param1: org.kaazing.gateway.client.util.WrappedByteBuffer): void;
						});
						public constructor();
						public write(param0: C, param1: org.kaazing.gateway.client.util.WrappedByteBuffer): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export class Handler {
						public static class: java.lang.Class<org.kaazing.gateway.client.impl.Handler>;
						/**
						 * Constructs a new instance of the org.kaazing.gateway.client.impl.Handler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export class WebSocketChannel extends org.kaazing.gateway.client.impl.Channel {
						public static class: java.lang.Class<org.kaazing.gateway.client.impl.WebSocketChannel>;
						public transportHandler: org.kaazing.gateway.client.impl.WebSocketHandler;
						public handshakePayload: java.lang.StringBuilder;
						public bufferedAmount: number;
						public setNegotiatedExtensions(param0: string): void;
						public getProtocol(): string;
						public constructor();
						public getEnabledExtensions(): string;
						public getNegotiatedExtensions(): string;
						public constructor(param0: org.kaazing.gateway.client.impl.util.WSURI);
						public setLocation(param0: org.kaazing.gateway.client.impl.util.WSURI): void;
						public getFollowRedirect(): org.kaazing.net.http.HttpRedirectPolicy;
						public getLocation(): org.kaazing.gateway.client.impl.util.WSURI;
						public toString(): string;
						public getBufferedAmount(): number;
						public setEnabledExtensions(param0: string): void;
						public setFollowRedirect(param0: org.kaazing.net.http.HttpRedirectPolicy): void;
						public setProtocol(param0: string): void;
						public constructor(param0: number);
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export class WebSocketHandler extends org.kaazing.gateway.client.impl.Handler {
						public static class: java.lang.Class<org.kaazing.gateway.client.impl.WebSocketHandler>;
						/**
						 * Constructs a new instance of the org.kaazing.gateway.client.impl.WebSocketHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							processConnect(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: org.kaazing.gateway.client.impl.util.WSURI, param2: native.Array<string>): void;
							processAuthorize(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: string): void;
							processTextMessage(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: string): void;
							processBinaryMessage(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: org.kaazing.gateway.client.util.WrappedByteBuffer): void;
							processClose(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: number, param2: string): void;
							setListener(param0: org.kaazing.gateway.client.impl.WebSocketHandlerListener): void;
							setIdleTimeout(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: number): void;
						});
						public constructor();
						public processTextMessage(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: string): void;
						public setListener(param0: org.kaazing.gateway.client.impl.WebSocketHandlerListener): void;
						public processConnect(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: org.kaazing.gateway.client.impl.util.WSURI, param2: native.Array<string>): void;
						public processBinaryMessage(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: org.kaazing.gateway.client.util.WrappedByteBuffer): void;
						public processAuthorize(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: string): void;
						public setIdleTimeout(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: number): void;
						public processClose(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: number, param2: string): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export class WebSocketHandlerAdapter extends org.kaazing.gateway.client.impl.WebSocketHandler {
						public static class: java.lang.Class<org.kaazing.gateway.client.impl.WebSocketHandlerAdapter>;
						public nextHandler: org.kaazing.gateway.client.impl.WebSocketHandler;
						public listener: org.kaazing.gateway.client.impl.WebSocketHandlerListener;
						public constructor();
						public processTextMessage(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: string): void;
						public setNextHandler(param0: org.kaazing.gateway.client.impl.WebSocketHandler): void;
						public setListener(param0: org.kaazing.gateway.client.impl.WebSocketHandlerListener): void;
						public processConnect(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: org.kaazing.gateway.client.impl.util.WSURI, param2: native.Array<string>): void;
						public processBinaryMessage(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: org.kaazing.gateway.client.util.WrappedByteBuffer): void;
						public processAuthorize(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: string): void;
						public setIdleTimeout(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: number): void;
						public processClose(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: number, param2: string): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export class WebSocketHandlerFactory {
						public static class: java.lang.Class<org.kaazing.gateway.client.impl.WebSocketHandlerFactory>;
						/**
						 * Constructs a new instance of the org.kaazing.gateway.client.impl.WebSocketHandlerFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							createWebSocketHandler(): org.kaazing.gateway.client.impl.WebSocketHandler;
						});
						public constructor();
						public createWebSocketHandler(): org.kaazing.gateway.client.impl.WebSocketHandler;
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export class WebSocketHandlerListener {
						public static class: java.lang.Class<org.kaazing.gateway.client.impl.WebSocketHandlerListener>;
						/**
						 * Constructs a new instance of the org.kaazing.gateway.client.impl.WebSocketHandlerListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							connectionOpened(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: string): void;
							connectionClosed(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: boolean, param2: number, param3: string): void;
							connectionClosed(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: java.lang.Exception): void;
							connectionFailed(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: java.lang.Exception): void;
							redirected(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: string): void;
							authenticationRequested(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: string, param2: string): void;
							textMessageReceived(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: string): void;
							binaryMessageReceived(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: org.kaazing.gateway.client.util.WrappedByteBuffer): void;
							commandMessageReceived(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: org.kaazing.gateway.client.impl.CommandMessage): void;
						});
						public constructor();
						public connectionOpened(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: string): void;
						public connectionClosed(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: boolean, param2: number, param3: string): void;
						public connectionFailed(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: java.lang.Exception): void;
						public binaryMessageReceived(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: org.kaazing.gateway.client.util.WrappedByteBuffer): void;
						public commandMessageReceived(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: org.kaazing.gateway.client.impl.CommandMessage): void;
						public authenticationRequested(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: string, param2: string): void;
						public textMessageReceived(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: string): void;
						public connectionClosed(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: java.lang.Exception): void;
						public redirected(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: string): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export module auth {
						export class AuthenticationUtil {
							public static class: java.lang.Class<org.kaazing.gateway.client.impl.auth.AuthenticationUtil>;
							public static getChallengeResponse(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: org.kaazing.net.auth.ChallengeRequest, param2: org.kaazing.net.auth.ChallengeResponse): org.kaazing.net.auth.ChallengeResponse;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export module bridge {
						export class BridgeUtil {
							public static class: java.lang.Class<org.kaazing.gateway.client.impl.bridge.BridgeUtil>;
							public constructor();
							public static eventReceived(param0: java.lang.Integer, param1: string, param2: native.Array<any>): void;
							public static getIdentifier(): any;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export module bridge {
						export abstract class ClassLoaderFactory {
							public static class: java.lang.Class<org.kaazing.gateway.client.impl.bridge.ClassLoaderFactory>;
							public constructor();
							public static getInstance(): org.kaazing.gateway.client.impl.bridge.ClassLoaderFactory;
							public createClassLoader(param0: java.net.URL, param1: java.lang.ClassLoader): java.lang.ClassLoader;
							public static setInstance(param0: org.kaazing.gateway.client.impl.bridge.ClassLoaderFactory): void;
							public getQueryParameters(): string;
							public getCrossOriginProxyClass(): string;
						}
						export module ClassLoaderFactory {
							export class DefaultClassLoaderFactory extends org.kaazing.gateway.client.impl.bridge.ClassLoaderFactory {
								public static class: java.lang.Class<org.kaazing.gateway.client.impl.bridge.ClassLoaderFactory.DefaultClassLoaderFactory>;
								public getQueryParameters(): string;
								public getCrossOriginProxyClass(): string;
								public createClassLoader(param0: java.net.URL, param1: java.lang.ClassLoader): java.lang.ClassLoader;
							}
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export module bridge {
						export class HttpRequestBridgeHandler implements org.kaazing.gateway.client.impl.http.HttpRequestHandler, org.kaazing.gateway.client.impl.bridge.ProxyListener {
							public static class: java.lang.Class<org.kaazing.gateway.client.impl.bridge.HttpRequestBridgeHandler>;
							public constructor();
							public processAbort(param0: org.kaazing.gateway.client.impl.http.HttpRequest): void;
							public eventReceived(param0: org.kaazing.gateway.client.impl.bridge.Proxy, param1: org.kaazing.gateway.client.impl.bridge.XoaEvent.XoaEventKind, param2: native.Array<any>): void;
							public static parseResponseHeaders(param0: org.kaazing.gateway.client.impl.http.HttpResponse, param1: string): void;
							public processSend(param0: org.kaazing.gateway.client.impl.http.HttpRequest, param1: org.kaazing.gateway.client.util.WrappedByteBuffer): void;
							public setListener(param0: org.kaazing.gateway.client.impl.http.HttpRequestListener): void;
							public processOpen(param0: org.kaazing.gateway.client.impl.http.HttpRequest): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export module bridge {
						export class Proxy {
							public static class: java.lang.Class<org.kaazing.gateway.client.impl.bridge.Proxy>;
							public constructor();
							public setHandlerId(param0: java.lang.Integer): void;
							public getHandlerId(): java.lang.Integer;
							public setPeer(param0: any): void;
							public getPeer(): any;
							public toString(): string;
							public getUri(): java.net.URI;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export module bridge {
						export class ProxyListener {
							public static class: java.lang.Class<org.kaazing.gateway.client.impl.bridge.ProxyListener>;
							/**
							 * Constructs a new instance of the org.kaazing.gateway.client.impl.bridge.ProxyListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								eventReceived(param0: org.kaazing.gateway.client.impl.bridge.Proxy, param1: org.kaazing.gateway.client.impl.bridge.XoaEvent.XoaEventKind, param2: native.Array<any>): void;
							});
							public constructor();
							public eventReceived(param0: org.kaazing.gateway.client.impl.bridge.Proxy, param1: org.kaazing.gateway.client.impl.bridge.XoaEvent.XoaEventKind, param2: native.Array<any>): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export module bridge {
						export class WebSocketNativeBridgeHandler implements org.kaazing.gateway.client.impl.WebSocketHandler, org.kaazing.gateway.client.impl.bridge.ProxyListener {
							public static class: java.lang.Class<org.kaazing.gateway.client.impl.bridge.WebSocketNativeBridgeHandler>;
							public constructor();
							public eventReceived(param0: org.kaazing.gateway.client.impl.bridge.Proxy, param1: org.kaazing.gateway.client.impl.bridge.XoaEvent.XoaEventKind, param2: native.Array<any>): void;
							public processTextMessage(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: string): void;
							public setIdleTimeout(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: number): void;
							public setListener(param0: org.kaazing.gateway.client.impl.WebSocketHandlerListener): void;
							public processAuthorize(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: string): void;
							public processClose(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: number, param2: string): void;
							public processConnect(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: org.kaazing.gateway.client.impl.util.WSURI, param2: native.Array<string>): void;
							public processBinaryMessage(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: org.kaazing.gateway.client.util.WrappedByteBuffer): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export module bridge {
						export class XoaEvent {
							public static class: java.lang.Class<org.kaazing.gateway.client.impl.bridge.XoaEvent>;
							public static EMPTY_ARGS: native.Array<string>;
							public constructor(param0: java.lang.Integer, param1: org.kaazing.gateway.client.impl.bridge.XoaEvent.XoaEventKind, param2: native.Array<any>);
							public getParams(): native.Array<any>;
							public getHandlerId(): java.lang.Integer;
							public toString(): string;
							public getKind(): org.kaazing.gateway.client.impl.bridge.XoaEvent.XoaEventKind;
						}
						export module XoaEvent {
							export class XoaEventKind {
								public static class: java.lang.Class<org.kaazing.gateway.client.impl.bridge.XoaEvent.XoaEventKind>;
								public static OPEN: org.kaazing.gateway.client.impl.bridge.XoaEvent.XoaEventKind;
								public static MESSAGE: org.kaazing.gateway.client.impl.bridge.XoaEvent.XoaEventKind;
								public static CLOSED: org.kaazing.gateway.client.impl.bridge.XoaEvent.XoaEventKind;
								public static REDIRECT: org.kaazing.gateway.client.impl.bridge.XoaEvent.XoaEventKind;
								public static AUTHENTICATE: org.kaazing.gateway.client.impl.bridge.XoaEvent.XoaEventKind;
								public static AUTHORIZE: org.kaazing.gateway.client.impl.bridge.XoaEvent.XoaEventKind;
								public static LOAD: org.kaazing.gateway.client.impl.bridge.XoaEvent.XoaEventKind;
								public static PROGRESS: org.kaazing.gateway.client.impl.bridge.XoaEvent.XoaEventKind;
								public static READYSTATECHANGE: org.kaazing.gateway.client.impl.bridge.XoaEvent.XoaEventKind;
								public static ERROR: org.kaazing.gateway.client.impl.bridge.XoaEvent.XoaEventKind;
								public static ABORT: org.kaazing.gateway.client.impl.bridge.XoaEvent.XoaEventKind;
								public static CREATE: org.kaazing.gateway.client.impl.bridge.XoaEvent.XoaEventKind;
								public static POSTMESSAGE: org.kaazing.gateway.client.impl.bridge.XoaEvent.XoaEventKind;
								public static DISCONNECT: org.kaazing.gateway.client.impl.bridge.XoaEvent.XoaEventKind;
								public static SEND: org.kaazing.gateway.client.impl.bridge.XoaEvent.XoaEventKind;
								public static GETRESPONSEHEADER: org.kaazing.gateway.client.impl.bridge.XoaEvent.XoaEventKind;
								public static GEALLRESPONSEHEADERS: org.kaazing.gateway.client.impl.bridge.XoaEvent.XoaEventKind;
								public static SETREQUESTHEADER: org.kaazing.gateway.client.impl.bridge.XoaEvent.XoaEventKind;
								public static UNDEFINED: org.kaazing.gateway.client.impl.bridge.XoaEvent.XoaEventKind;
								public toString(): string;
								public static valueOf(param0: string): org.kaazing.gateway.client.impl.bridge.XoaEvent.XoaEventKind;
								public static getName(param0: string): org.kaazing.gateway.client.impl.bridge.XoaEvent.XoaEventKind;
								public static values(): native.Array<org.kaazing.gateway.client.impl.bridge.XoaEvent.XoaEventKind>;
							}
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export module http {
						export class HttpRequest {
							public static class: java.lang.Class<org.kaazing.gateway.client.impl.http.HttpRequest>;
							public static HTTP_REQUEST_FACTORY: org.kaazing.gateway.client.impl.http.HttpRequestFactory;
							public parent: org.kaazing.gateway.client.impl.Channel;
							public getProxy(): any;
							public getReadyState(): org.kaazing.gateway.client.impl.http.HttpRequest.ReadyState;
							public getUri(): org.kaazing.gateway.client.util.HttpURI;
							public setReadyState(param0: org.kaazing.gateway.client.impl.http.HttpRequest.ReadyState): void;
							public getHeaders(): java.util.Map<string,string>;
							public isAsync(): boolean;
							public toString(): string;
							public getMethod(): org.kaazing.gateway.client.impl.http.HttpRequest.Method;
							public getResponse(): org.kaazing.gateway.client.impl.http.HttpResponse;
							public setHeader(param0: string, param1: string): void;
							public constructor(param0: org.kaazing.gateway.client.impl.http.HttpRequest.Method, param1: org.kaazing.gateway.client.util.HttpURI, param2: boolean);
							public setProxy(param0: any): void;
							public constructor(param0: org.kaazing.gateway.client.impl.http.HttpRequest.Method, param1: org.kaazing.gateway.client.util.HttpURI);
							public setResponse(param0: org.kaazing.gateway.client.impl.http.HttpResponse): void;
						}
						export module HttpRequest {
							export class Method {
								public static class: java.lang.Class<org.kaazing.gateway.client.impl.http.HttpRequest.Method>;
								public static GET: org.kaazing.gateway.client.impl.http.HttpRequest.Method;
								public static POST: org.kaazing.gateway.client.impl.http.HttpRequest.Method;
								public static valueOf(param0: string): org.kaazing.gateway.client.impl.http.HttpRequest.Method;
								public static values(): native.Array<org.kaazing.gateway.client.impl.http.HttpRequest.Method>;
							}
							export class ReadyState {
								public static class: java.lang.Class<org.kaazing.gateway.client.impl.http.HttpRequest.ReadyState>;
								public static UNSENT: org.kaazing.gateway.client.impl.http.HttpRequest.ReadyState;
								public static READY: org.kaazing.gateway.client.impl.http.HttpRequest.ReadyState;
								public static SENDING: org.kaazing.gateway.client.impl.http.HttpRequest.ReadyState;
								public static SENT: org.kaazing.gateway.client.impl.http.HttpRequest.ReadyState;
								public static OPENED: org.kaazing.gateway.client.impl.http.HttpRequest.ReadyState;
								public static LOADING: org.kaazing.gateway.client.impl.http.HttpRequest.ReadyState;
								public static LOADED: org.kaazing.gateway.client.impl.http.HttpRequest.ReadyState;
								public static ERROR: org.kaazing.gateway.client.impl.http.HttpRequest.ReadyState;
								public static values(): native.Array<org.kaazing.gateway.client.impl.http.HttpRequest.ReadyState>;
								public static valueOf(param0: string): org.kaazing.gateway.client.impl.http.HttpRequest.ReadyState;
							}
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export module http {
						export class HttpRequestAuthenticationHandler extends org.kaazing.gateway.client.impl.http.HttpRequestHandlerAdapter {
							public static class: java.lang.Class<org.kaazing.gateway.client.impl.http.HttpRequestAuthenticationHandler>;
							public constructor();
							public processAbort(param0: org.kaazing.gateway.client.impl.http.HttpRequest): void;
							public static isHTTPResponse(param0: org.kaazing.gateway.client.util.WrappedByteBuffer): boolean;
							public processSend(param0: org.kaazing.gateway.client.impl.http.HttpRequest, param1: org.kaazing.gateway.client.util.WrappedByteBuffer): void;
							public static getLines(param0: org.kaazing.gateway.client.util.WrappedByteBuffer): native.Array<string>;
							public setListener(param0: org.kaazing.gateway.client.impl.http.HttpRequestListener): void;
							public setNextHandler(param0: org.kaazing.gateway.client.impl.http.HttpRequestHandler): void;
							public processOpen(param0: org.kaazing.gateway.client.impl.http.HttpRequest): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export module http {
						export class HttpRequestDelegateHandler extends org.kaazing.gateway.client.impl.http.HttpRequestHandler {
							public static class: java.lang.Class<org.kaazing.gateway.client.impl.http.HttpRequestDelegateHandler>;
							public constructor();
							public processAbort(param0: org.kaazing.gateway.client.impl.http.HttpRequest): void;
							public processSend(param0: org.kaazing.gateway.client.impl.http.HttpRequest, param1: org.kaazing.gateway.client.util.WrappedByteBuffer): void;
							public setListener(param0: org.kaazing.gateway.client.impl.http.HttpRequestListener): void;
							public processOpen(param0: org.kaazing.gateway.client.impl.http.HttpRequest): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export module http {
						export class HttpRequestEvent {
							public static class: java.lang.Class<org.kaazing.gateway.client.impl.http.HttpRequestEvent>;
							public constructor(param0: org.kaazing.gateway.client.impl.http.HttpRequest, param1: org.kaazing.gateway.client.impl.http.HttpRequestEvent.Kind, param2: org.kaazing.gateway.client.util.WrappedByteBuffer);
							public getSource(): org.kaazing.gateway.client.impl.http.HttpRequest;
							public getData(): org.kaazing.gateway.client.util.WrappedByteBuffer;
							public constructor(param0: org.kaazing.gateway.client.impl.http.HttpRequest, param1: org.kaazing.gateway.client.impl.http.HttpRequestEvent.Kind);
							public getKind(): org.kaazing.gateway.client.impl.http.HttpRequestEvent.Kind;
						}
						export module HttpRequestEvent {
							export class Kind {
								public static class: java.lang.Class<org.kaazing.gateway.client.impl.http.HttpRequestEvent.Kind>;
								public static OPEN: org.kaazing.gateway.client.impl.http.HttpRequestEvent.Kind;
								public static LOAD: org.kaazing.gateway.client.impl.http.HttpRequestEvent.Kind;
								public static PROGRESS: org.kaazing.gateway.client.impl.http.HttpRequestEvent.Kind;
								public static ERROR: org.kaazing.gateway.client.impl.http.HttpRequestEvent.Kind;
								public static READYSTATECHANGE: org.kaazing.gateway.client.impl.http.HttpRequestEvent.Kind;
								public static ABORT: org.kaazing.gateway.client.impl.http.HttpRequestEvent.Kind;
								public static values(): native.Array<org.kaazing.gateway.client.impl.http.HttpRequestEvent.Kind>;
								public static valueOf(param0: string): org.kaazing.gateway.client.impl.http.HttpRequestEvent.Kind;
							}
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export module http {
						export class HttpRequestFactory {
							public static class: java.lang.Class<org.kaazing.gateway.client.impl.http.HttpRequestFactory>;
							/**
							 * Constructs a new instance of the org.kaazing.gateway.client.impl.http.HttpRequestFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								createHttpRequest(param0: org.kaazing.gateway.client.impl.http.HttpRequest.Method, param1: org.kaazing.gateway.client.util.HttpURI, param2: boolean): org.kaazing.gateway.client.impl.http.HttpRequest;
							});
							public constructor();
							public createHttpRequest(param0: org.kaazing.gateway.client.impl.http.HttpRequest.Method, param1: org.kaazing.gateway.client.util.HttpURI, param2: boolean): org.kaazing.gateway.client.impl.http.HttpRequest;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export module http {
						export class HttpRequestHandler {
							public static class: java.lang.Class<org.kaazing.gateway.client.impl.http.HttpRequestHandler>;
							/**
							 * Constructs a new instance of the org.kaazing.gateway.client.impl.http.HttpRequestHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								processOpen(param0: org.kaazing.gateway.client.impl.http.HttpRequest): void;
								processSend(param0: org.kaazing.gateway.client.impl.http.HttpRequest, param1: org.kaazing.gateway.client.util.WrappedByteBuffer): void;
								processAbort(param0: org.kaazing.gateway.client.impl.http.HttpRequest): void;
								setListener(param0: org.kaazing.gateway.client.impl.http.HttpRequestListener): void;
							});
							public constructor();
							public processAbort(param0: org.kaazing.gateway.client.impl.http.HttpRequest): void;
							public processSend(param0: org.kaazing.gateway.client.impl.http.HttpRequest, param1: org.kaazing.gateway.client.util.WrappedByteBuffer): void;
							public setListener(param0: org.kaazing.gateway.client.impl.http.HttpRequestListener): void;
							public processOpen(param0: org.kaazing.gateway.client.impl.http.HttpRequest): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export module http {
						export class HttpRequestHandlerAdapter extends org.kaazing.gateway.client.impl.http.HttpRequestHandler {
							public static class: java.lang.Class<org.kaazing.gateway.client.impl.http.HttpRequestHandlerAdapter>;
							public nextHandler: org.kaazing.gateway.client.impl.http.HttpRequestHandler;
							public listener: org.kaazing.gateway.client.impl.http.HttpRequestListener;
							public constructor();
							public processAbort(param0: org.kaazing.gateway.client.impl.http.HttpRequest): void;
							public getWebSocketChannel(param0: org.kaazing.gateway.client.impl.http.HttpRequest): org.kaazing.gateway.client.impl.Channel;
							public processSend(param0: org.kaazing.gateway.client.impl.http.HttpRequest, param1: org.kaazing.gateway.client.util.WrappedByteBuffer): void;
							public setListener(param0: org.kaazing.gateway.client.impl.http.HttpRequestListener): void;
							public setNextHandler(param0: org.kaazing.gateway.client.impl.http.HttpRequestHandler): void;
							public isWebSocketClosing(param0: org.kaazing.gateway.client.impl.http.HttpRequest): boolean;
							public processOpen(param0: org.kaazing.gateway.client.impl.http.HttpRequest): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export module http {
						export class HttpRequestHandlerFactory {
							public static class: java.lang.Class<org.kaazing.gateway.client.impl.http.HttpRequestHandlerFactory>;
							/**
							 * Constructs a new instance of the org.kaazing.gateway.client.impl.http.HttpRequestHandlerFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								createHandler(): org.kaazing.gateway.client.impl.http.HttpRequestHandler;
							});
							public constructor();
							public createHandler(): org.kaazing.gateway.client.impl.http.HttpRequestHandler;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export module http {
						export class HttpRequestListener {
							public static class: java.lang.Class<org.kaazing.gateway.client.impl.http.HttpRequestListener>;
							/**
							 * Constructs a new instance of the org.kaazing.gateway.client.impl.http.HttpRequestListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								requestReady(param0: org.kaazing.gateway.client.impl.http.HttpRequest): void;
								requestOpened(param0: org.kaazing.gateway.client.impl.http.HttpRequest): void;
								requestProgressed(param0: org.kaazing.gateway.client.impl.http.HttpRequest, param1: org.kaazing.gateway.client.util.WrappedByteBuffer): void;
								requestLoaded(param0: org.kaazing.gateway.client.impl.http.HttpRequest, param1: org.kaazing.gateway.client.impl.http.HttpResponse): void;
								requestAborted(param0: org.kaazing.gateway.client.impl.http.HttpRequest): void;
								requestClosed(param0: org.kaazing.gateway.client.impl.http.HttpRequest): void;
								errorOccurred(param0: org.kaazing.gateway.client.impl.http.HttpRequest, param1: java.lang.Exception): void;
							});
							public constructor();
							public requestLoaded(param0: org.kaazing.gateway.client.impl.http.HttpRequest, param1: org.kaazing.gateway.client.impl.http.HttpResponse): void;
							public errorOccurred(param0: org.kaazing.gateway.client.impl.http.HttpRequest, param1: java.lang.Exception): void;
							public requestClosed(param0: org.kaazing.gateway.client.impl.http.HttpRequest): void;
							public requestOpened(param0: org.kaazing.gateway.client.impl.http.HttpRequest): void;
							public requestProgressed(param0: org.kaazing.gateway.client.impl.http.HttpRequest, param1: org.kaazing.gateway.client.util.WrappedByteBuffer): void;
							public requestAborted(param0: org.kaazing.gateway.client.impl.http.HttpRequest): void;
							public requestReady(param0: org.kaazing.gateway.client.impl.http.HttpRequest): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export module http {
						export class HttpRequestLoggingHandler extends org.kaazing.gateway.client.impl.http.HttpRequestHandlerAdapter {
							public static class: java.lang.Class<org.kaazing.gateway.client.impl.http.HttpRequestLoggingHandler>;
							public constructor();
							public processAbort(param0: org.kaazing.gateway.client.impl.http.HttpRequest): void;
							public processSend(param0: org.kaazing.gateway.client.impl.http.HttpRequest, param1: org.kaazing.gateway.client.util.WrappedByteBuffer): void;
							public setListener(param0: org.kaazing.gateway.client.impl.http.HttpRequestListener): void;
							public setNextHandler(param0: org.kaazing.gateway.client.impl.http.HttpRequestHandler): void;
							public processOpen(param0: org.kaazing.gateway.client.impl.http.HttpRequest): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export module http {
						export class HttpRequestRedirectHandler extends org.kaazing.gateway.client.impl.http.HttpRequestHandlerAdapter {
							public static class: java.lang.Class<org.kaazing.gateway.client.impl.http.HttpRequestRedirectHandler>;
							public constructor();
							public processAbort(param0: org.kaazing.gateway.client.impl.http.HttpRequest): void;
							public processSend(param0: org.kaazing.gateway.client.impl.http.HttpRequest, param1: org.kaazing.gateway.client.util.WrappedByteBuffer): void;
							public setListener(param0: org.kaazing.gateway.client.impl.http.HttpRequestListener): void;
							public setNextHandler(param0: org.kaazing.gateway.client.impl.http.HttpRequestHandler): void;
							public processOpen(param0: org.kaazing.gateway.client.impl.http.HttpRequest): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export module http {
						export class HttpRequestTransportHandler extends org.kaazing.gateway.client.impl.http.HttpRequestHandlerAdapter {
							public static class: java.lang.Class<org.kaazing.gateway.client.impl.http.HttpRequestTransportHandler>;
							public static DEFAULT_FACTORY: org.kaazing.gateway.client.impl.http.HttpRequestHandlerFactory;
							public constructor();
							public processAbort(param0: org.kaazing.gateway.client.impl.http.HttpRequest): void;
							public processSend(param0: org.kaazing.gateway.client.impl.http.HttpRequest, param1: org.kaazing.gateway.client.util.WrappedByteBuffer): void;
							public setListener(param0: org.kaazing.gateway.client.impl.http.HttpRequestListener): void;
							public processOpen(param0: org.kaazing.gateway.client.impl.http.HttpRequest): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export module http {
						export class HttpRequestUtil {
							public static class: java.lang.Class<org.kaazing.gateway.client.impl.http.HttpRequestUtil>;
							public static validateHeader(param0: string): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export module http {
						export class HttpResponse {
							public static class: java.lang.Class<org.kaazing.gateway.client.impl.http.HttpResponse>;
							public constructor();
							public getStatusCode(): number;
							public setBody(param0: org.kaazing.gateway.client.util.WrappedByteBuffer): void;
							public getBody(): org.kaazing.gateway.client.util.WrappedByteBuffer;
							public getHeader(param0: string): string;
							public toString(): string;
							public setMessage(param0: string): void;
							public setHeader(param0: string, param1: string): string;
							public getMessage(): string;
							public setStatusCode(param0: number): void;
							public getAllHeaders(): string;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export module util {
						export class WSCompositeURI extends org.kaazing.gateway.client.util.GenericURI<org.kaazing.gateway.client.impl.util.WSCompositeURI> {
							public static class: java.lang.Class<org.kaazing.gateway.client.impl.util.WSCompositeURI>;
							public duplicate(param0: java.net.URI): org.kaazing.gateway.client.impl.util.WSCompositeURI;
							public constructor(param0: string);
							public constructor(param0: java.net.URI);
							public duplicate(param0: java.net.URI): any;
							public isValidScheme(param0: string): boolean;
							public getWSEquivalent(): org.kaazing.gateway.client.impl.util.WSURI;
							public isSecure(): boolean;
							public getScheme(): string;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export module util {
						export class WSURI extends org.kaazing.gateway.client.util.GenericURI<org.kaazing.gateway.client.impl.util.WSURI> {
							public static class: java.lang.Class<org.kaazing.gateway.client.impl.util.WSURI>;
							public constructor(param0: string);
							public constructor(param0: java.net.URI);
							public duplicate(param0: java.net.URI): any;
							public isValidScheme(param0: string): boolean;
							public getHttpEquivalentScheme(): string;
							public duplicate(param0: java.net.URI): org.kaazing.gateway.client.impl.util.WSURI;
							public isSecure(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export module util {
						export class WebSocketUtil {
							public static class: java.lang.Class<org.kaazing.gateway.client.impl.util.WebSocketUtil>;
							public constructor();
							public static encodeLength(param0: java.io.ByteArrayOutputStream, param1: number): void;
							public static encodeLength(param0: org.kaazing.gateway.client.util.WrappedByteBuffer, param1: number): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export module ws {
						export class CloseCommandMessage extends org.kaazing.gateway.client.impl.CommandMessage {
							public static class: java.lang.Class<org.kaazing.gateway.client.impl.ws.CloseCommandMessage>;
							public static CLOSE_NO_STATUS: number;
							public static CLOSE_ABNORMAL: number;
							public getCode(): number;
							public constructor(param0: number, param1: string);
							public getReason(): string;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export module ws {
						export class ReadyState {
							public static class: java.lang.Class<org.kaazing.gateway.client.impl.ws.ReadyState>;
							public static CONNECTING: org.kaazing.gateway.client.impl.ws.ReadyState;
							public static OPEN: org.kaazing.gateway.client.impl.ws.ReadyState;
							public static CLOSING: org.kaazing.gateway.client.impl.ws.ReadyState;
							public static CLOSED: org.kaazing.gateway.client.impl.ws.ReadyState;
							public static valueOf(param0: string): org.kaazing.gateway.client.impl.ws.ReadyState;
							public static values(): native.Array<org.kaazing.gateway.client.impl.ws.ReadyState>;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export module ws {
						export class WebSocketCompositeChannel extends org.kaazing.gateway.client.impl.WebSocketChannel {
							public static class: java.lang.Class<org.kaazing.gateway.client.impl.ws.WebSocketCompositeChannel>;
							public selectedChannel: org.kaazing.gateway.client.impl.ws.WebSocketSelectedChannel;
							public connectionStrategies: java.util.List<string>;
							public readyState: org.kaazing.gateway.client.impl.ws.ReadyState;
							public closing: boolean;
							public constructor();
							public setChallengeHandler(param0: org.kaazing.net.auth.ChallengeHandler): void;
							public getReadyState(): org.kaazing.gateway.client.impl.ws.ReadyState;
							public getChallengeHandler(): org.kaazing.net.auth.ChallengeHandler;
							public setWebSocket(param0: any): void;
							public getWebSocket(): any;
							public constructor(param0: number);
							public setConnectTimer(param0: org.kaazing.net.impl.util.ResumableTimer): void;
							public constructor(param0: org.kaazing.gateway.client.impl.util.WSURI);
							public getOrigin(): string;
							public constructor(param0: org.kaazing.gateway.client.impl.util.WSCompositeURI);
							public getURL(): java.net.URI;
							public getNextStrategy(): string;
							public getCompositeScheme(): string;
							public getConnectTimer(): org.kaazing.net.impl.util.ResumableTimer;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export module ws {
						export class WebSocketCompositeHandler extends org.kaazing.gateway.client.impl.WebSocketHandler {
							public static class: java.lang.Class<org.kaazing.gateway.client.impl.ws.WebSocketCompositeHandler>;
							public static COMPOSITE_HANDLER: org.kaazing.gateway.client.impl.ws.WebSocketCompositeHandler;
							public constructor();
							public doClose(param0: org.kaazing.gateway.client.impl.ws.WebSocketCompositeChannel, param1: java.lang.Exception): void;
							public processTextMessage(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: string): void;
							public doClose(param0: org.kaazing.gateway.client.impl.ws.WebSocketCompositeChannel, param1: boolean, param2: number, param3: string): void;
							public setIdleTimeout(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: number): void;
							public setListener(param0: org.kaazing.gateway.client.impl.WebSocketHandlerListener): void;
							public processAuthorize(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: string): void;
							public processClose(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: number, param2: string): void;
							public processConnect(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: org.kaazing.gateway.client.impl.util.WSURI, param2: native.Array<string>): void;
							public processBinaryMessage(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: org.kaazing.gateway.client.util.WrappedByteBuffer): void;
						}
						export module WebSocketCompositeHandler {
							export class WebSocketSelectedChannelFactory {
								public static class: java.lang.Class<org.kaazing.gateway.client.impl.ws.WebSocketCompositeHandler.WebSocketSelectedChannelFactory>;
								/**
								 * Constructs a new instance of the org.kaazing.gateway.client.impl.ws.WebSocketCompositeHandler$WebSocketSelectedChannelFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									createChannel(param0: org.kaazing.gateway.client.impl.util.WSURI): org.kaazing.gateway.client.impl.ws.WebSocketSelectedChannel;
								});
								public constructor();
								public createChannel(param0: org.kaazing.gateway.client.impl.util.WSURI): org.kaazing.gateway.client.impl.ws.WebSocketSelectedChannel;
							}
							export class WebSocketStrategy {
								public static class: java.lang.Class<org.kaazing.gateway.client.impl.ws.WebSocketCompositeHandler.WebSocketStrategy>;
							}
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export module ws {
						export class WebSocketHandshakeObject {
							public static class: java.lang.Class<org.kaazing.gateway.client.impl.ws.WebSocketHandshakeObject>;
							public static KAAZING_EXTENDED_HANDSHAKE: string;
							public static KAAZING_SEC_EXTENSION_IDLETIMEOUT: string;
							public constructor();
							public setEscape(param0: string): void;
							public getName(): string;
							public setStatus(param0: org.kaazing.gateway.client.impl.ws.WebSocketHandshakeObject.HandshakeStatus): void;
							public setName(param0: string): void;
							public getStatus(): org.kaazing.gateway.client.impl.ws.WebSocketHandshakeObject.HandshakeStatus;
							public getEscape(): string;
						}
						export module WebSocketHandshakeObject {
							export class HandshakeStatus {
								public static class: java.lang.Class<org.kaazing.gateway.client.impl.ws.WebSocketHandshakeObject.HandshakeStatus>;
								public static Pending: org.kaazing.gateway.client.impl.ws.WebSocketHandshakeObject.HandshakeStatus;
								public static Accepted: org.kaazing.gateway.client.impl.ws.WebSocketHandshakeObject.HandshakeStatus;
								public static valueOf(param0: string): org.kaazing.gateway.client.impl.ws.WebSocketHandshakeObject.HandshakeStatus;
								public static values(): native.Array<org.kaazing.gateway.client.impl.ws.WebSocketHandshakeObject.HandshakeStatus>;
							}
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export module ws {
						export class WebSocketLoggingHandler extends org.kaazing.gateway.client.impl.WebSocketHandlerAdapter {
							public static class: java.lang.Class<org.kaazing.gateway.client.impl.ws.WebSocketLoggingHandler>;
							public constructor();
							public setNextHandler(param0: org.kaazing.gateway.client.impl.WebSocketHandler): void;
							public processTextMessage(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: string): void;
							public setIdleTimeout(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: number): void;
							public setListener(param0: org.kaazing.gateway.client.impl.WebSocketHandlerListener): void;
							public processAuthorize(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: string): void;
							public processClose(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: number, param2: string): void;
							public processConnect(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: org.kaazing.gateway.client.impl.util.WSURI, param2: native.Array<string>): void;
							public processBinaryMessage(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: org.kaazing.gateway.client.util.WrappedByteBuffer): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export module ws {
						export class WebSocketReAuthenticateHandler extends org.kaazing.gateway.client.impl.Handler {
							public static class: java.lang.Class<org.kaazing.gateway.client.impl.ws.WebSocketReAuthenticateHandler>;
							public constructor();
							public processOpen(param0: org.kaazing.gateway.client.impl.Channel, param1: org.kaazing.gateway.client.util.HttpURI): void;
							public setNextHandler(param0: org.kaazing.gateway.client.impl.http.HttpRequestHandler): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export module ws {
						export abstract class WebSocketSelectedChannel extends org.kaazing.gateway.client.impl.WebSocketChannel {
							public static class: java.lang.Class<org.kaazing.gateway.client.impl.ws.WebSocketSelectedChannel>;
							public readyState: org.kaazing.gateway.client.impl.ws.ReadyState;
							public requestedProtocols: native.Array<string>;
							public constructor();
							public constructor(param0: org.kaazing.gateway.client.impl.util.WSURI);
							public getReadyState(): org.kaazing.gateway.client.impl.ws.ReadyState;
							public getRequestedProtocols(): native.Array<string>;
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export module ws {
						export class WebSocketSelectedHandler extends org.kaazing.gateway.client.impl.WebSocketHandler {
							public static class: java.lang.Class<org.kaazing.gateway.client.impl.ws.WebSocketSelectedHandler>;
							/**
							 * Constructs a new instance of the org.kaazing.gateway.client.impl.ws.WebSocketSelectedHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								setNextHandler(param0: org.kaazing.gateway.client.impl.WebSocketHandler): void;
								processConnect(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: org.kaazing.gateway.client.impl.util.WSURI, param2: native.Array<string>): void;
								processAuthorize(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: string): void;
								processTextMessage(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: string): void;
								processBinaryMessage(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: org.kaazing.gateway.client.util.WrappedByteBuffer): void;
								processClose(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: number, param2: string): void;
								setListener(param0: org.kaazing.gateway.client.impl.WebSocketHandlerListener): void;
								setIdleTimeout(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: number): void;
							});
							public constructor();
							public setNextHandler(param0: org.kaazing.gateway.client.impl.WebSocketHandler): void;
							public processTextMessage(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: string): void;
							public setIdleTimeout(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: number): void;
							public setListener(param0: org.kaazing.gateway.client.impl.WebSocketHandlerListener): void;
							public processAuthorize(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: string): void;
							public processClose(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: number, param2: string): void;
							public processConnect(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: org.kaazing.gateway.client.impl.util.WSURI, param2: native.Array<string>): void;
							public processBinaryMessage(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: org.kaazing.gateway.client.util.WrappedByteBuffer): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export module ws {
						export class WebSocketSelectedHandlerImpl extends org.kaazing.gateway.client.impl.WebSocketHandlerAdapter implements org.kaazing.gateway.client.impl.ws.WebSocketSelectedHandler {
							public static class: java.lang.Class<org.kaazing.gateway.client.impl.ws.WebSocketSelectedHandlerImpl>;
							public listener: org.kaazing.gateway.client.impl.WebSocketHandlerListener;
							public constructor();
							public handleConnectionClosed(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: java.lang.Exception): void;
							public handleConnectionClosed(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: boolean, param2: number, param3: string): void;
							public handleConnectionFailed(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: java.lang.Exception): void;
							public setListener(param0: org.kaazing.gateway.client.impl.WebSocketHandlerListener): void;
							public processClose(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: number, param2: string): void;
							public processConnect(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: org.kaazing.gateway.client.impl.util.WSURI, param2: native.Array<string>): void;
							public handleConnectionOpened(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: string): void;
							public handleTextMessageReceived(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: string): void;
							public setNextHandler(param0: org.kaazing.gateway.client.impl.WebSocketHandler): void;
							public handleBinaryMessageReceived(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: org.kaazing.gateway.client.util.WrappedByteBuffer): void;
							public processTextMessage(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: string): void;
							public setIdleTimeout(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: number): void;
							public processAuthorize(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: string): void;
							public processBinaryMessage(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: org.kaazing.gateway.client.util.WrappedByteBuffer): void;
						}
						export module WebSocketSelectedHandlerImpl {
							export class WebSocketSelectedHandlerFactory {
								public static class: java.lang.Class<org.kaazing.gateway.client.impl.ws.WebSocketSelectedHandlerImpl.WebSocketSelectedHandlerFactory>;
								/**
								 * Constructs a new instance of the org.kaazing.gateway.client.impl.ws.WebSocketSelectedHandlerImpl$WebSocketSelectedHandlerFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									createSelectedHandler(): org.kaazing.gateway.client.impl.ws.WebSocketSelectedHandler;
								});
								public constructor();
								public createSelectedHandler(): org.kaazing.gateway.client.impl.ws.WebSocketSelectedHandler;
							}
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export module ws {
						export class WebSocketTransportHandler extends org.kaazing.gateway.client.impl.WebSocketHandlerAdapter {
							public static class: java.lang.Class<org.kaazing.gateway.client.impl.ws.WebSocketTransportHandler>;
							public WEB_SOCKET_NATIVE_HANDLER: org.kaazing.gateway.client.impl.WebSocketHandler;
							public HTTP_REQUEST_HANDLER: org.kaazing.gateway.client.impl.http.HttpRequestHandler;
							public constructor();
							public static useBridge(param0: java.net.URI): boolean;
							public processTextMessage(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: string): void;
							public setIdleTimeout(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: number): void;
							public setListener(param0: org.kaazing.gateway.client.impl.WebSocketHandlerListener): void;
							public processAuthorize(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: string): void;
							public processClose(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: number, param2: string): void;
							public processConnect(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: org.kaazing.gateway.client.impl.util.WSURI, param2: native.Array<string>): void;
							public processBinaryMessage(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: org.kaazing.gateway.client.util.WrappedByteBuffer): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export module wseb {
						export class CreateChannel extends org.kaazing.gateway.client.impl.Channel {
							public static class: java.lang.Class<org.kaazing.gateway.client.impl.wseb.CreateChannel>;
							public cookie: string;
							public constructor();
							public getProtocols(): native.Array<string>;
							public getRequest(): org.kaazing.gateway.client.impl.http.HttpRequest;
							public setProtocols(param0: native.Array<string>): void;
							public setRequest(param0: org.kaazing.gateway.client.impl.http.HttpRequest): void;
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export module wseb {
						export class CreateHandler {
							public static class: java.lang.Class<org.kaazing.gateway.client.impl.wseb.CreateHandler>;
							/**
							 * Constructs a new instance of the org.kaazing.gateway.client.impl.wseb.CreateHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								setListener(param0: org.kaazing.gateway.client.impl.wseb.CreateHandlerListener): void;
								processOpen(param0: org.kaazing.gateway.client.impl.wseb.CreateChannel, param1: org.kaazing.gateway.client.util.HttpURI): void;
								processClose(param0: org.kaazing.gateway.client.impl.wseb.CreateChannel): void;
								setNextHandler(param0: org.kaazing.gateway.client.impl.http.HttpRequestHandler): void;
							});
							public constructor();
							public setListener(param0: org.kaazing.gateway.client.impl.wseb.CreateHandlerListener): void;
							public processOpen(param0: org.kaazing.gateway.client.impl.wseb.CreateChannel, param1: org.kaazing.gateway.client.util.HttpURI): void;
							public processClose(param0: org.kaazing.gateway.client.impl.wseb.CreateChannel): void;
							public setNextHandler(param0: org.kaazing.gateway.client.impl.http.HttpRequestHandler): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export module wseb {
						export class CreateHandlerFactory {
							public static class: java.lang.Class<org.kaazing.gateway.client.impl.wseb.CreateHandlerFactory>;
							/**
							 * Constructs a new instance of the org.kaazing.gateway.client.impl.wseb.CreateHandlerFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								createCreateHandler(): org.kaazing.gateway.client.impl.wseb.CreateHandler;
							});
							public constructor();
							public createCreateHandler(): org.kaazing.gateway.client.impl.wseb.CreateHandler;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export module wseb {
						export class CreateHandlerImpl extends org.kaazing.gateway.client.impl.wseb.CreateHandler {
							public static class: java.lang.Class<org.kaazing.gateway.client.impl.wseb.CreateHandlerImpl>;
							public constructor();
							public setListener(param0: org.kaazing.gateway.client.impl.wseb.CreateHandlerListener): void;
							public processOpen(param0: org.kaazing.gateway.client.impl.wseb.CreateChannel, param1: org.kaazing.gateway.client.util.HttpURI): void;
							public processClose(param0: org.kaazing.gateway.client.impl.wseb.CreateChannel): void;
							public setNextHandler(param0: org.kaazing.gateway.client.impl.http.HttpRequestHandler): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export module wseb {
						export class CreateHandlerListener {
							public static class: java.lang.Class<org.kaazing.gateway.client.impl.wseb.CreateHandlerListener>;
							/**
							 * Constructs a new instance of the org.kaazing.gateway.client.impl.wseb.CreateHandlerListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								createCompleted(param0: org.kaazing.gateway.client.impl.wseb.CreateChannel, param1: org.kaazing.gateway.client.util.HttpURI, param2: org.kaazing.gateway.client.util.HttpURI, param3: string): void;
								createFailed(param0: org.kaazing.gateway.client.impl.wseb.CreateChannel, param1: java.lang.Exception): void;
							});
							public constructor();
							public createCompleted(param0: org.kaazing.gateway.client.impl.wseb.CreateChannel, param1: org.kaazing.gateway.client.util.HttpURI, param2: org.kaazing.gateway.client.util.HttpURI, param3: string): void;
							public createFailed(param0: org.kaazing.gateway.client.impl.wseb.CreateChannel, param1: java.lang.Exception): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export module wseb {
						export class DownstreamChannel extends org.kaazing.gateway.client.impl.Channel {
							public static class: java.lang.Class<org.kaazing.gateway.client.impl.wseb.DownstreamChannel>;
							public protocol: string;
							public constructor();
							public constructor(param0: org.kaazing.gateway.client.util.HttpURI, param1: string);
							public constructor(param0: org.kaazing.gateway.client.util.HttpURI, param1: string, param2: number);
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export module wseb {
						export class DownstreamHandler {
							public static class: java.lang.Class<org.kaazing.gateway.client.impl.wseb.DownstreamHandler>;
							/**
							 * Constructs a new instance of the org.kaazing.gateway.client.impl.wseb.DownstreamHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								processConnect(param0: org.kaazing.gateway.client.impl.wseb.DownstreamChannel, param1: org.kaazing.gateway.client.util.HttpURI): void;
								processClose(param0: org.kaazing.gateway.client.impl.wseb.DownstreamChannel): void;
								setListener(param0: org.kaazing.gateway.client.impl.wseb.DownstreamHandlerListener): void;
								setNextHandler(param0: org.kaazing.gateway.client.impl.http.HttpRequestHandler): void;
							});
							public constructor();
							public processClose(param0: org.kaazing.gateway.client.impl.wseb.DownstreamChannel): void;
							public processConnect(param0: org.kaazing.gateway.client.impl.wseb.DownstreamChannel, param1: org.kaazing.gateway.client.util.HttpURI): void;
							public setNextHandler(param0: org.kaazing.gateway.client.impl.http.HttpRequestHandler): void;
							public setListener(param0: org.kaazing.gateway.client.impl.wseb.DownstreamHandlerListener): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export module wseb {
						export class DownstreamHandlerFactory {
							public static class: java.lang.Class<org.kaazing.gateway.client.impl.wseb.DownstreamHandlerFactory>;
							/**
							 * Constructs a new instance of the org.kaazing.gateway.client.impl.wseb.DownstreamHandlerFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								createDownstreamHandler(): org.kaazing.gateway.client.impl.wseb.DownstreamHandler;
							});
							public constructor();
							public createDownstreamHandler(): org.kaazing.gateway.client.impl.wseb.DownstreamHandler;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export module wseb {
						export class DownstreamHandlerImpl extends org.kaazing.gateway.client.impl.wseb.DownstreamHandler {
							public static class: java.lang.Class<org.kaazing.gateway.client.impl.wseb.DownstreamHandlerImpl>;
							public processClose(param0: org.kaazing.gateway.client.impl.wseb.DownstreamChannel): void;
							public processConnect(param0: org.kaazing.gateway.client.impl.wseb.DownstreamChannel, param1: org.kaazing.gateway.client.util.HttpURI): void;
							public setNextHandler(param0: org.kaazing.gateway.client.impl.http.HttpRequestHandler): void;
							public setListener(param0: org.kaazing.gateway.client.impl.wseb.DownstreamHandlerListener): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export module wseb {
						export class DownstreamHandlerListener {
							public static class: java.lang.Class<org.kaazing.gateway.client.impl.wseb.DownstreamHandlerListener>;
							/**
							 * Constructs a new instance of the org.kaazing.gateway.client.impl.wseb.DownstreamHandlerListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								downstreamOpened(param0: org.kaazing.gateway.client.impl.wseb.DownstreamChannel): void;
								binaryMessageReceived(param0: org.kaazing.gateway.client.impl.wseb.DownstreamChannel, param1: org.kaazing.gateway.client.util.WrappedByteBuffer): void;
								textMessageReceived(param0: org.kaazing.gateway.client.impl.wseb.DownstreamChannel, param1: string): void;
								commandMessageReceived(param0: org.kaazing.gateway.client.impl.wseb.DownstreamChannel, param1: org.kaazing.gateway.client.impl.CommandMessage): void;
								downstreamFailed(param0: org.kaazing.gateway.client.impl.wseb.DownstreamChannel, param1: java.lang.Exception): void;
								downstreamClosed(param0: org.kaazing.gateway.client.impl.wseb.DownstreamChannel): void;
								pingReceived(param0: org.kaazing.gateway.client.impl.wseb.DownstreamChannel): void;
							});
							public constructor();
							public pingReceived(param0: org.kaazing.gateway.client.impl.wseb.DownstreamChannel): void;
							public commandMessageReceived(param0: org.kaazing.gateway.client.impl.wseb.DownstreamChannel, param1: org.kaazing.gateway.client.impl.CommandMessage): void;
							public downstreamClosed(param0: org.kaazing.gateway.client.impl.wseb.DownstreamChannel): void;
							public downstreamOpened(param0: org.kaazing.gateway.client.impl.wseb.DownstreamChannel): void;
							public binaryMessageReceived(param0: org.kaazing.gateway.client.impl.wseb.DownstreamChannel, param1: org.kaazing.gateway.client.util.WrappedByteBuffer): void;
							public textMessageReceived(param0: org.kaazing.gateway.client.impl.wseb.DownstreamChannel, param1: string): void;
							public downstreamFailed(param0: org.kaazing.gateway.client.impl.wseb.DownstreamChannel, param1: java.lang.Exception): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export module wseb {
						export class UpstreamChannel extends org.kaazing.gateway.client.impl.Channel {
							public static class: java.lang.Class<org.kaazing.gateway.client.impl.wseb.UpstreamChannel>;
							public constructor();
							public constructor(param0: org.kaazing.gateway.client.util.HttpURI, param1: string);
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export module wseb {
						export class UpstreamHandler {
							public static class: java.lang.Class<org.kaazing.gateway.client.impl.wseb.UpstreamHandler>;
							/**
							 * Constructs a new instance of the org.kaazing.gateway.client.impl.wseb.UpstreamHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								setListener(param0: org.kaazing.gateway.client.impl.wseb.UpstreamHandlerListener): void;
								processOpen(param0: org.kaazing.gateway.client.impl.wseb.UpstreamChannel): void;
								processClose(param0: org.kaazing.gateway.client.impl.wseb.UpstreamChannel, param1: number, param2: string): void;
								processTextMessage(param0: org.kaazing.gateway.client.impl.wseb.UpstreamChannel, param1: string): void;
								processBinaryMessage(param0: org.kaazing.gateway.client.impl.wseb.UpstreamChannel, param1: org.kaazing.gateway.client.util.WrappedByteBuffer): void;
								setNextHandler(param0: org.kaazing.gateway.client.impl.http.HttpRequestHandler): void;
								processPong(param0: org.kaazing.gateway.client.impl.wseb.UpstreamChannel): void;
							});
							public constructor();
							public setListener(param0: org.kaazing.gateway.client.impl.wseb.UpstreamHandlerListener): void;
							public processPong(param0: org.kaazing.gateway.client.impl.wseb.UpstreamChannel): void;
							public processClose(param0: org.kaazing.gateway.client.impl.wseb.UpstreamChannel, param1: number, param2: string): void;
							public processOpen(param0: org.kaazing.gateway.client.impl.wseb.UpstreamChannel): void;
							public setNextHandler(param0: org.kaazing.gateway.client.impl.http.HttpRequestHandler): void;
							public processBinaryMessage(param0: org.kaazing.gateway.client.impl.wseb.UpstreamChannel, param1: org.kaazing.gateway.client.util.WrappedByteBuffer): void;
							public processTextMessage(param0: org.kaazing.gateway.client.impl.wseb.UpstreamChannel, param1: string): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export module wseb {
						export class UpstreamHandlerFactory {
							public static class: java.lang.Class<org.kaazing.gateway.client.impl.wseb.UpstreamHandlerFactory>;
							/**
							 * Constructs a new instance of the org.kaazing.gateway.client.impl.wseb.UpstreamHandlerFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								createUpstreamHandler(): org.kaazing.gateway.client.impl.wseb.UpstreamHandler;
							});
							public constructor();
							public createUpstreamHandler(): org.kaazing.gateway.client.impl.wseb.UpstreamHandler;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export module wseb {
						export class UpstreamHandlerImpl extends org.kaazing.gateway.client.impl.wseb.UpstreamHandler {
							public static class: java.lang.Class<org.kaazing.gateway.client.impl.wseb.UpstreamHandlerImpl>;
							public setListener(param0: org.kaazing.gateway.client.impl.wseb.UpstreamHandlerListener): void;
							public processPong(param0: org.kaazing.gateway.client.impl.wseb.UpstreamChannel): void;
							public processClose(param0: org.kaazing.gateway.client.impl.wseb.UpstreamChannel, param1: number, param2: string): void;
							public processOpen(param0: org.kaazing.gateway.client.impl.wseb.UpstreamChannel): void;
							public setNextHandler(param0: org.kaazing.gateway.client.impl.http.HttpRequestHandler): void;
							public processBinaryMessage(param0: org.kaazing.gateway.client.impl.wseb.UpstreamChannel, param1: org.kaazing.gateway.client.util.WrappedByteBuffer): void;
							public processTextMessage(param0: org.kaazing.gateway.client.impl.wseb.UpstreamChannel, param1: string): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export module wseb {
						export class UpstreamHandlerListener {
							public static class: java.lang.Class<org.kaazing.gateway.client.impl.wseb.UpstreamHandlerListener>;
							/**
							 * Constructs a new instance of the org.kaazing.gateway.client.impl.wseb.UpstreamHandlerListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								upstreamFailed(param0: org.kaazing.gateway.client.impl.wseb.UpstreamChannel, param1: java.lang.Exception): void;
								upstreamCompleted(param0: org.kaazing.gateway.client.impl.wseb.UpstreamChannel): void;
							});
							public constructor();
							public upstreamFailed(param0: org.kaazing.gateway.client.impl.wseb.UpstreamChannel, param1: java.lang.Exception): void;
							public upstreamCompleted(param0: org.kaazing.gateway.client.impl.wseb.UpstreamChannel): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export module wseb {
						export class WebSocketEmulatedChannel extends org.kaazing.gateway.client.impl.ws.WebSocketSelectedChannel {
							public static class: java.lang.Class<org.kaazing.gateway.client.impl.wseb.WebSocketEmulatedChannel>;
							public redirectUri: org.kaazing.gateway.client.util.HttpURI;
							public cookie: string;
							public constructor();
							public constructor(param0: org.kaazing.gateway.client.impl.util.WSURI);
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export module wseb {
						export class WebSocketEmulatedDecoder<C>  extends java.lang.Object {
							public static class: java.lang.Class<org.kaazing.gateway.client.impl.wseb.WebSocketEmulatedDecoder<any>>;
							/**
							 * Constructs a new instance of the org.kaazing.gateway.client.impl.wseb.WebSocketEmulatedDecoder<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								decode(param0: C, param1: org.kaazing.gateway.client.impl.DecoderInput<C>, param2: org.kaazing.gateway.client.impl.wseb.WebSocketEmulatedDecoderListener<C>): void;
							});
							public constructor();
							public decode(param0: C, param1: org.kaazing.gateway.client.impl.DecoderInput<C>, param2: org.kaazing.gateway.client.impl.wseb.WebSocketEmulatedDecoderListener<C>): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export module wseb {
						export class WebSocketEmulatedDecoderImpl<C>  extends org.kaazing.gateway.client.impl.wseb.WebSocketEmulatedDecoder<any> {
							public static class: java.lang.Class<org.kaazing.gateway.client.impl.wseb.WebSocketEmulatedDecoderImpl<any>>;
							public constructor();
							public decode(param0: any, param1: org.kaazing.gateway.client.impl.DecoderInput<any>, param2: org.kaazing.gateway.client.impl.wseb.WebSocketEmulatedDecoderListener<any>): void;
						}
						export module WebSocketEmulatedDecoderImpl {
							export class DecodingState {
								public static class: java.lang.Class<org.kaazing.gateway.client.impl.wseb.WebSocketEmulatedDecoderImpl.DecodingState>;
								public static START_OF_FRAME: org.kaazing.gateway.client.impl.wseb.WebSocketEmulatedDecoderImpl.DecodingState;
								public static READING_TEXT_FRAME: org.kaazing.gateway.client.impl.wseb.WebSocketEmulatedDecoderImpl.DecodingState;
								public static READING_COMMAND_FRAME: org.kaazing.gateway.client.impl.wseb.WebSocketEmulatedDecoderImpl.DecodingState;
								public static READING_BINARY_FRAME_HEADER: org.kaazing.gateway.client.impl.wseb.WebSocketEmulatedDecoderImpl.DecodingState;
								public static READING_BINARY_FRAME: org.kaazing.gateway.client.impl.wseb.WebSocketEmulatedDecoderImpl.DecodingState;
								public static READING_PING_FRAME: org.kaazing.gateway.client.impl.wseb.WebSocketEmulatedDecoderImpl.DecodingState;
								public static valueOf(param0: string): org.kaazing.gateway.client.impl.wseb.WebSocketEmulatedDecoderImpl.DecodingState;
								public static values(): native.Array<org.kaazing.gateway.client.impl.wseb.WebSocketEmulatedDecoderImpl.DecodingState>;
							}
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export module wseb {
						export class WebSocketEmulatedDecoderListener<C>  extends org.kaazing.gateway.client.impl.DecoderListener<any> {
							public static class: java.lang.Class<org.kaazing.gateway.client.impl.wseb.WebSocketEmulatedDecoderListener<any>>;
							/**
							 * Constructs a new instance of the org.kaazing.gateway.client.impl.wseb.WebSocketEmulatedDecoderListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								commandDecoded(param0: any, param1: org.kaazing.gateway.client.util.WrappedByteBuffer): void;
								pingReceived(param0: any): void;
								messageDecoded(param0: any, param1: org.kaazing.gateway.client.util.WrappedByteBuffer): void;
								messageDecoded(param0: any, param1: string): void;
							});
							public constructor();
							public commandDecoded(param0: any, param1: org.kaazing.gateway.client.util.WrappedByteBuffer): void;
							public messageDecoded(param0: any, param1: string): void;
							public pingReceived(param0: any): void;
							public messageDecoded(param0: any, param1: org.kaazing.gateway.client.util.WrappedByteBuffer): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export module wseb {
						export class WebSocketEmulatedEncoder<C>  extends java.lang.Object {
							public static class: java.lang.Class<org.kaazing.gateway.client.impl.wseb.WebSocketEmulatedEncoder<any>>;
							/**
							 * Constructs a new instance of the org.kaazing.gateway.client.impl.wseb.WebSocketEmulatedEncoder<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								encodeTextMessage(param0: C, param1: string, param2: org.kaazing.gateway.client.impl.EncoderOutput<C>): void;
								encodeBinaryMessage(param0: C, param1: org.kaazing.gateway.client.util.WrappedByteBuffer, param2: org.kaazing.gateway.client.impl.EncoderOutput<C>): void;
							});
							public constructor();
							public encodeTextMessage(param0: C, param1: string, param2: org.kaazing.gateway.client.impl.EncoderOutput<C>): void;
							public encodeBinaryMessage(param0: C, param1: org.kaazing.gateway.client.util.WrappedByteBuffer, param2: org.kaazing.gateway.client.impl.EncoderOutput<C>): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export module wseb {
						export class WebSocketEmulatedEncoderImpl<C>  extends org.kaazing.gateway.client.impl.wseb.WebSocketEmulatedEncoder<any> {
							public static class: java.lang.Class<org.kaazing.gateway.client.impl.wseb.WebSocketEmulatedEncoderImpl<any>>;
							public constructor();
							public encodeBinaryMessage(param0: any, param1: org.kaazing.gateway.client.util.WrappedByteBuffer, param2: org.kaazing.gateway.client.impl.EncoderOutput<any>): void;
							public encodeTextMessage(param0: any, param1: string, param2: org.kaazing.gateway.client.impl.EncoderOutput<any>): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export module wseb {
						export class WebSocketEmulatedHandler extends org.kaazing.gateway.client.impl.WebSocketHandlerAdapter {
							public static class: java.lang.Class<org.kaazing.gateway.client.impl.wseb.WebSocketEmulatedHandler>;
							public constructor();
							public processTextMessage(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: string): void;
							public setIdleTimeout(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: number): void;
							public setListener(param0: org.kaazing.gateway.client.impl.WebSocketHandlerListener): void;
							public processAuthorize(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: string): void;
							public processClose(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: number, param2: string): void;
							public processConnect(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: org.kaazing.gateway.client.impl.util.WSURI, param2: native.Array<string>): void;
							public processBinaryMessage(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: org.kaazing.gateway.client.util.WrappedByteBuffer): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export module wsn {
						export class WebSocketNativeAuthenticationHandler extends org.kaazing.gateway.client.impl.WebSocketHandlerAdapter {
							public static class: java.lang.Class<org.kaazing.gateway.client.impl.wsn.WebSocketNativeAuthenticationHandler>;
							public constructor();
							public setNextHandler(param0: org.kaazing.gateway.client.impl.WebSocketHandler): void;
							public processTextMessage(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: string): void;
							public setIdleTimeout(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: number): void;
							public setListener(param0: org.kaazing.gateway.client.impl.WebSocketHandlerListener): void;
							public processAuthorize(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: string): void;
							public processClose(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: number, param2: string): void;
							public processConnect(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: org.kaazing.gateway.client.impl.util.WSURI, param2: native.Array<string>): void;
							public processBinaryMessage(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: org.kaazing.gateway.client.util.WrappedByteBuffer): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export module wsn {
						export class WebSocketNativeBalancingHandler extends org.kaazing.gateway.client.impl.WebSocketHandlerAdapter {
							public static class: java.lang.Class<org.kaazing.gateway.client.impl.wsn.WebSocketNativeBalancingHandler>;
							public constructor();
							public setNextHandler(param0: org.kaazing.gateway.client.impl.WebSocketHandler): void;
							public processTextMessage(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: string): void;
							public setIdleTimeout(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: number): void;
							public setListener(param0: org.kaazing.gateway.client.impl.WebSocketHandlerListener): void;
							public processAuthorize(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: string): void;
							public processClose(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: number, param2: string): void;
							public processConnect(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: org.kaazing.gateway.client.impl.util.WSURI, param2: native.Array<string>): void;
							public processBinaryMessage(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: org.kaazing.gateway.client.util.WrappedByteBuffer): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export module wsn {
						export class WebSocketNativeChannel extends org.kaazing.gateway.client.impl.ws.WebSocketSelectedChannel {
							public static class: java.lang.Class<org.kaazing.gateway.client.impl.wsn.WebSocketNativeChannel>;
							public redirectUri: org.kaazing.gateway.client.impl.util.WSURI;
							public balanced: java.util.concurrent.atomic.AtomicInteger;
							public reconnecting: java.util.concurrent.atomic.AtomicBoolean;
							public reconnected: java.util.concurrent.atomic.AtomicBoolean;
							public getDelegate(): org.kaazing.gateway.client.transport.ws.WebSocketDelegate;
							public constructor();
							public constructor(param0: org.kaazing.gateway.client.impl.util.WSURI);
							public getProxy(): org.kaazing.gateway.client.impl.bridge.Proxy;
							public setProxy(param0: org.kaazing.gateway.client.impl.bridge.Proxy): void;
							public setDelegate(param0: org.kaazing.gateway.client.transport.ws.WebSocketDelegate): void;
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export module wsn {
						export class WebSocketNativeCodec extends org.kaazing.gateway.client.impl.WebSocketHandlerAdapter {
							public static class: java.lang.Class<org.kaazing.gateway.client.impl.wsn.WebSocketNativeCodec>;
							public constructor();
							public setNextHandler(param0: org.kaazing.gateway.client.impl.WebSocketHandler): void;
							public processTextMessage(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: string): void;
							public setIdleTimeout(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: number): void;
							public setListener(param0: org.kaazing.gateway.client.impl.WebSocketHandlerListener): void;
							public processAuthorize(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: string): void;
							public processClose(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: number, param2: string): void;
							public processBinaryMessage(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: org.kaazing.gateway.client.util.WrappedByteBuffer): void;
							public processConnect(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: org.kaazing.gateway.client.impl.util.WSURI, param2: native.Array<string>): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export module wsn {
						export class WebSocketNativeDelegateHandler extends org.kaazing.gateway.client.impl.WebSocketHandler {
							public static class: java.lang.Class<org.kaazing.gateway.client.impl.wsn.WebSocketNativeDelegateHandler>;
							public constructor();
							public processTextMessage(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: string): void;
							public setIdleTimeout(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: number): void;
							public setListener(param0: org.kaazing.gateway.client.impl.WebSocketHandlerListener): void;
							public processAuthorize(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: string): void;
							public processClose(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: number, param2: string): void;
							public processConnect(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: org.kaazing.gateway.client.impl.util.WSURI, param2: native.Array<string>): void;
							public processBinaryMessage(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: org.kaazing.gateway.client.util.WrappedByteBuffer): void;
							public static getCanonicalHostPort(param0: java.net.URI): string;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export module wsn {
						export class WebSocketNativeEncoder {
							public static class: java.lang.Class<org.kaazing.gateway.client.impl.wsn.WebSocketNativeEncoder>;
							/**
							 * Constructs a new instance of the org.kaazing.gateway.client.impl.wsn.WebSocketNativeEncoder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								encodeTextMessage(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: string, param2: org.kaazing.gateway.client.impl.EncoderOutput<org.kaazing.gateway.client.impl.WebSocketChannel>): void;
								encodeBinaryMessage(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: org.kaazing.gateway.client.util.WrappedByteBuffer, param2: org.kaazing.gateway.client.impl.EncoderOutput<org.kaazing.gateway.client.impl.WebSocketChannel>): void;
							});
							public constructor();
							public encodeBinaryMessage(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: org.kaazing.gateway.client.util.WrappedByteBuffer, param2: org.kaazing.gateway.client.impl.EncoderOutput<org.kaazing.gateway.client.impl.WebSocketChannel>): void;
							public encodeTextMessage(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: string, param2: org.kaazing.gateway.client.impl.EncoderOutput<org.kaazing.gateway.client.impl.WebSocketChannel>): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export module wsn {
						export class WebSocketNativeEncoderImpl extends org.kaazing.gateway.client.impl.wsn.WebSocketNativeEncoder {
							public static class: java.lang.Class<org.kaazing.gateway.client.impl.wsn.WebSocketNativeEncoderImpl>;
							public constructor();
							public static unmask(param0: org.kaazing.gateway.client.util.WrappedByteBuffer, param1: number): void;
							public encodeBinaryMessage(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: org.kaazing.gateway.client.util.WrappedByteBuffer, param2: org.kaazing.gateway.client.impl.EncoderOutput<org.kaazing.gateway.client.impl.WebSocketChannel>): void;
							public static mask(param0: org.kaazing.gateway.client.util.WrappedByteBuffer, param1: number): void;
							public encodeTextMessage(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: string, param2: org.kaazing.gateway.client.impl.EncoderOutput<org.kaazing.gateway.client.impl.WebSocketChannel>): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export module wsn {
						export class WebSocketNativeHandler extends org.kaazing.gateway.client.impl.WebSocketHandlerAdapter {
							public static class: java.lang.Class<org.kaazing.gateway.client.impl.wsn.WebSocketNativeHandler>;
							public static TRANSPORT_HANDLER_FACTORY: org.kaazing.gateway.client.impl.WebSocketHandlerFactory;
							public constructor();
							public getBufferedAmount(): number;
							public processTextMessage(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: string): void;
							public setIdleTimeout(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: number): void;
							public setListener(param0: org.kaazing.gateway.client.impl.WebSocketHandlerListener): void;
							public processAuthorize(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: string): void;
							public processClose(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: number, param2: string): void;
							public processConnect(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: org.kaazing.gateway.client.impl.util.WSURI, param2: native.Array<string>): void;
							public processBinaryMessage(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: org.kaazing.gateway.client.util.WrappedByteBuffer): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module impl {
					export module wsn {
						export class WebSocketNativeHandshakeHandler extends org.kaazing.gateway.client.impl.WebSocketHandlerAdapter {
							public static class: java.lang.Class<org.kaazing.gateway.client.impl.wsn.WebSocketNativeHandshakeHandler>;
							public constructor();
							public setNextHandler(param0: org.kaazing.gateway.client.impl.WebSocketHandler): void;
							public static getLines(param0: string): native.Array<string>;
							public processTextMessage(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: string): void;
							public setIdleTimeout(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: number): void;
							public setListener(param0: org.kaazing.gateway.client.impl.WebSocketHandlerListener): void;
							public processAuthorize(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: string): void;
							public processClose(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: number, param2: string): void;
							public processConnect(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: org.kaazing.gateway.client.impl.util.WSURI, param2: native.Array<string>): void;
							public processBinaryMessage(param0: org.kaazing.gateway.client.impl.WebSocketChannel, param1: org.kaazing.gateway.client.util.WrappedByteBuffer): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module transport {
					export class AuthenticateEvent extends org.kaazing.gateway.client.transport.Event {
						public static class: java.lang.Class<org.kaazing.gateway.client.transport.AuthenticateEvent>;
						public constructor(param0: string, param1: native.Array<any>);
						public toString(): string;
						public constructor(param0: string);
						public getChallenge(): string;
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module transport {
					export class BridgeDelegate {
						public static class: java.lang.Class<org.kaazing.gateway.client.transport.BridgeDelegate>;
						/**
						 * Constructs a new instance of the org.kaazing.gateway.client.transport.BridgeDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module transport {
					export class CloseEvent extends org.kaazing.gateway.client.transport.Event {
						public static class: java.lang.Class<org.kaazing.gateway.client.transport.CloseEvent>;
						public constructor(param0: number, param1: boolean, param2: string);
						public constructor(param0: java.lang.Exception);
						public constructor(param0: string, param1: native.Array<any>);
						public getCode(): number;
						public getException(): java.lang.Exception;
						public getReason(): string;
						public wasClean(): boolean;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module transport {
					export class ErrorEvent extends org.kaazing.gateway.client.transport.Event {
						public static class: java.lang.Class<org.kaazing.gateway.client.transport.ErrorEvent>;
						public constructor();
						public constructor(param0: java.lang.Exception);
						public constructor(param0: string, param1: native.Array<any>);
						public setException(param0: java.lang.Exception): void;
						public getException(): java.lang.Exception;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module transport {
					export class Event {
						public static class: java.lang.Class<org.kaazing.gateway.client.transport.Event>;
						public static MESSAGE: string;
						public static OPEN: string;
						public static CLOSED: string;
						public static REDIRECT: string;
						public static AUTHENTICATE: string;
						public static ERROR: string;
						public static READY_STATE_CHANGE: string;
						public static LOAD: string;
						public static ABORT: string;
						public static PROGRESS: string;
						public getParams(): native.Array<any>;
						public getType(): string;
						public constructor(param0: string, param1: native.Array<any>);
						public toString(): string;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module transport {
					export class IoBufferUtil {
						public static class: java.lang.Class<org.kaazing.gateway.client.transport.IoBufferUtil>;
						public constructor();
						public static expandBuffer(param0: java.nio.ByteBuffer, param1: number): java.nio.ByteBuffer;
						public static canAccomodate(param0: java.nio.ByteBuffer, param1: number): boolean;
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module transport {
					export class LoadEvent extends org.kaazing.gateway.client.transport.Event {
						public static class: java.lang.Class<org.kaazing.gateway.client.transport.LoadEvent>;
						public getResponseBuffer(): java.nio.ByteBuffer;
						public constructor(param0: string, param1: native.Array<any>);
						public constructor(param0: java.nio.ByteBuffer);
						public toString(): string;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module transport {
					export class MessageEvent extends org.kaazing.gateway.client.transport.Event {
						public static class: java.lang.Class<org.kaazing.gateway.client.transport.MessageEvent>;
						public constructor(param0: java.nio.ByteBuffer, param1: string, param2: string, param3: string);
						public constructor(param0: string, param1: native.Array<any>);
						public getData(): java.nio.ByteBuffer;
						public getOrigin(): string;
						public getMessageType(): string;
						public toString(): string;
						public constructor(param0: string);
						public getLastEventId(): string;
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module transport {
					export class OpenEvent extends org.kaazing.gateway.client.transport.Event {
						public static class: java.lang.Class<org.kaazing.gateway.client.transport.OpenEvent>;
						public getProtocol(): string;
						public constructor();
						public setProtocol(param0: string): void;
						public constructor(param0: string, param1: native.Array<any>);
						public toString(): string;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module transport {
					export class ProgressEvent extends org.kaazing.gateway.client.transport.Event {
						public static class: java.lang.Class<org.kaazing.gateway.client.transport.ProgressEvent>;
						public getBytesLoaded(): number;
						public getBytesTotal(): number;
						public getPayload(): java.nio.ByteBuffer;
						public constructor(param0: string, param1: native.Array<any>);
						public toString(): string;
						public constructor(param0: string);
						public constructor(param0: java.nio.ByteBuffer, param1: number, param2: number);
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module transport {
					export class ReadyStateChangedEvent extends org.kaazing.gateway.client.transport.Event {
						public static class: java.lang.Class<org.kaazing.gateway.client.transport.ReadyStateChangedEvent>;
						public constructor(param0: string, param1: native.Array<any>);
						public constructor(param0: native.Array<string>);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module transport {
					export class RedirectEvent extends org.kaazing.gateway.client.transport.Event {
						public static class: java.lang.Class<org.kaazing.gateway.client.transport.RedirectEvent>;
						public constructor(param0: string, param1: native.Array<any>);
						public getLocation(): string;
						public toString(): string;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module transport {
					export module http {
						export class HttpRequestDelegate extends org.kaazing.gateway.client.transport.BridgeDelegate {
							public static class: java.lang.Class<org.kaazing.gateway.client.transport.http.HttpRequestDelegate>;
							/**
							 * Constructs a new instance of the org.kaazing.gateway.client.transport.http.HttpRequestDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								setRequestHeader(param0: string, param1: string): void;
								getStatusCode(): number;
								getResponseHeader(param0: string): string;
								getResponseText(): java.nio.ByteBuffer;
								processOpen(param0: string, param1: java.net.URL, param2: string, param3: boolean, param4: number): void;
								processSend(param0: java.nio.ByteBuffer): void;
								processAbort(): void;
								setListener(param0: org.kaazing.gateway.client.transport.http.HttpRequestDelegateListener): void;
							});
							public constructor();
							public getStatusCode(): number;
							public getResponseText(): java.nio.ByteBuffer;
							public getResponseHeader(param0: string): string;
							public processOpen(param0: string, param1: java.net.URL, param2: string, param3: boolean, param4: number): void;
							public processAbort(): void;
							public processSend(param0: java.nio.ByteBuffer): void;
							public setListener(param0: org.kaazing.gateway.client.transport.http.HttpRequestDelegateListener): void;
							public setRequestHeader(param0: string, param1: string): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module transport {
					export module http {
						export class HttpRequestDelegateFactory {
							public static class: java.lang.Class<org.kaazing.gateway.client.transport.http.HttpRequestDelegateFactory>;
							/**
							 * Constructs a new instance of the org.kaazing.gateway.client.transport.http.HttpRequestDelegateFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								createHttpRequestDelegate(): org.kaazing.gateway.client.transport.http.HttpRequestDelegate;
							});
							public constructor();
							public createHttpRequestDelegate(): org.kaazing.gateway.client.transport.http.HttpRequestDelegate;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module transport {
					export module http {
						export class HttpRequestDelegateImpl extends org.kaazing.gateway.client.transport.http.HttpRequestDelegate {
							public static class: java.lang.Class<org.kaazing.gateway.client.transport.http.HttpRequestDelegateImpl>;
							public constructor();
							public getStatusCode(): number;
							public getResponseText(): java.nio.ByteBuffer;
							public getResponseHeader(param0: string): string;
							public processAbort(): void;
							public processOpen(param0: string, param1: java.net.URL, param2: string, param3: boolean, param4: number): void;
							public getReadyState(): org.kaazing.gateway.client.transport.http.HttpRequestDelegateImpl.State;
							public processSend(param0: java.nio.ByteBuffer): void;
							public getAllResponseHeaders(): string;
							public setListener(param0: org.kaazing.gateway.client.transport.http.HttpRequestDelegateListener): void;
							public setRequestHeader(param0: string, param1: string): void;
							public reset(): void;
						}
						export module HttpRequestDelegateImpl {
							export class State {
								public static class: java.lang.Class<org.kaazing.gateway.client.transport.http.HttpRequestDelegateImpl.State>;
								public static UNSENT: org.kaazing.gateway.client.transport.http.HttpRequestDelegateImpl.State;
								public static OPENED: org.kaazing.gateway.client.transport.http.HttpRequestDelegateImpl.State;
								public static HEADERS_RECEIVED: org.kaazing.gateway.client.transport.http.HttpRequestDelegateImpl.State;
								public static LOADING: org.kaazing.gateway.client.transport.http.HttpRequestDelegateImpl.State;
								public static DONE: org.kaazing.gateway.client.transport.http.HttpRequestDelegateImpl.State;
								public static values(): native.Array<org.kaazing.gateway.client.transport.http.HttpRequestDelegateImpl.State>;
								public static valueOf(param0: string): org.kaazing.gateway.client.transport.http.HttpRequestDelegateImpl.State;
							}
							export class StreamReader {
								public static class: java.lang.Class<org.kaazing.gateway.client.transport.http.HttpRequestDelegateImpl.StreamReader>;
								public stop(): void;
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module transport {
					export module http {
						export class HttpRequestDelegateListener {
							public static class: java.lang.Class<org.kaazing.gateway.client.transport.http.HttpRequestDelegateListener>;
							/**
							 * Constructs a new instance of the org.kaazing.gateway.client.transport.http.HttpRequestDelegateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								opened(param0: org.kaazing.gateway.client.transport.OpenEvent): void;
								errorOccurred(param0: org.kaazing.gateway.client.transport.ErrorEvent): void;
								readyStateChanged(param0: org.kaazing.gateway.client.transport.ReadyStateChangedEvent): void;
								loaded(param0: org.kaazing.gateway.client.transport.LoadEvent): void;
								progressed(param0: org.kaazing.gateway.client.transport.ProgressEvent): void;
								closed(param0: org.kaazing.gateway.client.transport.CloseEvent): void;
							});
							public constructor();
							public progressed(param0: org.kaazing.gateway.client.transport.ProgressEvent): void;
							public readyStateChanged(param0: org.kaazing.gateway.client.transport.ReadyStateChangedEvent): void;
							public loaded(param0: org.kaazing.gateway.client.transport.LoadEvent): void;
							public opened(param0: org.kaazing.gateway.client.transport.OpenEvent): void;
							public errorOccurred(param0: org.kaazing.gateway.client.transport.ErrorEvent): void;
							public closed(param0: org.kaazing.gateway.client.transport.CloseEvent): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module transport {
					export module http {
						export class HttpRequestUtil {
							public static class: java.lang.Class<org.kaazing.gateway.client.transport.http.HttpRequestUtil>;
							public constructor();
							public static validateHeader(param0: string): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module transport {
					export module ws {
						export class Base64Util {
							public static class: java.lang.Class<org.kaazing.gateway.client.transport.ws.Base64Util>;
							public static decode(param0: string): java.nio.ByteBuffer;
							public static encode(param0: java.nio.ByteBuffer): string;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module transport {
					export module ws {
						export class BridgeSocket {
							public static class: java.lang.Class<org.kaazing.gateway.client.transport.ws.BridgeSocket>;
							/**
							 * Constructs a new instance of the org.kaazing.gateway.client.transport.ws.BridgeSocket interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								connect(param0: java.net.InetSocketAddress, param1: number): void;
								getInputStream(): java.io.InputStream;
								getOutputStream(): java.io.OutputStream;
								close(): void;
								setSoTimeout(param0: number): void;
								setKeepAlive(param0: boolean): void;
							});
							public constructor();
							public getOutputStream(): java.io.OutputStream;
							public close(): void;
							public getInputStream(): java.io.InputStream;
							public setSoTimeout(param0: number): void;
							public connect(param0: java.net.InetSocketAddress, param1: number): void;
							public setKeepAlive(param0: boolean): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module transport {
					export module ws {
						export class BridgeSocketFactory {
							public static class: java.lang.Class<org.kaazing.gateway.client.transport.ws.BridgeSocketFactory>;
							/**
							 * Constructs a new instance of the org.kaazing.gateway.client.transport.ws.BridgeSocketFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								createSocket(param0: boolean): org.kaazing.gateway.client.transport.ws.BridgeSocket;
							});
							public constructor();
							public createSocket(param0: boolean): org.kaazing.gateway.client.transport.ws.BridgeSocket;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module transport {
					export module ws {
						export class BridgeSocketImpl extends org.kaazing.gateway.client.transport.ws.BridgeSocket {
							public static class: java.lang.Class<org.kaazing.gateway.client.transport.ws.BridgeSocketImpl>;
							public getOutputStream(): java.io.OutputStream;
							public close(): void;
							public getInputStream(): java.io.InputStream;
							public setSoTimeout(param0: number): void;
							public connect(param0: java.net.InetSocketAddress, param1: number): void;
							public setKeepAlive(param0: boolean): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module transport {
					export module ws {
						export class FrameProcessor {
							public static class: java.lang.Class<org.kaazing.gateway.client.transport.ws.FrameProcessor>;
						}
						export module FrameProcessor {
							export class DecodingState {
								public static class: java.lang.Class<org.kaazing.gateway.client.transport.ws.FrameProcessor.DecodingState>;
								public static START_OF_FRAME: org.kaazing.gateway.client.transport.ws.FrameProcessor.DecodingState;
								public static READING_PAYLOADLENGTH: org.kaazing.gateway.client.transport.ws.FrameProcessor.DecodingState;
								public static READING_PAYLOADLENGTH_EXT: org.kaazing.gateway.client.transport.ws.FrameProcessor.DecodingState;
								public static READING_MASK_KEY: org.kaazing.gateway.client.transport.ws.FrameProcessor.DecodingState;
								public static READING_PAYLOAD: org.kaazing.gateway.client.transport.ws.FrameProcessor.DecodingState;
								public static END_OF_FRAME: org.kaazing.gateway.client.transport.ws.FrameProcessor.DecodingState;
								public static values(): native.Array<org.kaazing.gateway.client.transport.ws.FrameProcessor.DecodingState>;
								public static valueOf(param0: string): org.kaazing.gateway.client.transport.ws.FrameProcessor.DecodingState;
							}
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module transport {
					export module ws {
						export class FrameProcessorListener {
							public static class: java.lang.Class<org.kaazing.gateway.client.transport.ws.FrameProcessorListener>;
							/**
							 * Constructs a new instance of the org.kaazing.gateway.client.transport.ws.FrameProcessorListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								messageReceived(param0: java.nio.ByteBuffer, param1: string): void;
							});
							public constructor();
							public messageReceived(param0: java.nio.ByteBuffer, param1: string): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module transport {
					export module ws {
						export class WebSocketDelegate extends org.kaazing.gateway.client.transport.BridgeDelegate {
							public static class: java.lang.Class<org.kaazing.gateway.client.transport.ws.WebSocketDelegate>;
							/**
							 * Constructs a new instance of the org.kaazing.gateway.client.transport.ws.WebSocketDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								processOpen(): void;
								processAuthorize(param0: string): void;
								processDisconnect(): void;
								processDisconnect(param0: number, param1: string): void;
								processSend(param0: java.nio.ByteBuffer): void;
								processSend(param0: string): void;
								setListener(param0: org.kaazing.gateway.client.transport.ws.WebSocketDelegateListener): void;
								setIdleTimeout(param0: number): void;
							});
							public constructor();
							public processSend(param0: string): void;
							public processOpen(): void;
							public processAuthorize(param0: string): void;
							public processDisconnect(param0: number, param1: string): void;
							public processSend(param0: java.nio.ByteBuffer): void;
							public setListener(param0: org.kaazing.gateway.client.transport.ws.WebSocketDelegateListener): void;
							public setIdleTimeout(param0: number): void;
							public processDisconnect(): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module transport {
					export module ws {
						export class WebSocketDelegateFactory {
							public static class: java.lang.Class<org.kaazing.gateway.client.transport.ws.WebSocketDelegateFactory>;
							/**
							 * Constructs a new instance of the org.kaazing.gateway.client.transport.ws.WebSocketDelegateFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								createWebSocketDelegate(param0: java.net.URI, param1: java.net.URI, param2: string): org.kaazing.gateway.client.transport.ws.WebSocketDelegate;
							});
							public constructor();
							public createWebSocketDelegate(param0: java.net.URI, param1: java.net.URI, param2: string): org.kaazing.gateway.client.transport.ws.WebSocketDelegate;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module transport {
					export module ws {
						export class WebSocketDelegateImpl extends org.kaazing.gateway.client.transport.ws.WebSocketDelegate {
							public static class: java.lang.Class<org.kaazing.gateway.client.transport.ws.WebSocketDelegateImpl>;
							public static CLOSE_NO_STATUS: number;
							public static CLOSE_ABNORMAL: number;
							public cookies: string;
							public processSend(param0: string): void;
							public processOpen(): void;
							public getBufferedAmount(): number;
							public processDisconnect(param0: number, param1: string): void;
							public getOrigin(): java.net.URI;
							public getExtensions(): string;
							public processSend(param0: java.nio.ByteBuffer): void;
							public getUrl(): java.net.URI;
							public setIdleTimeout(param0: number): void;
							public processDisconnect(): void;
							public processAuthorize(param0: string): void;
							public getSecProtocol(): string;
							public encodeGetRequest(param0: java.net.URI, param1: native.Array<string>, param2: native.Array<string>): native.Array<number>;
							public postProcessOpen(param0: org.kaazing.gateway.client.transport.http.HttpRequestDelegate): void;
							public setListener(param0: org.kaazing.gateway.client.transport.ws.WebSocketDelegateListener): void;
							public nativeConnect(): void;
							public getReadyState(): org.kaazing.gateway.client.transport.ws.WebSocketDelegateImpl.ReadyState;
							public constructor(param0: java.net.URI, param1: java.net.URI, param2: native.Array<string>, param3: number);
						}
						export module WebSocketDelegateImpl {
							export class ConnectionStatus {
								public static class: java.lang.Class<org.kaazing.gateway.client.transport.ws.WebSocketDelegateImpl.ConnectionStatus>;
								public static START: org.kaazing.gateway.client.transport.ws.WebSocketDelegateImpl.ConnectionStatus;
								public static STATUS_101_READ: org.kaazing.gateway.client.transport.ws.WebSocketDelegateImpl.ConnectionStatus;
								public static CONNECTION_UPGRADE_READ: org.kaazing.gateway.client.transport.ws.WebSocketDelegateImpl.ConnectionStatus;
								public static COMPLETED: org.kaazing.gateway.client.transport.ws.WebSocketDelegateImpl.ConnectionStatus;
								public static ERRORED: org.kaazing.gateway.client.transport.ws.WebSocketDelegateImpl.ConnectionStatus;
								public static values(): native.Array<org.kaazing.gateway.client.transport.ws.WebSocketDelegateImpl.ConnectionStatus>;
								public static valueOf(param0: string): org.kaazing.gateway.client.transport.ws.WebSocketDelegateImpl.ConnectionStatus;
							}
							export class ReadyState {
								public static class: java.lang.Class<org.kaazing.gateway.client.transport.ws.WebSocketDelegateImpl.ReadyState>;
								public static CONNECTING: org.kaazing.gateway.client.transport.ws.WebSocketDelegateImpl.ReadyState;
								public static OPEN: org.kaazing.gateway.client.transport.ws.WebSocketDelegateImpl.ReadyState;
								public static CLOSING: org.kaazing.gateway.client.transport.ws.WebSocketDelegateImpl.ReadyState;
								public static CLOSED: org.kaazing.gateway.client.transport.ws.WebSocketDelegateImpl.ReadyState;
								public static values(): native.Array<org.kaazing.gateway.client.transport.ws.WebSocketDelegateImpl.ReadyState>;
								public static valueOf(param0: string): org.kaazing.gateway.client.transport.ws.WebSocketDelegateImpl.ReadyState;
							}
							export class SocketReader {
								public static class: java.lang.Class<org.kaazing.gateway.client.transport.ws.WebSocketDelegateImpl.SocketReader>;
								public AcceptHash(param0: string): string;
								public constructor(param0: org.kaazing.gateway.client.transport.ws.WebSocketDelegateImpl, param1: java.io.InputStream);
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module transport {
					export module ws {
						export class WebSocketDelegateListener {
							public static class: java.lang.Class<org.kaazing.gateway.client.transport.ws.WebSocketDelegateListener>;
							/**
							 * Constructs a new instance of the org.kaazing.gateway.client.transport.ws.WebSocketDelegateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								authenticationRequested(param0: org.kaazing.gateway.client.transport.AuthenticateEvent): void;
								opened(param0: org.kaazing.gateway.client.transport.OpenEvent): void;
								redirected(param0: org.kaazing.gateway.client.transport.RedirectEvent): void;
								messageReceived(param0: org.kaazing.gateway.client.transport.MessageEvent): void;
								closed(param0: org.kaazing.gateway.client.transport.CloseEvent): void;
								errorOccurred(param0: org.kaazing.gateway.client.transport.ErrorEvent): void;
							});
							public constructor();
							public opened(param0: org.kaazing.gateway.client.transport.OpenEvent): void;
							public redirected(param0: org.kaazing.gateway.client.transport.RedirectEvent): void;
							public errorOccurred(param0: org.kaazing.gateway.client.transport.ErrorEvent): void;
							public messageReceived(param0: org.kaazing.gateway.client.transport.MessageEvent): void;
							public authenticationRequested(param0: org.kaazing.gateway.client.transport.AuthenticateEvent): void;
							public closed(param0: org.kaazing.gateway.client.transport.CloseEvent): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module transport {
					export module ws {
						export class WsFrameEncodingSupport {
							public static class: java.lang.Class<org.kaazing.gateway.client.transport.ws.WsFrameEncodingSupport>;
							public constructor();
							public static rfc6455Encode(param0: org.kaazing.gateway.client.transport.ws.WsMessage, param1: number): java.nio.ByteBuffer;
							public static unmask(param0: java.nio.ByteBuffer, param1: number): void;
							public static mask(param0: java.nio.ByteBuffer, param1: number): void;
						}
						export module WsFrameEncodingSupport {
							export class Opcode {
								public static class: java.lang.Class<org.kaazing.gateway.client.transport.ws.WsFrameEncodingSupport.Opcode>;
								public static CONTINUATION: org.kaazing.gateway.client.transport.ws.WsFrameEncodingSupport.Opcode;
								public static TEXT: org.kaazing.gateway.client.transport.ws.WsFrameEncodingSupport.Opcode;
								public static BINARY: org.kaazing.gateway.client.transport.ws.WsFrameEncodingSupport.Opcode;
								public static RESERVED3: org.kaazing.gateway.client.transport.ws.WsFrameEncodingSupport.Opcode;
								public static RESERVED4: org.kaazing.gateway.client.transport.ws.WsFrameEncodingSupport.Opcode;
								public static RESERVED5: org.kaazing.gateway.client.transport.ws.WsFrameEncodingSupport.Opcode;
								public static RESERVED6: org.kaazing.gateway.client.transport.ws.WsFrameEncodingSupport.Opcode;
								public static RESERVED7: org.kaazing.gateway.client.transport.ws.WsFrameEncodingSupport.Opcode;
								public static CLOSE: org.kaazing.gateway.client.transport.ws.WsFrameEncodingSupport.Opcode;
								public static PING: org.kaazing.gateway.client.transport.ws.WsFrameEncodingSupport.Opcode;
								public static PONG: org.kaazing.gateway.client.transport.ws.WsFrameEncodingSupport.Opcode;
								public static values(): native.Array<org.kaazing.gateway.client.transport.ws.WsFrameEncodingSupport.Opcode>;
								public static valueOf(param0: string): org.kaazing.gateway.client.transport.ws.WsFrameEncodingSupport.Opcode;
								public getCode(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module transport {
					export module ws {
						export class WsMessage {
							public static class: java.lang.Class<org.kaazing.gateway.client.transport.ws.WsMessage>;
							public constructor(param0: java.nio.ByteBuffer, param1: org.kaazing.gateway.client.transport.ws.WsMessage.Kind);
							public getBytes(): java.nio.ByteBuffer;
							public toString(): string;
							public getKind(): org.kaazing.gateway.client.transport.ws.WsMessage.Kind;
						}
						export module WsMessage {
							export class Kind {
								public static class: java.lang.Class<org.kaazing.gateway.client.transport.ws.WsMessage.Kind>;
								public static BINARY: org.kaazing.gateway.client.transport.ws.WsMessage.Kind;
								public static TEXT: org.kaazing.gateway.client.transport.ws.WsMessage.Kind;
								public static CLOSE: org.kaazing.gateway.client.transport.ws.WsMessage.Kind;
								public static COMMAND: org.kaazing.gateway.client.transport.ws.WsMessage.Kind;
								public static PING: org.kaazing.gateway.client.transport.ws.WsMessage.Kind;
								public static PONG: org.kaazing.gateway.client.transport.ws.WsMessage.Kind;
								public static valueOf(param0: string): org.kaazing.gateway.client.transport.ws.WsMessage.Kind;
								public static values(): native.Array<org.kaazing.gateway.client.transport.ws.WsMessage.Kind>;
							}
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module util {
					export class Base64Util {
						public static class: java.lang.Class<org.kaazing.gateway.client.util.Base64Util>;
						public static encode(param0: org.kaazing.gateway.client.util.WrappedByteBuffer): string;
						public static decode(param0: string): org.kaazing.gateway.client.util.WrappedByteBuffer;
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module util {
					export abstract class GenericURI<T>  extends java.lang.Object {
						public static class: java.lang.Class<org.kaazing.gateway.client.util.GenericURI<any>>;
						public uri: java.net.URI;
						public getPort(): number;
						public getScheme(): string;
						public getPath(): string;
						public addQueryParameter(param0: string): T;
						public toString(): string;
						public constructor(param0: java.net.URI);
						public isValidScheme(param0: string): boolean;
						public getURI(): java.net.URI;
						public getHost(): string;
						public getQuery(): string;
						public replacePath(param0: string): T;
						public duplicate(param0: java.net.URI): T;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module util {
					export class HexUtil {
						public static class: java.lang.Class<org.kaazing.gateway.client.util.HexUtil>;
						public constructor();
						public static fromHex(param0: string): native.Array<number>;
						public static byteArrayToInt(param0: native.Array<number>, param1: number): number;
						public static decode(param0: native.Array<number>): native.Array<number>;
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module util {
					export class HttpURI extends org.kaazing.gateway.client.util.GenericURI<org.kaazing.gateway.client.util.HttpURI> {
						public static class: java.lang.Class<org.kaazing.gateway.client.util.HttpURI>;
						public isValidScheme(param0: string): boolean;
						public static replaceScheme(param0: java.net.URI, param1: string): org.kaazing.gateway.client.util.HttpURI;
						public isSecure(): boolean;
						public duplicate(param0: java.net.URI): org.kaazing.gateway.client.util.HttpURI;
						public static replaceScheme(param0: org.kaazing.gateway.client.util.GenericURI<any>, param1: string): org.kaazing.gateway.client.util.HttpURI;
						public duplicate(param0: java.net.URI): any;
						public constructor(param0: string);
						public constructor(param0: java.net.URI);
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module util {
					export class StringUtils {
						public static class: java.lang.Class<org.kaazing.gateway.client.util.StringUtils>;
						public static getUtf8Bytes(param0: string): native.Array<number>;
						public constructor();
						public static stripControlCharacters(param0: string): string;
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module util {
					export class URIUtils {
						public static class: java.lang.Class<org.kaazing.gateway.client.util.URIUtils>;
						public constructor();
						public static replaceScheme(param0: java.net.URI, param1: string): java.net.URI;
						public static replaceQueryParameters(param0: java.net.URI, param1: string): java.net.URI;
						public static replaceScheme(param0: string, param1: string): java.net.URI;
						public static replacePath(param0: java.net.URI, param1: string): java.net.URI;
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module util {
					export class WrappedByteBuffer {
						public static class: java.lang.Class<org.kaazing.gateway.client.util.WrappedByteBuffer>;
						public clear(): org.kaazing.gateway.client.util.WrappedByteBuffer;
						public getShortAt(param0: number): number;
						public equals(param0: any): boolean;
						public putAt(param0: number, param1: number): org.kaazing.gateway.client.util.WrappedByteBuffer;
						public putShort(param0: number): org.kaazing.gateway.client.util.WrappedByteBuffer;
						public getUnsignedMediumInt(): number;
						public putBufferAt(param0: number, param1: org.kaazing.gateway.client.util.WrappedByteBuffer): org.kaazing.gateway.client.util.WrappedByteBuffer;
						public putBytes(param0: native.Array<number>): org.kaazing.gateway.client.util.WrappedByteBuffer;
						public arrayOffset(): number;
						public putLongAt(param0: number, param1: number): org.kaazing.gateway.client.util.WrappedByteBuffer;
						public position(): number;
						public limit(): number;
						public getNioByteBuffer(): java.nio.ByteBuffer;
						public getUnsignedIntAt(param0: number): number;
						public compact(): org.kaazing.gateway.client.util.WrappedByteBuffer;
						public getInt(): number;
						public getBytes(param0: number): native.Array<number>;
						public rewind(): org.kaazing.gateway.client.util.WrappedByteBuffer;
						public position(param0: number): org.kaazing.gateway.client.util.WrappedByteBuffer;
						public constructor();
						public fill(param0: number): org.kaazing.gateway.client.util.WrappedByteBuffer;
						public put(param0: native.Array<number>, param1: number, param2: number): org.kaazing.gateway.client.util.WrappedByteBuffer;
						public putUnsignedIntAt(param0: number, param1: number): org.kaazing.gateway.client.util.WrappedByteBuffer;
						public getShort(): number;
						public getBytesAt(param0: number, param1: number): native.Array<number>;
						public getAt(param0: number): number;
						public get(param0: native.Array<number>, param1: number, param2: number): org.kaazing.gateway.client.util.WrappedByteBuffer;
						public toString(): string;
						public static wrap(param0: native.Array<number>, param1: number, param2: number): org.kaazing.gateway.client.util.WrappedByteBuffer;
						public getString(param0: java.nio.charset.Charset): string;
						public getUnsignedShort(): number;
						public duplicate(): org.kaazing.gateway.client.util.WrappedByteBuffer;
						public getUnsignedInt(): number;
						public getLongAt(param0: number): number;
						public indexOf(param0: number): number;
						public putUnsignedAt(param0: number, param1: number): org.kaazing.gateway.client.util.WrappedByteBuffer;
						public getUnsigned(): number;
						public mark(): org.kaazing.gateway.client.util.WrappedByteBuffer;
						public getLong(): number;
						public fillWith(param0: number, param1: number): org.kaazing.gateway.client.util.WrappedByteBuffer;
						public get(): number;
						public constructor(param0: native.Array<number>);
						public hasRemaining(): boolean;
						public putBytesAt(param0: number, param1: native.Array<number>): org.kaazing.gateway.client.util.WrappedByteBuffer;
						public hashCode(): number;
						public put(param0: number): org.kaazing.gateway.client.util.WrappedByteBuffer;
						public putUnsignedShort(param0: number): org.kaazing.gateway.client.util.WrappedByteBuffer;
						public putUnsignedInt(param0: number): org.kaazing.gateway.client.util.WrappedByteBuffer;
						public putPrefixedString(param0: number, param1: string, param2: java.nio.charset.Charset): org.kaazing.gateway.client.util.WrappedByteBuffer;
						public getIntAt(param0: number): number;
						public reset(): org.kaazing.gateway.client.util.WrappedByteBuffer;
						public static wrap(param0: native.Array<number>): org.kaazing.gateway.client.util.WrappedByteBuffer;
						public getPrefixedString(param0: number, param1: java.nio.charset.Charset): string;
						public array(): native.Array<number>;
						public getUnsignedAt(param0: number): number;
						public get(param0: native.Array<number>): org.kaazing.gateway.client.util.WrappedByteBuffer;
						public putBuffer(param0: org.kaazing.gateway.client.util.WrappedByteBuffer): org.kaazing.gateway.client.util.WrappedByteBuffer;
						public putInt(param0: number): org.kaazing.gateway.client.util.WrappedByteBuffer;
						public putString(param0: string, param1: java.nio.charset.Charset): org.kaazing.gateway.client.util.WrappedByteBuffer;
						public capacity(): number;
						public limit(param0: number): org.kaazing.gateway.client.util.WrappedByteBuffer;
						public remaining(): number;
						public putLong(param0: number): org.kaazing.gateway.client.util.WrappedByteBuffer;
						public putShortAt(param0: number, param1: number): org.kaazing.gateway.client.util.WrappedByteBuffer;
						public slice(): org.kaazing.gateway.client.util.WrappedByteBuffer;
						/** @deprecated */
						public order(param0: java.nio.ByteOrder): java.nio.ByteOrder;
						public isAutoExpand(): boolean;
						public putUnsigned(param0: number): org.kaazing.gateway.client.util.WrappedByteBuffer;
						public putIntAt(param0: number, param1: number): org.kaazing.gateway.client.util.WrappedByteBuffer;
						public getUnsignedShortAt(param0: number): number;
						public getHexDump(): string;
						public constructor(param0: java.nio.ByteBuffer);
						public order(): java.nio.ByteOrder;
						public skip(param0: number): org.kaazing.gateway.client.util.WrappedByteBuffer;
						public setAutoExpand(param0: boolean): org.kaazing.gateway.client.util.WrappedByteBuffer;
						public static allocate(param0: number): org.kaazing.gateway.client.util.WrappedByteBuffer;
						public putUnsignedShortAt(param0: number, param1: number): org.kaazing.gateway.client.util.WrappedByteBuffer;
						public static wrap(param0: java.nio.ByteBuffer): org.kaazing.gateway.client.util.WrappedByteBuffer;
						public flip(): org.kaazing.gateway.client.util.WrappedByteBuffer;
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module gateway {
			export module client {
				export module util {
					export module auth {
						export class LoginHandlerProvider {
							public static class: java.lang.Class<org.kaazing.gateway.client.util.auth.LoginHandlerProvider>;
							/**
							 * Constructs a new instance of the org.kaazing.gateway.client.util.auth.LoginHandlerProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getLoginHandler(): org.kaazing.net.auth.LoginHandler;
							});
							public constructor();
							public getLoginHandler(): org.kaazing.net.auth.LoginHandler;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export class URLFactory {
				public static class: java.lang.Class<org.kaazing.net.URLFactory>;
				public static createURL(param0: string): java.net.URL;
				public static createURL(param0: string, param1: string, param2: number, param3: string): java.net.URL;
				public static createURL(param0: java.net.URL, param1: string): java.net.URL;
				public static createURL(param0: string, param1: string, param2: string): java.net.URL;
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export abstract class URLStreamHandlerFactorySpi {
				public static class: java.lang.Class<org.kaazing.net.URLStreamHandlerFactorySpi>;
				public getSupportedProtocols(): java.util.Collection<string>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export module auth {
				export abstract class BasicChallengeHandler extends org.kaazing.net.auth.ChallengeHandler {
					public static class: java.lang.Class<org.kaazing.net.auth.BasicChallengeHandler>;
					public static create(param0: java.lang.ClassLoader): org.kaazing.net.auth.BasicChallengeHandler;
					public setRealmLoginHandler(param0: string, param1: org.kaazing.net.auth.LoginHandler): void;
					public constructor();
					public static create(param0: java.lang.Class, param1: java.lang.ClassLoader): org.kaazing.net.auth.ChallengeHandler;
					public static create(param0: java.lang.Class): org.kaazing.net.auth.ChallengeHandler;
					public static create(): org.kaazing.net.auth.BasicChallengeHandler;
					public setLoginHandler(param0: org.kaazing.net.auth.LoginHandler): org.kaazing.net.auth.BasicChallengeHandler;
					public getLoginHandler(): org.kaazing.net.auth.LoginHandler;
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export module auth {
				export abstract class ChallengeHandler {
					public static class: java.lang.Class<org.kaazing.net.auth.ChallengeHandler>;
					public canHandle(param0: org.kaazing.net.auth.ChallengeRequest): boolean;
					public constructor();
					public static create(param0: java.lang.Class, param1: java.lang.ClassLoader): org.kaazing.net.auth.ChallengeHandler;
					public static create(param0: java.lang.Class): org.kaazing.net.auth.ChallengeHandler;
					public handle(param0: org.kaazing.net.auth.ChallengeRequest): org.kaazing.net.auth.ChallengeResponse;
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export module auth {
				export class ChallengeRequest {
					public static class: java.lang.Class<org.kaazing.net.auth.ChallengeRequest>;
					public constructor(param0: string, param1: string);
					public getLocation(): string;
					public toString(): string;
					public getAuthenticationParameters(): string;
					public getAuthenticationScheme(): string;
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export module auth {
				export class ChallengeResponse {
					public static class: java.lang.Class<org.kaazing.net.auth.ChallengeResponse>;
					public setNextChallengeHandler(param0: org.kaazing.net.auth.ChallengeHandler): void;
					public clearCredentials(): void;
					public getNextChallengeHandler(): org.kaazing.net.auth.ChallengeHandler;
					public getCredentials(): native.Array<string>;
					public setCredentials(param0: native.Array<string>): void;
					public constructor(param0: native.Array<string>, param1: org.kaazing.net.auth.ChallengeHandler);
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export module auth {
				export abstract class DispatchChallengeHandler extends org.kaazing.net.auth.ChallengeHandler {
					public static class: java.lang.Class<org.kaazing.net.auth.DispatchChallengeHandler>;
					public register(param0: string, param1: org.kaazing.net.auth.ChallengeHandler): org.kaazing.net.auth.DispatchChallengeHandler;
					public static create(): org.kaazing.net.auth.DispatchChallengeHandler;
					public unregister(param0: string, param1: org.kaazing.net.auth.ChallengeHandler): org.kaazing.net.auth.DispatchChallengeHandler;
					public canHandle(param0: org.kaazing.net.auth.ChallengeRequest): boolean;
					public constructor();
					public static create(param0: java.lang.Class, param1: java.lang.ClassLoader): org.kaazing.net.auth.ChallengeHandler;
					public static create(param0: java.lang.Class): org.kaazing.net.auth.ChallengeHandler;
					public static create(param0: java.lang.ClassLoader): org.kaazing.net.auth.DispatchChallengeHandler;
					public handle(param0: org.kaazing.net.auth.ChallengeRequest): org.kaazing.net.auth.ChallengeResponse;
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export module auth {
				export abstract class LoginHandler {
					public static class: java.lang.Class<org.kaazing.net.auth.LoginHandler>;
					public constructor();
					public getCredentials(): java.net.PasswordAuthentication;
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export module auth {
				export abstract class NegotiableChallengeHandler extends org.kaazing.net.auth.ChallengeHandler {
					public static class: java.lang.Class<org.kaazing.net.auth.NegotiableChallengeHandler>;
					public static create(): org.kaazing.net.auth.NegotiableChallengeHandler;
					public setLoginHandler(param0: org.kaazing.net.auth.LoginHandler): org.kaazing.net.auth.NegotiableChallengeHandler;
					public static create(param0: java.lang.ClassLoader): org.kaazing.net.auth.NegotiableChallengeHandler;
					public static create(param0: java.lang.Class, param1: java.lang.ClassLoader): org.kaazing.net.auth.ChallengeHandler;
					public constructor();
					public static create(param0: java.lang.Class): org.kaazing.net.auth.ChallengeHandler;
					public getSupportedOids(): java.util.Collection<string>;
					public getLoginHandler(): org.kaazing.net.auth.LoginHandler;
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export module auth {
				export abstract class NegotiateChallengeHandler extends org.kaazing.net.auth.ChallengeHandler {
					public static class: java.lang.Class<org.kaazing.net.auth.NegotiateChallengeHandler>;
					public constructor();
					public static create(param0: java.lang.Class, param1: java.lang.ClassLoader): org.kaazing.net.auth.ChallengeHandler;
					public static create(): org.kaazing.net.auth.NegotiateChallengeHandler;
					public register(param0: org.kaazing.net.auth.NegotiableChallengeHandler): org.kaazing.net.auth.NegotiateChallengeHandler;
					public static create(param0: java.lang.Class): org.kaazing.net.auth.ChallengeHandler;
					public static create(param0: java.lang.ClassLoader): org.kaazing.net.auth.NegotiateChallengeHandler;
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export module http {
				export abstract class HttpRedirectPolicy extends java.util.Comparator<java.net.URI> {
					public static class: java.lang.Class<org.kaazing.net.http.HttpRedirectPolicy>;
					public static NEVER: org.kaazing.net.http.HttpRedirectPolicy;
					public static ALWAYS: org.kaazing.net.http.HttpRedirectPolicy;
					public static SAME_ORIGIN: org.kaazing.net.http.HttpRedirectPolicy;
					public static SAME_DOMAIN: org.kaazing.net.http.HttpRedirectPolicy;
					public static PEER_DOMAIN: org.kaazing.net.http.HttpRedirectPolicy;
					public static SUB_DOMAIN: org.kaazing.net.http.HttpRedirectPolicy;
					public toString(): string;
					public static values(): native.Array<org.kaazing.net.http.HttpRedirectPolicy>;
					public static valueOf(param0: string): org.kaazing.net.http.HttpRedirectPolicy;
					public compare(param0: java.net.URI, param1: java.net.URI): number;
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export module impl {
				export module auth {
					export class BasicChallengeResponseFactory {
						public static class: java.lang.Class<org.kaazing.net.impl.auth.BasicChallengeResponseFactory>;
						public constructor();
						public static create(param0: java.net.PasswordAuthentication, param1: org.kaazing.net.auth.ChallengeHandler): org.kaazing.net.auth.ChallengeResponse;
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export module impl {
				export module auth {
					export class DefaultBasicChallengeHandler extends org.kaazing.net.auth.BasicChallengeHandler implements org.kaazing.gateway.client.util.auth.LoginHandlerProvider {
						public static class: java.lang.Class<org.kaazing.net.impl.auth.DefaultBasicChallengeHandler>;
						public getLoginHandler(): org.kaazing.net.auth.LoginHandler;
						public constructor();
						public setRealmLoginHandler(param0: string, param1: org.kaazing.net.auth.LoginHandler): void;
						public handle(param0: org.kaazing.net.auth.ChallengeRequest): org.kaazing.net.auth.ChallengeResponse;
						public canHandle(param0: org.kaazing.net.auth.ChallengeRequest): boolean;
						public setLoginHandler(param0: org.kaazing.net.auth.LoginHandler): org.kaazing.net.auth.BasicChallengeHandler;
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export module impl {
				export module auth {
					export class DefaultDispatchChallengeHandler extends org.kaazing.net.auth.DispatchChallengeHandler {
						public static class: java.lang.Class<org.kaazing.net.impl.auth.DefaultDispatchChallengeHandler>;
						public register(param0: string, param1: org.kaazing.net.auth.ChallengeHandler): org.kaazing.net.auth.DispatchChallengeHandler;
						public constructor();
						public handle(param0: org.kaazing.net.auth.ChallengeRequest): org.kaazing.net.auth.ChallengeResponse;
						public lookup(param0: string): java.util.List<org.kaazing.net.auth.ChallengeHandler>;
						public canHandle(param0: org.kaazing.net.auth.ChallengeRequest): boolean;
						public unregister(param0: string, param1: org.kaazing.net.auth.ChallengeHandler): org.kaazing.net.auth.DispatchChallengeHandler;
						public clear(): void;
					}
					export module DefaultDispatchChallengeHandler {
						export class Node<T, E>  extends java.lang.Object {
							public static class: java.lang.Class<org.kaazing.net.impl.auth.DefaultDispatchChallengeHandler.Node<any,any>>;
							public addChild(param0: string, param1: E): org.kaazing.net.impl.auth.DefaultDispatchChallengeHandler.Node<T,E>;
							public getParent(): org.kaazing.net.impl.auth.DefaultDispatchChallengeHandler.Node<T,E>;
							public getKind(): E;
							public isWildcard(): boolean;
							public isRootNode(): boolean;
							public hasValues(): boolean;
							public static getWildcardChar(): string;
							public removeValue(param0: T): void;
							public getValues(): java.util.List<T>;
							public getChildrenAsList(): java.util.List<org.kaazing.net.impl.auth.DefaultDispatchChallengeHandler.Node<T,E>>;
							public getChild(param0: string): org.kaazing.net.impl.auth.DefaultDispatchChallengeHandler.Node<T,E>;
							public getName(): string;
							public hasChild(param0: string, param1: E): boolean;
							public appendValues(param0: native.Array<T>): void;
							public hasChildren(): boolean;
							public getDistanceFromRoot(): number;
						}
						export class Token<E>  extends java.lang.Object {
							public static class: java.lang.Class<org.kaazing.net.impl.auth.DefaultDispatchChallengeHandler.Token<any>>;
							public getKind(): E;
							public getName(): string;
							public setKind(param0: E): void;
							public setName(param0: string): void;
						}
						export class UriElement {
							public static class: java.lang.Class<org.kaazing.net.impl.auth.DefaultDispatchChallengeHandler.UriElement>;
							public static HOST: org.kaazing.net.impl.auth.DefaultDispatchChallengeHandler.UriElement;
							public static USERINFO: org.kaazing.net.impl.auth.DefaultDispatchChallengeHandler.UriElement;
							public static PORT: org.kaazing.net.impl.auth.DefaultDispatchChallengeHandler.UriElement;
							public static PATH: org.kaazing.net.impl.auth.DefaultDispatchChallengeHandler.UriElement;
							public static values(): native.Array<org.kaazing.net.impl.auth.DefaultDispatchChallengeHandler.UriElement>;
							public static valueOf(param0: string): org.kaazing.net.impl.auth.DefaultDispatchChallengeHandler.UriElement;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export module impl {
				export module auth {
					export class RealmUtils {
						public static class: java.lang.Class<org.kaazing.net.impl.auth.RealmUtils>;
						public static getRealm(param0: org.kaazing.net.auth.ChallengeRequest): string;
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export module impl {
				export module util {
					export class BlockingQueueImpl<E>  extends java.util.concurrent.ArrayBlockingQueue<any> {
						public static class: java.lang.Class<org.kaazing.net.impl.util.BlockingQueueImpl<any>>;
						public constructor();
						public isDone(): boolean;
						public take(): any;
						public peek(): any;
						public put(param0: any): void;
						public done(): void;
						public reset(): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export module impl {
				export module util {
					export class ResumableTimer {
						public static class: java.lang.Class<org.kaazing.net.impl.util.ResumableTimer>;
						public getDelay(): number;
						public resume(): void;
						public start(): void;
						public cancel(): void;
						public didTaskExecute(): boolean;
						public pause(): void;
						public constructor(param0: java.lang.Runnable, param1: number, param2: boolean);
					}
					export module ResumableTimer {
						export class PauseStrategy {
							public static class: java.lang.Class<org.kaazing.net.impl.util.ResumableTimer.PauseStrategy>;
							public static UPDATE_DELAY: org.kaazing.net.impl.util.ResumableTimer.PauseStrategy;
							public static DO_NOT_UPDATE_DELAY: org.kaazing.net.impl.util.ResumableTimer.PauseStrategy;
							public static valueOf(param0: string): org.kaazing.net.impl.util.ResumableTimer.PauseStrategy;
							public static values(): native.Array<org.kaazing.net.impl.util.ResumableTimer.PauseStrategy>;
						}
						export class RunnableTask {
							public static class: java.lang.Class<org.kaazing.net.impl.util.ResumableTimer.RunnableTask>;
							public constructor(param0: org.kaazing.net.impl.util.ResumableTimer, param1: java.lang.Runnable);
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export module sse {
				export abstract class SseEventReader {
					public static class: java.lang.Class<org.kaazing.net.sse.SseEventReader>;
					public getData(): string;
					public constructor();
					public getName(): string;
					public next(): org.kaazing.net.sse.SseEventType;
					public getType(): org.kaazing.net.sse.SseEventType;
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export module sse {
				export abstract class SseEventSource {
					public static class: java.lang.Class<org.kaazing.net.sse.SseEventSource>;
					public constructor();
					public connect(): void;
					public setFollowRedirect(param0: org.kaazing.net.http.HttpRedirectPolicy): void;
					public close(): void;
					public setRetryTimeout(param0: number): void;
					public getEventReader(): org.kaazing.net.sse.SseEventReader;
					public getRetryTimeout(): number;
					public getFollowRedirect(): org.kaazing.net.http.HttpRedirectPolicy;
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export module sse {
				export abstract class SseEventSourceFactory {
					public static class: java.lang.Class<org.kaazing.net.sse.SseEventSourceFactory>;
					public getDefaultRetryTimeout(): number;
					public constructor();
					public getDefaultFollowRedirect(): org.kaazing.net.http.HttpRedirectPolicy;
					public setDefaultRetryTimeout(param0: number): void;
					public static createEventSourceFactory(): org.kaazing.net.sse.SseEventSourceFactory;
					public createEventSource(param0: java.net.URI): org.kaazing.net.sse.SseEventSource;
					public setDefaultFollowRedirect(param0: org.kaazing.net.http.HttpRedirectPolicy): void;
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export module sse {
				export class SseEventType {
					public static class: java.lang.Class<org.kaazing.net.sse.SseEventType>;
					public static EOS: org.kaazing.net.sse.SseEventType;
					public static EMPTY: org.kaazing.net.sse.SseEventType;
					public static DATA: org.kaazing.net.sse.SseEventType;
					public static values(): native.Array<org.kaazing.net.sse.SseEventType>;
					public static valueOf(param0: string): org.kaazing.net.sse.SseEventType;
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export module sse {
				export class SseException {
					public static class: java.lang.Class<org.kaazing.net.sse.SseException>;
					public constructor(param0: string);
					public constructor(param0: java.lang.Exception);
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export module sse {
				export module impl {
					export class AuthenticatedEventSourceFactory extends org.kaazing.net.sse.impl.DefaultEventSourceFactory {
						public static class: java.lang.Class<org.kaazing.net.sse.impl.AuthenticatedEventSourceFactory>;
						public constructor();
						public constructor(param0: io.particle.android.sdk.cloud.ParticleCloud);
						public createEventSource(param0: java.net.URI): org.kaazing.net.sse.SseEventSource;
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export module sse {
				export module impl {
					export class AuthenticatedSseEventSourceImpl extends org.kaazing.net.sse.impl.SseEventSourceImpl {
						public static class: java.lang.Class<org.kaazing.net.sse.impl.AuthenticatedSseEventSourceImpl>;
						public getEventReader(): org.kaazing.net.sse.SseEventReader;
						public constructor();
						public close(): void;
						public isDisconnected(): boolean;
						public getRetryTimeout(): number;
						public isConnected(): boolean;
						public connect(): void;
						public getFollowRedirect(): org.kaazing.net.http.HttpRedirectPolicy;
						public getException(): org.kaazing.net.sse.SseException;
						public constructor(param0: java.net.URI);
						public constructor(param0: java.net.URI, param1: io.particle.android.sdk.cloud.ParticleCloud);
						public getSharedQueue(): org.kaazing.net.impl.util.BlockingQueueImpl<any>;
						public setFollowRedirect(param0: org.kaazing.net.http.HttpRedirectPolicy): void;
						public setException(param0: org.kaazing.net.sse.SseException): void;
						public setRetryTimeout(param0: number): void;
					}
					export module AuthenticatedSseEventSourceImpl {
						export class ReadyState {
							public static class: java.lang.Class<org.kaazing.net.sse.impl.AuthenticatedSseEventSourceImpl.ReadyState>;
							public static CONNECTING: org.kaazing.net.sse.impl.AuthenticatedSseEventSourceImpl.ReadyState;
							public static OPEN: org.kaazing.net.sse.impl.AuthenticatedSseEventSourceImpl.ReadyState;
							public static CLOSING: org.kaazing.net.sse.impl.AuthenticatedSseEventSourceImpl.ReadyState;
							public static CLOSED: org.kaazing.net.sse.impl.AuthenticatedSseEventSourceImpl.ReadyState;
							public static valueOf(param0: string): org.kaazing.net.sse.impl.AuthenticatedSseEventSourceImpl.ReadyState;
							public static values(): native.Array<org.kaazing.net.sse.impl.AuthenticatedSseEventSourceImpl.ReadyState>;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export module sse {
				export module impl {
					export class AuthenticatedSseEventStream extends org.kaazing.net.sse.impl.SseEventStream {
						public static class: java.lang.Class<org.kaazing.net.sse.impl.AuthenticatedSseEventStream>;
						public getRetryTimeout(): number;
						public constructor(param0: string, param1: io.particle.android.sdk.cloud.ParticleCloud);
						public stop(): void;
						public connect(): void;
						public getReadyState(): org.kaazing.gateway.client.impl.ws.ReadyState;
						public setRetryTimeout(param0: number): void;
						public setListener(param0: org.kaazing.net.sse.impl.SseEventStreamListener): void;
						public constructor(param0: string);
					}
					export module AuthenticatedSseEventStream {
						export class EventStreamHttpRequestListener extends org.kaazing.gateway.client.impl.http.HttpRequestListener {
							public static class: java.lang.Class<org.kaazing.net.sse.impl.AuthenticatedSseEventStream.EventStreamHttpRequestListener>;
							public requestLoaded(param0: org.kaazing.gateway.client.impl.http.HttpRequest, param1: org.kaazing.gateway.client.impl.http.HttpResponse): void;
							public errorOccurred(param0: org.kaazing.gateway.client.impl.http.HttpRequest, param1: java.lang.Exception): void;
							public requestClosed(param0: org.kaazing.gateway.client.impl.http.HttpRequest): void;
							public requestOpened(param0: org.kaazing.gateway.client.impl.http.HttpRequest): void;
							public requestProgressed(param0: org.kaazing.gateway.client.impl.http.HttpRequest, param1: org.kaazing.gateway.client.util.WrappedByteBuffer): void;
							public requestAborted(param0: org.kaazing.gateway.client.impl.http.HttpRequest): void;
							public requestReady(param0: org.kaazing.gateway.client.impl.http.HttpRequest): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export module sse {
				export module impl {
					export class DefaultEventSourceFactory extends org.kaazing.net.sse.SseEventSourceFactory {
						public static class: java.lang.Class<org.kaazing.net.sse.impl.DefaultEventSourceFactory>;
						public setDefaultFollowRedirect(param0: org.kaazing.net.http.HttpRedirectPolicy): void;
						public constructor();
						public getDefaultFollowRedirect(): org.kaazing.net.http.HttpRedirectPolicy;
						public setDefaultRetryTimeout(param0: number): void;
						public getDefaultRetryTimeout(): number;
						public createEventSource(param0: java.net.URI): org.kaazing.net.sse.SseEventSource;
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export module sse {
				export module impl {
					export class SseEventReaderImpl extends org.kaazing.net.sse.SseEventReader {
						public static class: java.lang.Class<org.kaazing.net.sse.impl.SseEventReaderImpl>;
						public constructor(param0: org.kaazing.net.sse.impl.SseEventSourceImpl, param1: org.kaazing.net.impl.util.BlockingQueueImpl<any>);
						public getType(): org.kaazing.net.sse.SseEventType;
						public constructor();
						public next(): org.kaazing.net.sse.SseEventType;
						public getData(): string;
						public getName(): string;
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export module sse {
				export module impl {
					export class SseEventSourceImpl extends org.kaazing.net.sse.SseEventSource {
						public static class: java.lang.Class<org.kaazing.net.sse.impl.SseEventSourceImpl>;
						public getEventReader(): org.kaazing.net.sse.SseEventReader;
						public constructor();
						public close(): void;
						public isDisconnected(): boolean;
						public getRetryTimeout(): number;
						public isConnected(): boolean;
						public connect(): void;
						public getFollowRedirect(): org.kaazing.net.http.HttpRedirectPolicy;
						public getException(): org.kaazing.net.sse.SseException;
						public constructor(param0: java.net.URI);
						public getSharedQueue(): org.kaazing.net.impl.util.BlockingQueueImpl<any>;
						public setFollowRedirect(param0: org.kaazing.net.http.HttpRedirectPolicy): void;
						public setException(param0: org.kaazing.net.sse.SseException): void;
						public setRetryTimeout(param0: number): void;
					}
					export module SseEventSourceImpl {
						export class ReadyState {
							public static class: java.lang.Class<org.kaazing.net.sse.impl.SseEventSourceImpl.ReadyState>;
							public static CONNECTING: org.kaazing.net.sse.impl.SseEventSourceImpl.ReadyState;
							public static OPEN: org.kaazing.net.sse.impl.SseEventSourceImpl.ReadyState;
							public static CLOSING: org.kaazing.net.sse.impl.SseEventSourceImpl.ReadyState;
							public static CLOSED: org.kaazing.net.sse.impl.SseEventSourceImpl.ReadyState;
							public static valueOf(param0: string): org.kaazing.net.sse.impl.SseEventSourceImpl.ReadyState;
							public static values(): native.Array<org.kaazing.net.sse.impl.SseEventSourceImpl.ReadyState>;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export module sse {
				export module impl {
					export class SseEventStream {
						public static class: java.lang.Class<org.kaazing.net.sse.impl.SseEventStream>;
						public getRetryTimeout(): number;
						public stop(): void;
						public connect(): void;
						public getReadyState(): org.kaazing.gateway.client.impl.ws.ReadyState;
						public setRetryTimeout(param0: number): void;
						public setListener(param0: org.kaazing.net.sse.impl.SseEventStreamListener): void;
						public constructor(param0: string);
					}
					export module SseEventStream {
						export class EventStreamHttpRequestListener extends org.kaazing.gateway.client.impl.http.HttpRequestListener {
							public static class: java.lang.Class<org.kaazing.net.sse.impl.SseEventStream.EventStreamHttpRequestListener>;
							public requestLoaded(param0: org.kaazing.gateway.client.impl.http.HttpRequest, param1: org.kaazing.gateway.client.impl.http.HttpResponse): void;
							public errorOccurred(param0: org.kaazing.gateway.client.impl.http.HttpRequest, param1: java.lang.Exception): void;
							public requestClosed(param0: org.kaazing.gateway.client.impl.http.HttpRequest): void;
							public requestOpened(param0: org.kaazing.gateway.client.impl.http.HttpRequest): void;
							public requestProgressed(param0: org.kaazing.gateway.client.impl.http.HttpRequest, param1: org.kaazing.gateway.client.util.WrappedByteBuffer): void;
							public requestAborted(param0: org.kaazing.gateway.client.impl.http.HttpRequest): void;
							public requestReady(param0: org.kaazing.gateway.client.impl.http.HttpRequest): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export module sse {
				export module impl {
					export class SseEventStreamListener {
						public static class: java.lang.Class<org.kaazing.net.sse.impl.SseEventStreamListener>;
						/**
						 * Constructs a new instance of the org.kaazing.net.sse.impl.SseEventStreamListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							streamOpened(): void;
							messageReceived(param0: string, param1: string): void;
							streamErrored(param0: java.lang.Exception): void;
						});
						public constructor();
						public streamErrored(param0: java.lang.Exception): void;
						public messageReceived(param0: string, param1: string): void;
						public streamOpened(): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export module sse {
				export module impl {
					export class SsePayload {
						public static class: java.lang.Class<org.kaazing.net.sse.impl.SsePayload>;
						public getEventName(): string;
						public setEventName(param0: string): void;
						public setData(param0: string): void;
						public getData(): string;
						public constructor(param0: string, param1: string);
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export module sse {
				export module impl {
					export abstract class SseURLConnection {
						public static class: java.lang.Class<org.kaazing.net.sse.impl.SseURLConnection>;
						public getEventReader(): org.kaazing.net.sse.SseEventReader;
						public setFollowRedirect(param0: org.kaazing.net.http.HttpRedirectPolicy): void;
						public constructor(param0: java.net.URL);
						public close(): void;
						public getRetryTimeout(): number;
						public connect(): void;
						public getFollowRedirect(): org.kaazing.net.http.HttpRedirectPolicy;
						public setRetryTimeout(param0: number): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export module sse {
				export module impl {
					export class SseURLConnectionImpl extends org.kaazing.net.sse.impl.SseURLConnection {
						public static class: java.lang.Class<org.kaazing.net.sse.impl.SseURLConnectionImpl>;
						public getEventReader(): org.kaazing.net.sse.SseEventReader;
						public getContentLength(): number;
						public getHeaderFieldInt(param0: string, param1: number): number;
						public close(): void;
						public getRetryTimeout(): number;
						public getContent(): any;
						public getUseCaches(): boolean;
						public getContentEncoding(): string;
						public getFollowRedirect(): org.kaazing.net.http.HttpRedirectPolicy;
						public setDefaultUseCaches(param0: boolean): void;
						public getLastModified(): number;
						public getHeaderFieldDate(param0: string, param1: number): number;
						public getContentLengthLong(): number;
						public setFollowRedirect(param0: org.kaazing.net.http.HttpRedirectPolicy): void;
						public getHeaderFieldLong(param0: string, param1: number): number;
						public setDoOutput(param0: boolean): void;
						public getOutputStream(): java.io.OutputStream;
						public getHeaderFieldKey(param0: number): string;
						public getHeaderField(param0: number): string;
						public getContent(param0: native.Array<java.lang.Class>): any;
						public setConnectTimeout(param0: number): void;
						public setDoInput(param0: boolean): void;
						public setIfModifiedSince(param0: number): void;
						public setRetryTimeout(param0: number): void;
						public getDate(): number;
						public setRequestProperty(param0: string, param1: string): void;
						public addRequestProperty(param0: string, param1: string): void;
						public getExpiration(): number;
						public getDoInput(): boolean;
						public getHeaderField(param0: string): string;
						public connect(): void;
						public getInputStream(): java.io.InputStream;
						public getConnectTimeout(): number;
						public getRequestProperty(param0: string): string;
						public getPermission(): java.security.Permission;
						public getIfModifiedSince(): number;
						public constructor(param0: java.net.URL);
						public getContentType(): string;
						public getHeaderFields(): java.util.Map<string,java.util.List<string>>;
						public getAllowUserInteraction(): boolean;
						public setUseCaches(param0: boolean): void;
						public getDefaultUseCaches(): boolean;
						public getReadTimeout(): number;
						public getDoOutput(): boolean;
						public getRequestProperties(): java.util.Map<string,java.util.List<string>>;
						public setReadTimeout(param0: number): void;
						public setAllowUserInteraction(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export module sse {
				export module impl {
					export module legacy {
						export class EventSource {
							public static class: java.lang.Class<org.kaazing.net.sse.impl.legacy.EventSource>;
							public constructor();
							public getReadyState(): org.kaazing.net.sse.impl.legacy.EventSource.ReadyState;
							public connect(param0: string): void;
							public disconnect(): void;
							public addEventSourceListener(param0: org.kaazing.net.sse.impl.legacy.EventSourceListener): void;
							public removeEventSourceListener(param0: org.kaazing.net.sse.impl.legacy.EventSourceListener): void;
						}
						export module EventSource {
							export class ReadyState {
								public static class: java.lang.Class<org.kaazing.net.sse.impl.legacy.EventSource.ReadyState>;
								public static CONNECTING: org.kaazing.net.sse.impl.legacy.EventSource.ReadyState;
								public static OPEN: org.kaazing.net.sse.impl.legacy.EventSource.ReadyState;
								public static CLOSED: org.kaazing.net.sse.impl.legacy.EventSource.ReadyState;
								public static values(): native.Array<org.kaazing.net.sse.impl.legacy.EventSource.ReadyState>;
								public static valueOf(param0: string): org.kaazing.net.sse.impl.legacy.EventSource.ReadyState;
							}
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export module sse {
				export module impl {
					export module legacy {
						export class EventSourceAdapter extends org.kaazing.net.sse.impl.legacy.EventSourceListener {
							public static class: java.lang.Class<org.kaazing.net.sse.impl.legacy.EventSourceAdapter>;
							public constructor();
							public onError(param0: org.kaazing.net.sse.impl.legacy.EventSourceEvent): void;
							public onMessage(param0: org.kaazing.net.sse.impl.legacy.EventSourceEvent): void;
							public onOpen(param0: org.kaazing.net.sse.impl.legacy.EventSourceEvent): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export module sse {
				export module impl {
					export module legacy {
						export class EventSourceEvent {
							public static class: java.lang.Class<org.kaazing.net.sse.impl.legacy.EventSourceEvent>;
							public constructor(param0: any, param1: org.kaazing.net.sse.impl.legacy.EventSourceEvent.Type, param2: string);
							public getData(): string;
							public constructor(param0: any, param1: org.kaazing.net.sse.impl.legacy.EventSourceEvent.Type);
							public getType(): org.kaazing.net.sse.impl.legacy.EventSourceEvent.Type;
						}
						export module EventSourceEvent {
							export class Type {
								public static class: java.lang.Class<org.kaazing.net.sse.impl.legacy.EventSourceEvent.Type>;
								public static OPEN: org.kaazing.net.sse.impl.legacy.EventSourceEvent.Type;
								public static MESSAGE: org.kaazing.net.sse.impl.legacy.EventSourceEvent.Type;
								public static ERROR: org.kaazing.net.sse.impl.legacy.EventSourceEvent.Type;
								public static valueOf(param0: string): org.kaazing.net.sse.impl.legacy.EventSourceEvent.Type;
								public static values(): native.Array<org.kaazing.net.sse.impl.legacy.EventSourceEvent.Type>;
							}
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export module sse {
				export module impl {
					export module legacy {
						export class EventSourceImpl extends org.kaazing.net.sse.impl.legacy.EventSource {
							public static class: java.lang.Class<org.kaazing.net.sse.impl.legacy.EventSourceImpl>;
							public constructor();
							public getReadyState(): org.kaazing.net.sse.impl.legacy.EventSource.ReadyState;
							public connect(param0: string): void;
							public disconnect(): void;
							public addEventSourceListener(param0: org.kaazing.net.sse.impl.legacy.EventSourceListener): void;
							public removeEventSourceListener(param0: org.kaazing.net.sse.impl.legacy.EventSourceListener): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export module sse {
				export module impl {
					export module legacy {
						export class EventSourceListener {
							public static class: java.lang.Class<org.kaazing.net.sse.impl.legacy.EventSourceListener>;
							/**
							 * Constructs a new instance of the org.kaazing.net.sse.impl.legacy.EventSourceListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onOpen(param0: org.kaazing.net.sse.impl.legacy.EventSourceEvent): void;
								onMessage(param0: org.kaazing.net.sse.impl.legacy.EventSourceEvent): void;
								onError(param0: org.kaazing.net.sse.impl.legacy.EventSourceEvent): void;
							});
							public constructor();
							public onMessage(param0: org.kaazing.net.sse.impl.legacy.EventSourceEvent): void;
							public onError(param0: org.kaazing.net.sse.impl.legacy.EventSourceEvent): void;
							public onOpen(param0: org.kaazing.net.sse.impl.legacy.EventSourceEvent): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export module sse {
				export module impl {
					export module url {
						export class SseURLStreamHandlerFactorySpiImpl extends org.kaazing.net.URLStreamHandlerFactorySpi {
							public static class: java.lang.Class<org.kaazing.net.sse.impl.url.SseURLStreamHandlerFactorySpiImpl>;
							public constructor();
							public createURLStreamHandler(param0: string): java.net.URLStreamHandler;
							public getSupportedProtocols(): java.util.Collection<string>;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export module sse {
				export module impl {
					export module url {
						export class SseURLStreamHandlerImpl {
							public static class: java.lang.Class<org.kaazing.net.sse.impl.url.SseURLStreamHandlerImpl>;
							public constructor(param0: string);
							public parseURL(param0: java.net.URL, param1: string, param2: number, param3: number): void;
							public getDefaultPort(): number;
							public openConnection(param0: java.net.URL): java.net.URLConnection;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export module ws {
				export abstract class WebSocket {
					public static class: java.lang.Class<org.kaazing.net.ws.WebSocket>;
					public getRedirectPolicy(): org.kaazing.net.http.HttpRedirectPolicy;
					public getChallengeHandler(): org.kaazing.net.auth.ChallengeHandler;
					public getEnabledExtensions(): java.util.Collection<string>;
					public getMessageReader(): org.kaazing.net.ws.WebSocketMessageReader;
					public getSupportedExtensions(): java.util.Collection<string>;
					public getNegotiatedProtocol(): string;
					public getEnabledParameter(param0: org.kaazing.net.ws.WebSocketExtension.Parameter<any>): any;
					public close(param0: number): void;
					public constructor();
					public connect(): void;
					public setChallengeHandler(param0: org.kaazing.net.auth.ChallengeHandler): void;
					public close(): void;
					public getInputStream(): java.io.InputStream;
					public getMessageWriter(): org.kaazing.net.ws.WebSocketMessageWriter;
					public getConnectTimeout(): number;
					public getEnabledProtocols(): java.util.Collection<string>;
					public setEnabledProtocols(param0: java.util.Collection<string>): void;
					public setEnabledExtensions(param0: java.util.Collection<string>): void;
					public getNegotiatedExtensions(): java.util.Collection<string>;
					public setRedirectPolicy(param0: org.kaazing.net.http.HttpRedirectPolicy): void;
					public setEnabledParameter(param0: org.kaazing.net.ws.WebSocketExtension.Parameter<any>, param1: any): void;
					public getNegotiatedParameter(param0: org.kaazing.net.ws.WebSocketExtension.Parameter<any>): any;
					public getReader(): java.io.Reader;
					public getOutputStream(): java.io.OutputStream;
					public close(param0: number, param1: string): void;
					public getWriter(): java.io.Writer;
					public setConnectTimeout(param0: number): void;
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export module ws {
				export class WebSocketException {
					public static class: java.lang.Class<org.kaazing.net.ws.WebSocketException>;
					public getReason(): string;
					public constructor(param0: string);
					public constructor(param0: number, param1: string);
					public constructor(param0: string, param1: java.lang.Exception);
					public constructor(param0: java.lang.Exception);
					public constructor(param0: number, param1: string, param2: java.lang.Exception);
					public getCode(): number;
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export module ws {
				export abstract class WebSocketExtension {
					public static class: java.lang.Class<org.kaazing.net.ws.WebSocketExtension>;
					public name(): string;
					public createParameter(param0: string, param1: java.lang.Class, param2: java.util.EnumSet): org.kaazing.net.ws.WebSocketExtension.Parameter<any>;
					public constructor();
					public getParameters(param0: native.Array<org.kaazing.net.ws.WebSocketExtension.Parameter.Metadata>): java.util.Collection<org.kaazing.net.ws.WebSocketExtension.Parameter<any>>;
					public getParameters(): java.util.Collection<org.kaazing.net.ws.WebSocketExtension.Parameter<any>>;
					public getParameter(param0: string): org.kaazing.net.ws.WebSocketExtension.Parameter<any>;
					public static getWebSocketExtension(param0: string): org.kaazing.net.ws.WebSocketExtension;
				}
				export module WebSocketExtension {
					export class Parameter<T>  extends java.lang.Object {
						public static class: java.lang.Class<org.kaazing.net.ws.WebSocketExtension.Parameter<any>>;
						public constructor(param0: org.kaazing.net.ws.WebSocketExtension, param1: string, param2: java.lang.Class<T>, param3: java.util.EnumSet<org.kaazing.net.ws.WebSocketExtension.Parameter.Metadata>);
						public extension(): org.kaazing.net.ws.WebSocketExtension;
						public name(): string;
						public temporal(): boolean;
						public anonymous(): boolean;
						public metadata(): java.util.EnumSet<org.kaazing.net.ws.WebSocketExtension.Parameter.Metadata>;
						public type(): java.lang.Class<T>;
						public required(): boolean;
					}
					export module Parameter {
						export class Metadata {
							public static class: java.lang.Class<org.kaazing.net.ws.WebSocketExtension.Parameter.Metadata>;
							public static ANONYMOUS: org.kaazing.net.ws.WebSocketExtension.Parameter.Metadata;
							public static REQUIRED: org.kaazing.net.ws.WebSocketExtension.Parameter.Metadata;
							public static TEMPORAL: org.kaazing.net.ws.WebSocketExtension.Parameter.Metadata;
							public static values(): native.Array<org.kaazing.net.ws.WebSocketExtension.Parameter.Metadata>;
							public static valueOf(param0: string): org.kaazing.net.ws.WebSocketExtension.Parameter.Metadata;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export module ws {
				export abstract class WebSocketFactory {
					public static class: java.lang.Class<org.kaazing.net.ws.WebSocketFactory>;
					public setDefaultChallengeHandler(param0: org.kaazing.net.auth.ChallengeHandler): void;
					public getDefaultConnectTimeout(): number;
					public getSupportedExtensions(): java.util.Collection<string>;
					public createWebSocket(param0: java.net.URI): org.kaazing.net.ws.WebSocket;
					public createWebSocket(param0: java.net.URI, param1: native.Array<string>): org.kaazing.net.ws.WebSocket;
					public getDefaultRedirectPolicy(): org.kaazing.net.http.HttpRedirectPolicy;
					public setDefaultRedirectPolicy(param0: org.kaazing.net.http.HttpRedirectPolicy): void;
					public setDefaultEnabledExtensions(param0: java.util.Collection<string>): void;
					public static createWebSocketFactory(): org.kaazing.net.ws.WebSocketFactory;
					public getDefaultEnabledExtensions(): java.util.Collection<string>;
					public constructor();
					public setDefaultConnectTimeout(param0: number): void;
					public getDefaultChallengeHandler(): org.kaazing.net.auth.ChallengeHandler;
					public setDefaultParameter(param0: org.kaazing.net.ws.WebSocketExtension.Parameter<any>, param1: any): void;
					public getDefaultParameter(param0: org.kaazing.net.ws.WebSocketExtension.Parameter<any>): any;
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export module ws {
				export abstract class WebSocketMessageReader {
					public static class: java.lang.Class<org.kaazing.net.ws.WebSocketMessageReader>;
					public getBinary(): java.nio.ByteBuffer;
					public getText(): string;
					public constructor();
					public getType(): org.kaazing.net.ws.WebSocketMessageType;
					public next(): org.kaazing.net.ws.WebSocketMessageType;
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export module ws {
				export class WebSocketMessageType {
					public static class: java.lang.Class<org.kaazing.net.ws.WebSocketMessageType>;
					public static EOS: org.kaazing.net.ws.WebSocketMessageType;
					public static TEXT: org.kaazing.net.ws.WebSocketMessageType;
					public static BINARY: org.kaazing.net.ws.WebSocketMessageType;
					public static valueOf(param0: string): org.kaazing.net.ws.WebSocketMessageType;
					public static values(): native.Array<org.kaazing.net.ws.WebSocketMessageType>;
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export module ws {
				export abstract class WebSocketMessageWriter {
					public static class: java.lang.Class<org.kaazing.net.ws.WebSocketMessageWriter>;
					public writeBinary(param0: java.nio.ByteBuffer): void;
					public writeText(param0: string): void;
					public constructor();
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export module ws {
				export abstract class WsURLConnection {
					public static class: java.lang.Class<org.kaazing.net.ws.WsURLConnection>;
					public getRedirectPolicy(): org.kaazing.net.http.HttpRedirectPolicy;
					public getChallengeHandler(): org.kaazing.net.auth.ChallengeHandler;
					public getEnabledExtensions(): java.util.Collection<string>;
					public getMessageReader(): org.kaazing.net.ws.WebSocketMessageReader;
					public getSupportedExtensions(): java.util.Collection<string>;
					public getNegotiatedProtocol(): string;
					public getEnabledParameter(param0: org.kaazing.net.ws.WebSocketExtension.Parameter<any>): any;
					public close(param0: number): void;
					public connect(): void;
					public setChallengeHandler(param0: org.kaazing.net.auth.ChallengeHandler): void;
					public close(): void;
					public getInputStream(): java.io.InputStream;
					public getMessageWriter(): org.kaazing.net.ws.WebSocketMessageWriter;
					public getConnectTimeout(): number;
					public constructor(param0: java.net.URL);
					public getEnabledProtocols(): java.util.Collection<string>;
					public setEnabledProtocols(param0: java.util.Collection<string>): void;
					public setEnabledExtensions(param0: java.util.Collection<string>): void;
					public getNegotiatedExtensions(): java.util.Collection<string>;
					public setRedirectPolicy(param0: org.kaazing.net.http.HttpRedirectPolicy): void;
					public setEnabledParameter(param0: org.kaazing.net.ws.WebSocketExtension.Parameter<any>, param1: any): void;
					public getNegotiatedParameter(param0: org.kaazing.net.ws.WebSocketExtension.Parameter<any>): any;
					public getReader(): java.io.Reader;
					public getOutputStream(): java.io.OutputStream;
					public close(param0: number, param1: string): void;
					public getWriter(): java.io.Writer;
					public setConnectTimeout(param0: number): void;
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export module ws {
				export module impl {
					export class DefaultWebSocketFactory extends org.kaazing.net.ws.WebSocketFactory {
						public static class: java.lang.Class<org.kaazing.net.ws.impl.DefaultWebSocketFactory>;
						public getDefaultChallengeHandler(): org.kaazing.net.auth.ChallengeHandler;
						public getDefaultRedirectPolicy(): org.kaazing.net.http.HttpRedirectPolicy;
						public constructor();
						public setDefaultEnabledExtensions(param0: java.util.Collection<string>): void;
						public setDefaultParameter(param0: org.kaazing.net.ws.WebSocketExtension.Parameter<any>, param1: any): void;
						public getDefaultConnectTimeout(): number;
						public setDefaultChallengeHandler(param0: org.kaazing.net.auth.ChallengeHandler): void;
						public getSupportedExtensions(): java.util.Collection<string>;
						public getDefaultEnabledExtensions(): java.util.Collection<string>;
						public setDefaultRedirectPolicy(param0: org.kaazing.net.http.HttpRedirectPolicy): void;
						public createWebSocket(param0: java.net.URI): org.kaazing.net.ws.WebSocket;
						public getDefaultParameter(param0: org.kaazing.net.ws.WebSocketExtension.Parameter<any>): any;
						public createWebSocket(param0: java.net.URI, param1: native.Array<string>): org.kaazing.net.ws.WebSocket;
						public setDefaultConnectTimeout(param0: number): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export module ws {
				export module impl {
					export class WebSocketImpl extends org.kaazing.net.ws.WebSocket {
						public static class: java.lang.Class<org.kaazing.net.ws.impl.WebSocketImpl>;
						public send(param0: java.nio.ByteBuffer): void;
						public close(): void;
						public getNegotiatedParameter(param0: org.kaazing.net.ws.WebSocketExtension.Parameter<any>): any;
						public getWriter(): java.io.Writer;
						public getNegotiatedExtensions(): java.util.Collection<string>;
						public isDisconnected(): boolean;
						public isConnected(): boolean;
						public setChallengeHandler(param0: org.kaazing.net.auth.ChallengeHandler): void;
						public getEnabledParameter(param0: org.kaazing.net.ws.WebSocketExtension.Parameter<any>): any;
						public getSupportedExtensions(): java.util.Collection<string>;
						public constructor(param0: java.net.URI, param1: java.util.Map<string,org.kaazing.net.ws.impl.spi.WebSocketExtensionFactorySpi>);
						public getCompositeChannel(): org.kaazing.gateway.client.impl.ws.WebSocketCompositeChannel;
						public getOutputStream(): java.io.OutputStream;
						public setEnabledExtensions(param0: java.util.Collection<string>): void;
						public getEnabledProtocols(): java.util.Collection<string>;
						public setConnectTimeout(param0: number): void;
						public setException(param0: java.lang.Exception): void;
						public getNegotiatedProtocol(): string;
						public getChallengeHandler(): org.kaazing.net.auth.ChallengeHandler;
						public constructor();
						public getRedirectPolicy(): org.kaazing.net.http.HttpRedirectPolicy;
						public close(param0: number): void;
						public getMessageReader(): org.kaazing.net.ws.WebSocketMessageReader;
						public getEnabledExtensions(): java.util.Collection<string>;
						public setRedirectPolicy(param0: org.kaazing.net.http.HttpRedirectPolicy): void;
						public connect(): void;
						public getInputStream(): java.io.InputStream;
						public getConnectTimeout(): number;
						public send(param0: string): void;
						public getMessageWriter(): org.kaazing.net.ws.WebSocketMessageWriter;
						public getReader(): java.io.Reader;
						public setEnabledParameter(param0: org.kaazing.net.ws.WebSocketExtension.Parameter<any>, param1: any): void;
						public setEnabledProtocols(param0: java.util.Collection<string>): void;
						public getException(): java.lang.Exception;
						public close(param0: number, param1: string): void;
						public constructor(param0: java.net.URI, param1: java.util.Map<string,org.kaazing.net.ws.impl.spi.WebSocketExtensionFactorySpi>, param2: org.kaazing.net.http.HttpRedirectPolicy, param3: java.util.Collection<string>, param4: java.util.Collection<string>, param5: java.util.Map<string,org.kaazing.net.ws.impl.WsExtensionParameterValuesSpiImpl>, param6: org.kaazing.net.auth.ChallengeHandler, param7: number);
					}
					export module WebSocketImpl {
						export class ReadyState {
							public static class: java.lang.Class<org.kaazing.net.ws.impl.WebSocketImpl.ReadyState>;
							public static CONNECTING: org.kaazing.net.ws.impl.WebSocketImpl.ReadyState;
							public static OPEN: org.kaazing.net.ws.impl.WebSocketImpl.ReadyState;
							public static CLOSING: org.kaazing.net.ws.impl.WebSocketImpl.ReadyState;
							public static CLOSED: org.kaazing.net.ws.impl.WebSocketImpl.ReadyState;
							public static values(): native.Array<org.kaazing.net.ws.impl.WebSocketImpl.ReadyState>;
							public static valueOf(param0: string): org.kaazing.net.ws.impl.WebSocketImpl.ReadyState;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export module ws {
				export module impl {
					export class WsExtensionParameterValuesSpiImpl extends org.kaazing.net.ws.impl.spi.WebSocketExtensionParameterValuesSpi {
						public static class: java.lang.Class<org.kaazing.net.ws.impl.WsExtensionParameterValuesSpiImpl>;
						public getParameters(): java.util.Collection<org.kaazing.net.ws.WebSocketExtension.Parameter<any>>;
						public getParameterValue(param0: org.kaazing.net.ws.WebSocketExtension.Parameter<any>): any;
						public setParameterValue(param0: org.kaazing.net.ws.WebSocketExtension.Parameter<any>, param1: string): void;
						public setParameterValue(param0: org.kaazing.net.ws.WebSocketExtension.Parameter<any>, param1: any): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export module ws {
				export module impl {
					export class WsURLConnectionImpl extends org.kaazing.net.ws.WsURLConnection {
						public static class: java.lang.Class<org.kaazing.net.ws.impl.WsURLConnectionImpl>;
						public getContentLength(): number;
						public close(): void;
						public getWriter(): java.io.Writer;
						public getNegotiatedExtensions(): java.util.Collection<string>;
						public getContent(): any;
						public setChallengeHandler(param0: org.kaazing.net.auth.ChallengeHandler): void;
						public getContentEncoding(): string;
						public setDefaultUseCaches(param0: boolean): void;
						public getOutputStream(): java.io.OutputStream;
						public getHeaderFieldLong(param0: string, param1: number): number;
						public getEnabledProtocols(): java.util.Collection<string>;
						public getHeaderFieldKey(param0: number): string;
						public getHeaderField(param0: number): string;
						public getContent(param0: native.Array<java.lang.Class>): any;
						public setConnectTimeout(param0: number): void;
						public getDate(): number;
						public addRequestProperty(param0: string, param1: string): void;
						public close(param0: number): void;
						public getMessageReader(): org.kaazing.net.ws.WebSocketMessageReader;
						public getEnabledExtensions(): java.util.Collection<string>;
						public setRedirectPolicy(param0: org.kaazing.net.http.HttpRedirectPolicy): void;
						public getHeaderField(param0: string): string;
						public connect(): void;
						public getConnectTimeout(): number;
						public getRequestProperty(param0: string): string;
						public getPermission(): java.security.Permission;
						public getIfModifiedSince(): number;
						public getReader(): java.io.Reader;
						public setUseCaches(param0: boolean): void;
						public getDefaultUseCaches(): boolean;
						public getDoOutput(): boolean;
						public setReadTimeout(param0: number): void;
						public setAllowUserInteraction(param0: boolean): void;
						public getHeaderFieldInt(param0: string, param1: number): number;
						public getNegotiatedParameter(param0: org.kaazing.net.ws.WebSocketExtension.Parameter<any>): any;
						public getUseCaches(): boolean;
						public getEnabledParameter(param0: org.kaazing.net.ws.WebSocketExtension.Parameter<any>): any;
						public getSupportedExtensions(): java.util.Collection<string>;
						public getLastModified(): number;
						public getHeaderFieldDate(param0: string, param1: number): number;
						public getContentLengthLong(): number;
						public setEnabledExtensions(param0: java.util.Collection<string>): void;
						public setDoOutput(param0: boolean): void;
						public constructor(param0: java.net.URL, param1: java.util.Map<string,org.kaazing.net.ws.impl.spi.WebSocketExtensionFactorySpi>);
						public setDoInput(param0: boolean): void;
						public getNegotiatedProtocol(): string;
						public setIfModifiedSince(param0: number): void;
						public setRequestProperty(param0: string, param1: string): void;
						public getChallengeHandler(): org.kaazing.net.auth.ChallengeHandler;
						public getRedirectPolicy(): org.kaazing.net.http.HttpRedirectPolicy;
						public getExpiration(): number;
						public getDoInput(): boolean;
						public getInputStream(): java.io.InputStream;
						public getMessageWriter(): org.kaazing.net.ws.WebSocketMessageWriter;
						public constructor(param0: java.net.URL);
						public getContentType(): string;
						public getHeaderFields(): java.util.Map<string,java.util.List<string>>;
						public getAllowUserInteraction(): boolean;
						public setEnabledProtocols(param0: java.util.Collection<string>): void;
						public setEnabledParameter(param0: org.kaazing.net.ws.WebSocketExtension.Parameter<any>, param1: any): void;
						public getReadTimeout(): number;
						public getRequestProperties(): java.util.Map<string,java.util.List<string>>;
						public close(param0: number, param1: string): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export module ws {
				export module impl {
					export module io {
						export class WsInputStreamImpl {
							public static class: java.lang.Class<org.kaazing.net.ws.impl.io.WsInputStreamImpl>;
							public mark(param0: number): void;
							public markSupported(): boolean;
							public read(param0: native.Array<number>): number;
							public close(): void;
							public constructor(param0: org.kaazing.net.ws.impl.io.WsMessageReaderAdapter);
							public available(): number;
							public read(): number;
							public isClosed(): boolean;
							public read(param0: native.Array<number>, param1: number, param2: number): number;
							public reset(): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export module ws {
				export module impl {
					export module io {
						export class WsMessagePullParser {
							public static class: java.lang.Class<org.kaazing.net.ws.impl.io.WsMessagePullParser>;
							public nextText(): string;
							public nextBinary(): java.nio.ByteBuffer;
							public constructor(param0: org.kaazing.net.ws.WebSocketMessageReader);
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export module ws {
				export module impl {
					export module io {
						export class WsMessageReaderAdapter {
							public static class: java.lang.Class<org.kaazing.net.ws.impl.io.WsMessageReaderAdapter>;
							public getType(): org.kaazing.net.ws.WebSocketMessageType;
							public constructor(param0: org.kaazing.net.ws.WebSocketMessageReader);
							public readBinary(): java.nio.ByteBuffer;
							public readText(): string;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export module ws {
				export module impl {
					export module io {
						export class WsMessageReaderImpl extends org.kaazing.net.ws.WebSocketMessageReader {
							public static class: java.lang.Class<org.kaazing.net.ws.impl.io.WsMessageReaderImpl>;
							public constructor();
							public getText(): string;
							public next(): org.kaazing.net.ws.WebSocketMessageType;
							public close(): void;
							public getBinary(): java.nio.ByteBuffer;
							public getType(): org.kaazing.net.ws.WebSocketMessageType;
							public constructor(param0: org.kaazing.net.ws.impl.WebSocketImpl, param1: org.kaazing.net.impl.util.BlockingQueueImpl<any>);
							public isClosed(): boolean;
							public reset(): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export module ws {
				export module impl {
					export module io {
						export class WsMessageWriterImpl extends org.kaazing.net.ws.WebSocketMessageWriter {
							public static class: java.lang.Class<org.kaazing.net.ws.impl.io.WsMessageWriterImpl>;
							public constructor();
							public close(): void;
							public writeText(param0: string): void;
							public constructor(param0: org.kaazing.net.ws.impl.WebSocketImpl);
							public isClosed(): boolean;
							public writeBinary(param0: java.nio.ByteBuffer): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export module ws {
				export module impl {
					export module io {
						export class WsOutputStreamImpl {
							public static class: java.lang.Class<org.kaazing.net.ws.impl.io.WsOutputStreamImpl>;
							public close(): void;
							public constructor(param0: org.kaazing.net.ws.WebSocketMessageWriter);
							public flush(): void;
							public write(param0: number): void;
							public isClosed(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export module ws {
				export module impl {
					export module io {
						export class WsReaderImpl {
							public static class: java.lang.Class<org.kaazing.net.ws.impl.io.WsReaderImpl>;
							public mark(param0: number): void;
							public close(): void;
							public read(param0: native.Array<string>, param1: number, param2: number): number;
							public skip(param0: number): number;
							public constructor(param0: org.kaazing.net.ws.impl.io.WsMessageReaderAdapter);
							public ready(): boolean;
							public read(): number;
							public isClosed(): boolean;
							public read(param0: java.nio.CharBuffer): number;
							public read(param0: native.Array<string>): number;
							public reset(): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export module ws {
				export module impl {
					export module io {
						export class WsWriterImpl {
							public static class: java.lang.Class<org.kaazing.net.ws.impl.io.WsWriterImpl>;
							public close(): void;
							public constructor(param0: org.kaazing.net.ws.WebSocketMessageWriter);
							public flush(): void;
							public write(param0: native.Array<string>, param1: number, param2: number): void;
							public isClosed(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export module ws {
				export module impl {
					export module spi {
						export abstract class WebSocketExtensionFactorySpi {
							public static class: java.lang.Class<org.kaazing.net.ws.impl.spi.WebSocketExtensionFactorySpi>;
							public constructor();
							public getExtensionName(): string;
							public createWsExtension(param0: org.kaazing.net.ws.impl.spi.WebSocketExtensionParameterValuesSpi): org.kaazing.net.ws.impl.spi.WebSocketExtensionSpi;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export module ws {
				export module impl {
					export module spi {
						export abstract class WebSocketExtensionHandlerSpi {
							public static class: java.lang.Class<org.kaazing.net.ws.impl.spi.WebSocketExtensionHandlerSpi>;
							public constructor();
							public filterReceiveClose(param0: org.kaazing.net.ws.impl.spi.WebSocketExtensionHandlerSpi.NextHandler, param1: org.kaazing.net.ws.impl.spi.WebSocketExtensionHandlerSpi.WsCloseMessage): void;
							public filterSendHandshakeRequest(param0: org.kaazing.net.ws.impl.spi.WebSocketExtensionHandlerSpi.NextHandler, param1: org.kaazing.net.ws.impl.spi.WebSocketExtensionHandlerSpi.WsHandshakeRequest): void;
							public filterReceiveBinaryMessage(param0: org.kaazing.net.ws.impl.spi.WebSocketExtensionHandlerSpi.NextHandler, param1: org.kaazing.net.ws.impl.spi.WebSocketExtensionHandlerSpi.WsBinaryMessage): void;
							public filterSendBinaryMessage(param0: org.kaazing.net.ws.impl.spi.WebSocketExtensionHandlerSpi.NextHandler, param1: org.kaazing.net.ws.impl.spi.WebSocketExtensionHandlerSpi.WsBinaryMessage): void;
							public filterReceiveTextMessage(param0: org.kaazing.net.ws.impl.spi.WebSocketExtensionHandlerSpi.NextHandler, param1: org.kaazing.net.ws.impl.spi.WebSocketExtensionHandlerSpi.WsTextMessage): void;
							public filterReceiveHandshakeResponse(param0: org.kaazing.net.ws.impl.spi.WebSocketExtensionHandlerSpi.NextHandler, param1: org.kaazing.net.ws.impl.spi.WebSocketExtensionHandlerSpi.WsHandshakeResponse): void;
							public filterSendTextMessage(param0: org.kaazing.net.ws.impl.spi.WebSocketExtensionHandlerSpi.NextHandler, param1: org.kaazing.net.ws.impl.spi.WebSocketExtensionHandlerSpi.WsTextMessage): void;
							public filterSendClose(param0: org.kaazing.net.ws.impl.spi.WebSocketExtensionHandlerSpi.NextHandler, param1: org.kaazing.net.ws.impl.spi.WebSocketExtensionHandlerSpi.WsCloseMessage): void;
						}
						export module WebSocketExtensionHandlerSpi {
							export abstract class Adapter extends org.kaazing.net.ws.impl.spi.WebSocketExtensionHandlerSpi {
								public static class: java.lang.Class<org.kaazing.net.ws.impl.spi.WebSocketExtensionHandlerSpi.Adapter>;
								public filterSendBinaryMessage(param0: org.kaazing.net.ws.impl.spi.WebSocketExtensionHandlerSpi.NextHandler, param1: org.kaazing.net.ws.impl.spi.WebSocketExtensionHandlerSpi.WsBinaryMessage): void;
								public filterReceiveHandshakeResponse(param0: org.kaazing.net.ws.impl.spi.WebSocketExtensionHandlerSpi.NextHandler, param1: org.kaazing.net.ws.impl.spi.WebSocketExtensionHandlerSpi.WsHandshakeResponse): void;
								public filterReceiveBinaryMessage(param0: org.kaazing.net.ws.impl.spi.WebSocketExtensionHandlerSpi.NextHandler, param1: org.kaazing.net.ws.impl.spi.WebSocketExtensionHandlerSpi.WsBinaryMessage): void;
								public filterReceiveClose(param0: org.kaazing.net.ws.impl.spi.WebSocketExtensionHandlerSpi.NextHandler, param1: org.kaazing.net.ws.impl.spi.WebSocketExtensionHandlerSpi.WsCloseMessage): void;
								public filterSendClose(param0: org.kaazing.net.ws.impl.spi.WebSocketExtensionHandlerSpi.NextHandler, param1: org.kaazing.net.ws.impl.spi.WebSocketExtensionHandlerSpi.WsCloseMessage): void;
								public filterSendTextMessage(param0: org.kaazing.net.ws.impl.spi.WebSocketExtensionHandlerSpi.NextHandler, param1: org.kaazing.net.ws.impl.spi.WebSocketExtensionHandlerSpi.WsTextMessage): void;
								public constructor();
								public filterSendHandshakeRequest(param0: org.kaazing.net.ws.impl.spi.WebSocketExtensionHandlerSpi.NextHandler, param1: org.kaazing.net.ws.impl.spi.WebSocketExtensionHandlerSpi.WsHandshakeRequest): void;
								public filterReceiveTextMessage(param0: org.kaazing.net.ws.impl.spi.WebSocketExtensionHandlerSpi.NextHandler, param1: org.kaazing.net.ws.impl.spi.WebSocketExtensionHandlerSpi.WsTextMessage): void;
							}
							export abstract class NextHandler {
								public static class: java.lang.Class<org.kaazing.net.ws.impl.spi.WebSocketExtensionHandlerSpi.NextHandler>;
								public filterSendClose(param0: org.kaazing.net.ws.impl.spi.WebSocketExtensionHandlerSpi.WsCloseMessage): void;
								public filterReceiveBinaryMessage(param0: org.kaazing.net.ws.impl.spi.WebSocketExtensionHandlerSpi.WsBinaryMessage): void;
								public filterSendTextMessage(param0: org.kaazing.net.ws.impl.spi.WebSocketExtensionHandlerSpi.WsTextMessage): void;
								public filterReceiveTextMessage(param0: org.kaazing.net.ws.impl.spi.WebSocketExtensionHandlerSpi.WsTextMessage): void;
								public filterReceiveHandshakeResponse(param0: org.kaazing.net.ws.impl.spi.WebSocketExtensionHandlerSpi.WsHandshakeResponse): void;
								public filterReceiveClose(param0: org.kaazing.net.ws.impl.spi.WebSocketExtensionHandlerSpi.WsCloseMessage): void;
								public filterSendBinaryMessage(param0: org.kaazing.net.ws.impl.spi.WebSocketExtensionHandlerSpi.WsBinaryMessage): void;
								public constructor();
								public filterSendHandshakeRequest(param0: org.kaazing.net.ws.impl.spi.WebSocketExtensionHandlerSpi.WsHandshakeRequest): void;
							}
							export class WsBinaryMessage {
								public static class: java.lang.Class<org.kaazing.net.ws.impl.spi.WebSocketExtensionHandlerSpi.WsBinaryMessage>;
							}
							export class WsCloseMessage {
								public static class: java.lang.Class<org.kaazing.net.ws.impl.spi.WebSocketExtensionHandlerSpi.WsCloseMessage>;
							}
							export class WsHandshakeRequest {
								public static class: java.lang.Class<org.kaazing.net.ws.impl.spi.WebSocketExtensionHandlerSpi.WsHandshakeRequest>;
							}
							export class WsHandshakeResponse {
								public static class: java.lang.Class<org.kaazing.net.ws.impl.spi.WebSocketExtensionHandlerSpi.WsHandshakeResponse>;
							}
							export class WsTextMessage {
								public static class: java.lang.Class<org.kaazing.net.ws.impl.spi.WebSocketExtensionHandlerSpi.WsTextMessage>;
							}
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export module ws {
				export module impl {
					export module spi {
						export abstract class WebSocketExtensionParameterValuesSpi {
							public static class: java.lang.Class<org.kaazing.net.ws.impl.spi.WebSocketExtensionParameterValuesSpi>;
							public constructor();
							public getParameterValue(param0: org.kaazing.net.ws.WebSocketExtension.Parameter<any>): any;
							public getParameters(): java.util.Collection<org.kaazing.net.ws.WebSocketExtension.Parameter<any>>;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export module ws {
				export module impl {
					export module spi {
						export abstract class WebSocketExtensionSpi {
							public static class: java.lang.Class<org.kaazing.net.ws.impl.spi.WebSocketExtensionSpi>;
							public constructor();
							public createHandler(): org.kaazing.net.ws.impl.spi.WebSocketExtensionHandlerSpi;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export module ws {
				export module impl {
					export module url {
						export class WsURLStreamHandlerFactorySpiImpl extends org.kaazing.net.URLStreamHandlerFactorySpi {
							public static class: java.lang.Class<org.kaazing.net.ws.impl.url.WsURLStreamHandlerFactorySpiImpl>;
							public constructor();
							public createURLStreamHandler(param0: string): java.net.URLStreamHandler;
							public getSupportedProtocols(): java.util.Collection<string>;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export module ws {
				export module impl {
					export module url {
						export class WsURLStreamHandlerImpl {
							public static class: java.lang.Class<org.kaazing.net.ws.impl.url.WsURLStreamHandlerImpl>;
							public openConnection(param0: java.net.URL): org.kaazing.net.ws.WsURLConnection;
							public toExternalForm(param0: java.net.URL): string;
							public parseURL(param0: java.net.URL, param1: string, param2: number, param3: number): void;
							public getDefaultPort(): number;
							public constructor(param0: java.util.Map<string,org.kaazing.net.ws.impl.spi.WebSocketExtensionFactorySpi>);
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export module ws {
				export module impl {
					export module url {
						export class WssURLStreamHandlerFactorySpiImpl extends org.kaazing.net.ws.impl.url.WsURLStreamHandlerFactorySpiImpl {
							public static class: java.lang.Class<org.kaazing.net.ws.impl.url.WssURLStreamHandlerFactorySpiImpl>;
							public constructor();
							public createURLStreamHandler(param0: string): java.net.URLStreamHandler;
							public getSupportedProtocols(): java.util.Collection<string>;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kaazing {
		export module net {
			export module ws {
				export module impl {
					export module url {
						export class WssURLStreamHandlerImpl extends org.kaazing.net.ws.impl.url.WsURLStreamHandlerImpl {
							public static class: java.lang.Class<org.kaazing.net.ws.impl.url.WssURLStreamHandlerImpl>;
							public getDefaultPort(): number;
							public constructor(param0: java.util.Map<string,org.kaazing.net.ws.impl.spi.WebSocketExtensionFactorySpi>);
						}
					}
				}
			}
		}
	}
}

//Generics information:
//io.particle.android.sdk.cloud.ParticleDevice.VariableRequester:2
//io.particle.android.sdk.cloud.Responses.ReadVariableResponse:1
//io.particle.android.sdk.utils.Async.ApiProcedure:1
//io.particle.android.sdk.utils.Async.ApiWork:2
//io.particle.android.sdk.utils.Async.AsyncApiWorker:2
//io.particle.android.sdk.utils.Funcy.CollectionFactory:1
//io.particle.android.sdk.utils.Funcy.Func:2
//io.particle.android.sdk.utils.Funcy.Predicate:1
//io.particle.android.sdk.utils.Py.PySet:1
//org.kaazing.gateway.client.impl.DecoderInput:1
//org.kaazing.gateway.client.impl.DecoderListener:1
//org.kaazing.gateway.client.impl.EncoderOutput:1
//org.kaazing.gateway.client.impl.wseb.WebSocketEmulatedDecoder:1
//org.kaazing.gateway.client.impl.wseb.WebSocketEmulatedDecoderImpl:1
//org.kaazing.gateway.client.impl.wseb.WebSocketEmulatedDecoderListener:1
//org.kaazing.gateway.client.impl.wseb.WebSocketEmulatedEncoder:1
//org.kaazing.gateway.client.impl.wseb.WebSocketEmulatedEncoderImpl:1
//org.kaazing.gateway.client.util.GenericURI:1
//org.kaazing.net.impl.auth.DefaultDispatchChallengeHandler.Node:2
//org.kaazing.net.impl.auth.DefaultDispatchChallengeHandler.Token:1
//org.kaazing.net.impl.util.BlockingQueueImpl:1
//org.kaazing.net.ws.WebSocketExtension.Parameter:1

