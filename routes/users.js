var express = require('express');
var router = express.Router();
var send_email = require("../helper/send_email")


/* GET users listing. */
router.post('/send-email-sub', async function(req, res, next) {
  var email = req.body.email

  var subject = "enquiry for subscription"
  var message = `${email} is register for subscription...`
  var cc = ""

  await send_email.sendmail(email, cc, subject, message)
  
  return res.json({
    status: true,
    message: "Email send",
   
  })

});

router.post('/send-email-contact', async function(req, res, next) {
  var email = req.body.email
  var name = req.body.name
  var company_name = req.body.company_name
  var phone = req.body.phone
  var email = req.body.email
  var message = req.body.message




  var subject = "Enquiry"
  var message = `<li><b>Name</b>: &nbsp; ${name}</li><li><b>Phone Number</b>:  &nbsp;${phone}</li><li><b>Email</b>: ${email}</li><li><b>Company Name</b>:  &nbsp;${company_name}</li><li><b>Message</b>:  &nbsp;${message}</li>`
  var cc = ""

  await send_email.sendmail(email, cc, subject, message)
  
  return res.json({
    status: true,
    message: "Email send",
   
  })

});

router.post('/send-email-services', async function(req, res, next) {
  var email1 = req.body.email
  var type = req.body.type

  console.log(req.body)
  var email = [email1,"magicads360@gmail.com"]
  
  


  var subject = "Enquiry for services "
  var message = `${email} is enquiry for ${type}`
  var cc = ""

  await send_email.sendmail1(email, cc, subject, message)
  
  return res.json({
    status: true,
    message: "Email send",
   
  })

});


router.post('/send-email-sub-travelpey', async function(req, res, next) {
 

  console.log(req.body)
  var email = ""


  var subject = "Enquiry for flights "
  var message = `<li><b>Where</b>: &nbsp; ${req.body.where}</li><li><b>To</b>:  &nbsp;${req.body.to}</li><li><b>Date</b>: ${req.body.departure_date}</li><li><b>Passenger</b>:  &nbsp;${req.body.passenger_count}</li><li><b>Child</b>:  &nbsp;${req.body.child_f}</li> <li><b> Economy</b>:  &nbsp;${req.body.economy}</li><li><b>Mobile Number</b>:  &nbsp;${req.body.mobile_number}</li>`
  var cc = ""

  await send_email.sendmail(email, cc, subject, message)
  
  return res.json({
    status: true,
    message: "Email send",
   
  })

});

module.exports = router;
