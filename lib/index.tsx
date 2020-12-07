import React, { useEffect } from 'react';

interface AppstoreContextType {
  appUserId: string;
  endUserSession: () => void;
  useAppUserData: () => { 
    appUserDataLoading: boolean,
    appUserDataCalled: boolean,
    appUserDataError: any,
    appUserData: String,
    appUserId: String
  };
  submitAppUserData: (data: string) => void;
  makeApiRequest: (input: MakeApiRequestParams) => any;
}

export const AppstoreContext = React.createContext({} as AppstoreContextType);

export type GetResultsType = GetResultsObjectType[]

export interface CustomFieldType {
  title: string;
  value: any;
}

export interface GetResultsObjectType {
  appSlug: string;
  subRouteSlug: string;
  dateCompleted: Date;
  nextAttemptDate: Date;
  attemptsUsed: number | undefined;
  maxAttempts: number | undefined;
  customFields: CustomFieldType[] | undefined;
}

export type RequestType = 'GET' | 'POST';
export interface HeaderOrParamType {
  name: string;
  value: string;
}

export interface MakeApiRequestParams {
  endpoint: string;
  requestType: RequestType;
  endpointParams?: HeaderOrParamType[];
  headers?: HeaderOrParamType[];
  secretNames?: string[];
  body?: string;
}
