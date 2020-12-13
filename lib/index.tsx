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
  submitAppUserData: () => void;
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

export type RequestMethod = 'GET' | 'POST';
export interface HeaderOrParamType {
  name: string;
  value: string;
}

export interface MakeApiRequestParams {
  endpoint: string;
  requestType: RequestMethod;
  endpointParams?: HeaderOrParamType[];
  headers?: HeaderOrParamType[];
  secretNames?: string[];
  body?: string;
}
export interface ManifestType {
  app_slug: string;
  author: string;
  description: string;
  homepage_url: string;
  name: string;
  subroutes: UnserializedSubrouteData[];
  version: number;
}

export interface UnserializedSubrouteData {
  type_specific_data: UnserializedSubrouteTypeSpecificData;
  name: string;
  slug: string;
  type: SubrouteType;
}

export type UnserializedSubrouteTypeSpecificData = UnserializedAssessmentData;

export interface UnserializedAssessmentData {
  allotted_duration_in_minutes: number;
  autograding: string;
  categories: string[];
  difficulty: DifficultyType;
  example_header: string;
  grade_shape: string;
  long_description: string;
  relevant_roles: string[];
  retake_policy: string;
  short_description: string;
  suggested_duration_in_minutes: number;
  time_text: string;
  type_description: string;
  why_take: string;
}

export type DifficultyType = 'EASY' | 'MEDIUM' | 'HARD';
export type SubrouteType = 'assessment';
