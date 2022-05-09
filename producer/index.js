import Kafka from 'node-rdkafka';

const stream = Kafka.Producer.createWriteStream(
  {
    // broker
    'metadata.broker.list': 'localhost:9092',
  },
  {}, // options
  {
    //topic
    topic: 'test',
  }
);

function queueMessage() {
  const message = 'Hello buddy!';
  const success = stream.write(Buffer.from(message));
  if (success) {
    console.log('Send Message: ', message);
  } else {
    console.log('Something got wrong');
  }
}

setInterval(() => {
  queueMessage();
}, 3000);
