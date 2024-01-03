import crypto from "crypto";

const token = crypto.randomBytes(64).toString("hex");
const verificationLink = `http://localhost:4040/verifi-email?token=${token}`;

const emailVerfication = {
  token: token,
  verificationLink: verificationLink,
};

export default emailVerfication;
