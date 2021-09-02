const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;

var jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

exports.getUser = (req, res) => {
  let token = req.headers["x-access-token"];
  var decoded = jwt.decode(token, { complete: true });
  console.log("decoded", decoded);
  console.log("user_id", decoded.payload.id);
  User.findById(decoded.payload.id)
    .select("-password")
    .then((user) => {
      console.log("user: " + user);
      return res.status(200).send(user);
    })
    .catch((err) => {
      return res.status(400).send(err.message);
    });
};

exports.sendMail = async (req, res) => {
  let invitation_email = req.body.email;
  let sender_mail;
  let sender_name;
  let token = req.headers["x-access-token"];
  // ..............
  var invitation_token = jwt.sign({ email: invitation_email }, config.secret, {
    expiresIn: 86400, // 24 hours
  });
  console.log(invitation_token);
  let invitation_link = `http://localhost:8080/signup/${invitation_token}`;
  var decoded = jwt.decode(token, { complete: true });
  console.log("decoded", decoded);
  console.log("user_id", decoded.payload.id);
  res.send("djbcvjbv");
  User.findById(decoded.payload.id).then((user) => {
    console.log("usermail: ", user.email);
    sender_mail = user.email;
    sender_name = user.first_name;
  });
  try {
    let transporter = nodemailer.createTransport({
      host: "stmp.etheral.email",
      service: "gmail",
      port: 587,
      secure: false,
      auth: {
        user: "saqib.browser@gmail.com",
        pass: "saqib786",
      },
    });
    const mailOptions = {
      from: `${sender_mail}`,
      to: `${invitation_email}`,
      subject: `Message from ${sender_name}`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

      <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
      <head>
      <!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
      <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
      <meta content="width=device-width" name="viewport"/>
      <!--[if !mso]><!-->
      <meta content="IE=edge" http-equiv="X-UA-Compatible"/>
      <!--<![endif]-->
      <title></title>
      <!--[if !mso]><!-->
      <!--<![endif]-->
      <style type="text/css">
          body {
            margin: 0;
            padding: 0;
          }
      
          table,
          td,
          tr {
            vertical-align: top;
            border-collapse: collapse;
          }
      
          * {
            line-height: inherit;
          }
      
          a[x-apple-data-detectors=true] {
            color: inherit !important;
            text-decoration: none !important;
          }
        </style>
      <style id="media-query" type="text/css">
          @media (max-width: 660px) {
      
            .block-grid,
            .col {
              min-width: 320px !important;
              max-width: 100% !important;
              display: block !important;
            }
      
            .block-grid {
              width: 100% !important;
            }
      
            .col {
              width: 100% !important;
            }
      
            .col_cont {
              margin: 0 auto;
            }
      
            img.fullwidth,
            img.fullwidthOnMobile {
              width: 100% !important;
            }
      
            .no-stack .col {
              min-width: 0 !important;
              display: table-cell !important;
            }
      
            .no-stack.two-up .col {
              width: 50% !important;
            }
      
            .no-stack .col.num2 {
              width: 16.6% !important;
            }
      
            .no-stack .col.num3 {
              width: 25% !important;
            }
      
            .no-stack .col.num4 {
              width: 33% !important;
            }
      
            .no-stack .col.num5 {
              width: 41.6% !important;
            }
      
            .no-stack .col.num6 {
              width: 50% !important;
            }
      
            .no-stack .col.num7 {
              width: 58.3% !important;
            }
      
            .no-stack .col.num8 {
              width: 66.6% !important;
            }
      
            .no-stack .col.num9 {
              width: 75% !important;
            }
      
            .no-stack .col.num10 {
              width: 83.3% !important;
            }
      
            .video-block {
              max-width: none !important;
            }
      
            .mobile_hide {
              min-height: 0px;
              max-height: 0px;
              max-width: 0px;
              display: none;
              overflow: hidden;
              font-size: 0px;
            }
      
            .desktop_hide {
              display: block !important;
              max-height: none !important;
            }
      
            .img-container.big img {
              width: auto !important;
            }
          }
        </style>
      </head>
      <body class="clean-body" style="margin: 0; padding: 0; -webkit-text-size-adjust: 100%; background-color: #f8f8f9;">
      <!--[if IE]><div class="ie-browser"><![endif]-->
      <table bgcolor="#f8f8f9" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="table-layout: fixed; vertical-align: top; min-width: 320px; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f8f8f9; width: 100%;" valign="top" width="100%">
      <tbody>
      <tr style="vertical-align: top;" valign="top">
      <td style="word-break: break-word; vertical-align: top;" valign="top">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color:#f8f8f9"><![endif]-->
      <div style="background-color:transparent;">
      <div class="block-grid" style="min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #fff;">
      <div style="border-collapse: collapse;display: table;width: 100%;background-color:#fff;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:#fff"><![endif]-->
      <!--[if (mso)|(IE)]><td align="center" width="640" style="background-color:#fff;width:640px; border-top: 8px dotted transparent; border-left: 8px dotted transparent; border-bottom: 8px dotted transparent; border-right: 8px dotted transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 60px; padding-left: 0px; padding-top:60px; padding-bottom:30px;"><![endif]-->
      <div class="col num12" style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 624px;">
      <div class="col_cont" style="width:100% !important;">
      <!--[if (!mso)&(!IE)]><!-->
      <div style="border-top:8px dotted transparent; border-left:8px dotted transparent; border-bottom:8px dotted transparent; border-right:8px dotted transparent; padding-top:60px; padding-bottom:30px; padding-right: 60px; padding-left: 0px;">
      <!--<![endif]-->
      <table cellpadding="0" cellspacing="0" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;" valign="top" width="100%">
      <tr style="vertical-align: top;" valign="top">
      <td align="center" style="word-break: break-word; vertical-align: top; padding-bottom: 5px; padding-left: 5px; padding-right: 5px; padding-top: 5px; text-align: center; width: 100%;" valign="top" width="100%">
      <h1 style="color:#000000;direction:ltr;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:24px;font-weight:normal;letter-spacing:normal;line-height:120%;text-align:center;margin-top:0;margin-bottom:0;">Invitation Link</h1>
      </td>
      </tr>
      </table>
      <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
      <tbody>
      <tr style="vertical-align: top;" valign="top">
      <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 30px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;" valign="top">
      <table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid #BBBBBB; width: 100%;" valign="top" width="100%">
      <tbody>
      <tr style="vertical-align: top;" valign="top">
      <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 40px; padding-left: 40px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, sans-serif"><![endif]-->
      <div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.5;padding-top:10px;padding-right:40px;padding-bottom:10px;padding-left:40px;">
      <div class="txtTinyMce-wrapper" style="line-height: 1.5; font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; color: #555555; mso-line-height-alt: 18px;">
      <p style="margin: 0; font-size: 15px; line-height: 1.5; text-align: center; word-break: break-word; mso-line-height-alt: 23px; margin-top: 0; margin-bottom: 0;"><span style="color: #808389; font-size: 15px;">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodati mat tempor incididunt ut labore et dolore magna aliqua.</span></p>
      </div>
      </div>
      <!--[if mso]></td></tr></table><![endif]-->
      <div align="center" class="button-container" style="padding-top:15px;padding-right:10px;padding-bottom:0px;padding-left:10px;">
      <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;"><tr><td style="padding-top: 15px; padding-right: 10px; padding-bottom: 0px; padding-left: 10px" align="center"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="www.example.com" style="height:46.5pt;width:93pt;v-text-anchor:middle;" arcsize="57%" stroke="false" fillcolor="#0cc9f7"><w:anchorlock/><v:textbox inset="0,0,0,0"><center style="color:#ffffff; font-family:Arial, sans-serif; font-size:16px"><![endif]--><a href=${invitation_link} style="-webkit-text-size-adjust: none; text-decoration: none; display: inline-block; color: #ffffff; background-color: #0cc9f7; border-radius: 35px; -webkit-border-radius: 35px; -moz-border-radius: 35px; width: auto; width: auto; border-top: 1px solid #0cc9f7; border-right: 1px solid #0cc9f7; border-bottom: 1px solid #0cc9f7; border-left: 1px solid #0cc9f7; padding-top: 15px; padding-bottom: 15px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; text-align: center; mso-border-alt: none; word-break: keep-all;" target="_blank"><span style="padding-left:30px;padding-right:30px;font-size:16px;display:inline-block;letter-spacing:undefined;"><span style="font-size: 16px; margin: 0; line-height: 2; word-break: break-word; mso-line-height-alt: 32px;"><strong>Register</strong></span></span></a>
      <!--[if mso]></center></v:textbox></v:roundrect></td></tr></table><![endif]-->
      </div>
      <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
      <tbody>
      <tr style="vertical-align: top;" valign="top">
      <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 60px; padding-right: 0px; padding-bottom: 12px; padding-left: 0px;" valign="top">
      <table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid #BBBBBB; width: 100%;" valign="top" width="100%">
      <tbody>
      <tr style="vertical-align: top;" valign="top">
      <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      <!--[if (!mso)&(!IE)]><!-->
      </div>
      <!--<![endif]-->
      </div>
      </div>
      <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
      <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
      </div>
      </div>
      </div>
      <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
      </td>
      </tr>
      </tbody>
      </table>
      <!--[if (IE)]></div><![endif]-->
      </body>
      </html>
     `,
    };

    transporter.sendMail(mailOptions, (err, message) => {
      if (err) {
        console.log("error", err);
      } else {
        console.log("email sent", message.response);
        res.json({
          message: "Email sent successfully",
        });
      }
    });
  } catch (err) {
    console.log("not sent error", err);
  }
};
