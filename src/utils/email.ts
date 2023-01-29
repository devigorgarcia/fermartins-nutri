import {
  Configuration,
  EmailsApi,
  EmailTransactionalMessageData,
} from "@elasticemail/elasticemail-client-ts-axios";

const config = new Configuration({
  apiKey:
    "CC8C92BE19D73AF0404D0FCBCD3560A1C8FCF304B6C06A599A71413587EF3071F9892030CC68022117809740C3ADEB85",
});

const emailsApi = new EmailsApi(config);

export const sendTransactionalEmails = (
  emailTransactionalMessageData: EmailTransactionalMessageData
): void => {
  emailsApi
    .emailsTransactionalPost(emailTransactionalMessageData)
    .then((response) => {
      console.log("API called successfully.");
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
};

// const emailTransactionalMessageData: EmailTransactionalMessageData = {
//   Recipients: {
//     To: ["igorgg@gmail.com"], // maximum 50 recipients
//   },
//   Content: {
//     Body: [
//       {
//         ContentType: "HTML",
//         Charset: "utf-8",
//         Content: "<strong>Example content<strong>",
//       },
//       {
//         ContentType: "PlainText",
//         Charset: "utf-8",
//         Content: "Example content",
//       },
//     ],
//     From: "igorgarciatera2@gmail.com",
//     Subject: "Example transactional email",
//   },
// };
// sendTransactionalEmails(emailTransactionalMessageData)