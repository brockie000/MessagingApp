import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type FriendRequestsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FriendRequestsUsersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UsersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MessageMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ChatRoomUsersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ChatRoomMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class FriendRequests {
  readonly id: string;
  readonly FriendRequestsUsers?: (FriendRequestsUsers | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<FriendRequests, FriendRequestsMetaData>);
  static copyOf(source: FriendRequests, mutator: (draft: MutableModel<FriendRequests, FriendRequestsMetaData>) => MutableModel<FriendRequests, FriendRequestsMetaData> | void): FriendRequests;
}

export declare class FriendRequestsUsers {
  readonly id: string;
  readonly friendrequests: FriendRequests;
  readonly users: Users;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<FriendRequestsUsers, FriendRequestsUsersMetaData>);
  static copyOf(source: FriendRequestsUsers, mutator: (draft: MutableModel<FriendRequestsUsers, FriendRequestsUsersMetaData>) => MutableModel<FriendRequestsUsers, FriendRequestsUsersMetaData> | void): FriendRequestsUsers;
}

export declare class Users {
  readonly id: string;
  readonly name: string;
  readonly imageUri?: string;
  readonly status?: string;
  readonly Messages?: (Message | null)[];
  readonly chatrooms?: (ChatRoomUsers | null)[];
  readonly friendrequestss?: (FriendRequestsUsers | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Users, UsersMetaData>);
  static copyOf(source: Users, mutator: (draft: MutableModel<Users, UsersMetaData>) => MutableModel<Users, UsersMetaData> | void): Users;
}

export declare class Message {
  readonly id: string;
  readonly content: string;
  readonly usersID?: string;
  readonly chatroomID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Message, MessageMetaData>);
  static copyOf(source: Message, mutator: (draft: MutableModel<Message, MessageMetaData>) => MutableModel<Message, MessageMetaData> | void): Message;
}

export declare class ChatRoomUsers {
  readonly id: string;
  readonly chatroom: ChatRoom;
  readonly users: Users;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<ChatRoomUsers, ChatRoomUsersMetaData>);
  static copyOf(source: ChatRoomUsers, mutator: (draft: MutableModel<ChatRoomUsers, ChatRoomUsersMetaData>) => MutableModel<ChatRoomUsers, ChatRoomUsersMetaData> | void): ChatRoomUsers;
}

export declare class ChatRoom {
  readonly id: string;
  readonly newMessages?: number;
  readonly lastMessage?: Message;
  readonly Messages?: (Message | null)[];
  readonly ChatRoomUsers?: (ChatRoomUsers | null)[];
  readonly messages?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<ChatRoom, ChatRoomMetaData>);
  static copyOf(source: ChatRoom, mutator: (draft: MutableModel<ChatRoom, ChatRoomMetaData>) => MutableModel<ChatRoom, ChatRoomMetaData> | void): ChatRoom;
}