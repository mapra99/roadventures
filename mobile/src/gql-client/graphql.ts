/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: { input: any; output: any; }
};

/** Autogenerated input type of CreateTrip */
export type CreateTripInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<TripStatus>;
};

/** Autogenerated return type of CreateTrip. */
export type CreateTripPayload = {
  __typename?: 'CreateTripPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors: Array<Scalars['String']['output']>;
  trip?: Maybe<Trip>;
};

/** Autogenerated input type of FinishTrip */
export type FinishTripInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  tripId: Scalars['ID']['input'];
};

/** Autogenerated return type of FinishTrip. */
export type FinishTripPayload = {
  __typename?: 'FinishTripPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors: Array<Scalars['String']['output']>;
  trip?: Maybe<Trip>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createTrip?: Maybe<CreateTripPayload>;
  finishTrip?: Maybe<FinishTripPayload>;
  trackLocation?: Maybe<TrackLocationPayload>;
};


export type MutationCreateTripArgs = {
  input: CreateTripInput;
};


export type MutationFinishTripArgs = {
  input: FinishTripInput;
};


export type MutationTrackLocationArgs = {
  input: TrackLocationInput;
};

export type Query = {
  __typename?: 'Query';
  trip: Trip;
  trips: Array<Trip>;
};


export type QueryTripArgs = {
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of TrackLocation */
export type TrackLocationInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
  recordedAt: Scalars['ISO8601DateTime']['input'];
  tripId: Scalars['ID']['input'];
};

/** Autogenerated return type of TrackLocation. */
export type TrackLocationPayload = {
  __typename?: 'TrackLocationPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors: Array<Scalars['String']['output']>;
  trackingLocation?: Maybe<TrackingLocation>;
};

/** A tracking location */
export type TrackingLocation = {
  __typename?: 'TrackingLocation';
  id: Scalars['ID']['output'];
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
  recordedAt: Scalars['ISO8601DateTime']['output'];
  trip: Trip;
};

/** A trip */
export type Trip = {
  __typename?: 'Trip';
  id: Scalars['ID']['output'];
  status: TripStatus;
  trackingLocations: Array<TrackingLocation>;
  user: User;
};

export enum TripStatus {
  Finished = 'finished',
  Planned = 'planned',
  Started = 'started'
}

/** A user */
export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  trips: Array<Trip>;
};
