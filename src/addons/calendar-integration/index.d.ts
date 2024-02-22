/* eslint-disable @typescript-eslint/no-explicit-any */
export interface MbscCalendarSyncConfig {
  clientId?: string;
  timezone?: string;
  timezonePlugin?: any;
  onInit?(): void;
  onSignedIn?(): void;
  onSignedOut?(): void;
}

export interface MbscCalendarSync<T extends MbscCalendarSyncConfig> {
  init(config: T): void;
  signIn(): Promise<any>;
  signOut(): Promise<any>;
  isSignedIn(): boolean;
  getCalendars(callback?: (calendars: any[]) => void): Promise<any>;
  getEvents(calendarIds: string | string[], start: Date, end: Date, callback?: (events: any[]) => void): Promise<any>;
  addEvent(calendarId: string, event: any, callback?: (addedEvent: any) => void): Promise<any>;
  updateEvent(calendarId: string, event: any, callback?: (updatedEvent: any) => void): Promise<any>;
  deleteEvent(calendarId: string, event: any, callback?: (deletedEvent: any) => void): Promise<any>;
}

export interface MbscGoogleCalendarSyncConfig extends MbscCalendarSyncConfig {
  clientId?: string;
  apiKey?: string;
  auth?: 'client' | 'server';
  authUrl?: string;
  gapi?: any;
  gis?: any;
  refreshUrl?: string;
  scopes?: string;
}

export declare const googleCalendarSync: MbscCalendarSync<MbscGoogleCalendarSyncConfig>;

export interface MbscOutlookCalendarSyncConfig extends MbscCalendarSyncConfig {
  clientId?: string;
  msal?: any;
  msalClient?: any;
  pageSize?: number;
  redirectUri: string;
}
export declare const outlookCalendarSync: MbscCalendarSync<MbscOutlookCalendarSyncConfig>;
