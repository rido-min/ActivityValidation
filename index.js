import { Activity, ActivityTypes } from '@microsoft/agents-bot-activity';

const act = Activity.fromObject({
  type: ActivityTypes.Message,
  id: 'a1',
  channelId: 'default-channel',
  serviceUrl: 'https://example.com',
  conversation: {
    id: 'c1',
  },
  recipient: {
    id: 'bot1',
    name: 'Bot',
  },
});

console.log(act);
console.log(act.id);
console.log(act.conversation.id);
console.log(act.getConversationReference());
console.log(JSON.stringify(act))
console.log('\n--act2--\n');
const act2 = Activity.fromObject(act);
act2.id = 'a2';
act2.conversation.id  = 'c2'
console.log(act2);
console.log(act2.id);
console.log(act2.conversation?.id);
console.log(act2.getConversationReference());
