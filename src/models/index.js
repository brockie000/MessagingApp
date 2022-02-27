// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { FriendRequests, FriendRequestsUsers, Users, Message, ChatRoomUsers, ChatRoom } = initSchema(schema);

export {
  FriendRequests,
  FriendRequestsUsers,
  Users,
  Message,
  ChatRoomUsers,
  ChatRoom
};