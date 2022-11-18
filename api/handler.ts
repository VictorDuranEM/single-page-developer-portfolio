import { VercelRequest, VercelResponse } from "@vercel/node"
import { Records } from "airtable";
import AirtableError from "airtable/lib/airtable_error";

var Airtable = require("airtable");
var base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID);

export default function handler(request: VercelRequest, response: VercelResponse) {
  console.log(new Date().toDateString())
  base('Contact').create([
    {
      "fields": {
        "Name": request.body.name,
        "Email": request.body.email,
        "Message": request.body.message,
        "Date": new Date().toDateString()
      }
    }
  ], function (err: AirtableError, records: Records<any>) {
    if (err) {
      console.error(err);
      return response.status(500).json({ error: err });
    }
    records.forEach(function (record) {
      console.log(record.getId());
      return response.status(200).json({ message: "Success" });
    });
  });
}
