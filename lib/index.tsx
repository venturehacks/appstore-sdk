import React, { useEffect } from 'react';

interface AppstoreContextType {
  appUserId: string;
  endUserSession: () => void;
  useGetUserData: () => { 
    getUserDataLoading: boolean,
    getUserDataCalled: boolean,
    getUserDataError: any,
    userData: String,
    appUserId: String
  };
  useSubmitUserData: (data: string) => void;
  useMakeApiRequest: (input: MakeApiRequestParams) => any;
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
  body: string;
  endpoint: string;
  endpointParams: HeaderOrParamType[];
  headers: HeaderOrParamType[];
  requestType: RequestType;
  secretNames: string[];
}
