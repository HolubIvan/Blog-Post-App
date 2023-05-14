const assert = require("assert");
const sinon = require("sinon");
const nodemailer = require("nodemailer");
const path = require("path");

const keys = require(path.join(__dirname, "../config/keys"));
const mailer = require("./mailer");

describe("sendMail", () => {
  let transporter, mailOptions;

  beforeEach(() => {
    transporter = sinon.stub(nodemailer, "createTransport");
    mailOptions = {
      to: "test@example.com",
      subject: "Test Email",
      text: "This is a test email",
    };
  });

  afterEach(() => {
    transporter.restore();
  });

  it("should call transporter.sendMail with mailOptions", (done) => {
    const mockTransporter = {
      sendMail: sinon.stub().callsArgWith(1, null, "success"),
    };
    transporter.returns(mockTransporter);

    mailer.sendMail(mailOptions, (err, info) => {
      assert.strictEqual(mockTransporter.sendMail.calledOnce, true);
      assert.strictEqual(
        mockTransporter.sendMail.firstCall.args[0],
        mailOptions
      );
      assert.strictEqual(err, null);
      assert.strictEqual(info, "success");
      done();
    });
  });
});
