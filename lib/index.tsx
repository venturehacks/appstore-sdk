import React, { useEffect } from 'react';

interface AppstoreContextType {
  endUserSession: () => void;
  getUserData: () => { 
    getUserDataLoading: boolean,
    getUserDataCalled: boolean,
    getUserDataError: any,
    userData: String,
    appUserId: String
  };
  submitUserData: (data: any) => void;
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
  customFields: CustomFieldType[] | undefined;
}