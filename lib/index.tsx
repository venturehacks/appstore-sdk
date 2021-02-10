import React, { useEffect } from "react";

// TODO (DF): remove app references in favor of vendor once it is safe
interface AppstoreContextType {
  appUserId?: string;
  vendorUserId?: string;
  endAppUserSession?: () => void;
  endVendorUserSession?: () => void;
  useAppUserDatastore?: () => {
    appUserDataLoading: boolean;
    appUserDataCalled: boolean;
    appUserDataError: any;
    appUserData: string | undefined;
    appUserId: string;
  };
  useVendorUserDatastore?: () => {
    vendorUserDataLoading: boolean;
    vendorUserDataCalled: boolean;
    vendorUserDataError: any;
    vendorUserData: string | undefined;
    vendorUserId: string;
  };
  useSubmitAppUserDatastore?: () => [(data: string) => void, any];
  useSubmitVendorUserDatastore?: () => [(data: string) => void, any];
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
  appSlug?: string;
  vendorSlug?: string;
  subrouteSlug: string;
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
  vendor_slug?: string;
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
  best_for_who: string;
  categories: string[];
  difficulty: AssessmentDifficultyType;
  example_header: string;
  format: string;
  grade_shape: string;
  long_description: string;
  relevant_roles: string[];
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
export type SubrouteType = "assessment";
