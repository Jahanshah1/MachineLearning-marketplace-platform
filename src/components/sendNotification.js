// sendNotification.js
{/*import * as PushAPI from "@pushprotocol/restapi";
import * as ethers from "ethers";

const PK = "0x37a46d952A5dDa03404A4C5EaA9CEbF05dF8aE57"; // channel private key
const Pkey = `a478f2d30d7938ea3fc9b2c45c881e4d13134f19fccc9576564d8a4f48baffa1${PK}`;
const _signer = new ethers.Wallet(Pkey);

export const sendNotification = async () => {
  try {
    const apiResponse = await PushAPI.payloads.sendNotification({
      signer: _signer,
      type: 1, // broadcast
      identityType: 2, // direct payload
      notification: {
        title: `[SDK-TEST] notification TITLE:`,
        body: `[sdk-test] notification BODY`,
      },
      payload: {
        title: `[sdk-test] payload title`,
        body: `sample msg body`,
        cta: "",
        img: "",
      },
      channel: "eip155:5:0xD8634C39BBFd4033c0d3289C4515275102423681", // your channel address
      env: "staging",
    });
  } catch (err) {
    console.error("Error: ", err);
  }
};*/}
