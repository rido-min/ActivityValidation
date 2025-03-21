import { Activity, ActivityTypes } from '@microsoft/agents-bot-activity';

const act = Activity.fromObject({
  type: ActivityTypes.Message,
  id: 'a123',
  channelId: 'default-channel',
  serviceUrl: 'https://example.com',
  conversation: {
    id: 'c2',
  },
  recipient: {
    id: 'bot1',
    name: 'Bot',
  },
});

const act2 = Activity.fromObject(act);
console.log(act);
console.log(act.id);
console.log(act.conversation.id);
console.log(act.getConversationReference());

console.log('\n--act2--\n');
act2.id = '456';
delete act2.conversation;
console.log(act2);
console.log(act2.id);
console.log(act2.conversation?.id);
console.log(act.getConversationReference());
