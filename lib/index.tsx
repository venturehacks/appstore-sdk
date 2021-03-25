import React, { useEffect } from "react";

interface AppstoreContextType {
  appstoreUserId: string;
  endAppstoreUserSession: () => void;
  useDatastore: () => {
    dataLoading: boolean;
    dataCalled: boolean;
    dataError: any;
    data: string | undefined;
    appstoreUserId: string;
  };
  useSubmitDatastore: () => [(data: string) => void, any];
  useMakeApiRequest: (
    input: MakeApiRequestParams,
    skip: boolean
  ) => { refetch: any; data: any; loading: boolean };
}

export const AppstoreContext = React.createContext({} as AppstoreContextType);

export type GetResultsType = GetResultsObjectType[];

export interface CustomFieldType {
  title: string;
  value: any;
}

export interface GetResultsObjectType {
  appSlug: string;
  vendorSlug: string;
  dateCompletedAt: Date | string;
  nextAttemptDate: Date | string;
  attemptsUsed: number | undefined;
  maxAttempts: number | undefined;
  customFields: CustomFieldType[] | undefined;
}

export enum RequestMethod {
  GET = "GET",
  POST = "POST",
}
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
  app_slug?: string;
  vendor_slug: string;
  author: string;
  description: string;
  homepage_url: string;
  name: string;
  apps: UnserializedAppData[];
  version: number;
  resources: string[];
}

export interface UnserializedAppData {
  type_specific_data: UnserializedAppTypeSpecificData;
  name: string;
  slug: string;
  type: AppType;
}

export type UnserializedAppTypeSpecificData = UnserializedAssessmentData;

export interface UnserializedAssessmentData {
  allotted_duration_in_minutes: number;
  autograding: string;
  best_for_who: string;
  categories: string[];
  difficulty: AssessmentDifficultyType;
  example_header: string;
  format: string;
  grade_shape: string;
  instructions?: string[];
  long_description: string;
  minimum_passing_score: number;
  relevant_roles: string[];
  resources: string[];
  retake_policy: string;
  short_description: string;
  suggested_duration_in_minutes: number;
  time_text: string;
  tips: string[];
  type_description: string;
  why_take: string;
}

export declare type AssessmentDifficultyType =
  | "EASY"
  | "MEDIUM"
  | "HARD"
  | "N/A";
export type AppType = "assessment";
