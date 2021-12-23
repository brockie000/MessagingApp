// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ChatRoom, Message, ChatRoomUsers, Users } = initSchema(schema);

export {
  ChatRoom,
  Message,
  ChatRoomUsers,
  Users
};