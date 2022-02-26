import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

export const helloWorld = functions
  .runWith({
    timeoutSeconds: 10,
    memory: "128MB",
  })
  .region("asia-northeast1")
  .pubsub.schedule("*/5 * * * *")
  .onRun(() => {
    functions.logger.debug("helloWorld");
  });
