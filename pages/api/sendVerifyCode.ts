import {NextApiRequest, NextApiResponse} from 'next'
import {format} from 'date-fns';
import md5 from 'md5';
import {encode} from 'js-base64'
import request from 'service/fetch';

export default async function sendVertifyCode (req: NextApiRequest, res: NextApiResponse) {
    const { to = '', templateId = '1' } = req.body;
    console.log('to: ', to);
    const AppId = '8aaf07088065d251018066a3b7050037';
    const AccountId = '8aaf07088065d251018066a3b5730030';
    const NowDate = format(new Date(), 'yyyyMMddHHmmss');
    const SigParameter = md5(`${AccountId}${AuthToken}${NowDate}`);
    console.log('SigParameter: ', SigParameter);
    const Authorization = encode(`${AccountId}:${NowDate}`);
    console.log('Authorization: ', Authorization);
    const verifyCode = Math.floor(Math.random() * (9999 - 1000)) + 1000;
    const expireMinute = '5';
    const url = `https://app.cloopen.com:8883/2013-12-26/Accounts/${AccountId}/SMS/TemplateSMS?sig=${SigParameter}`;


    const response = await request.post(
        url,
        {
          to,
          templateId,
          appId: AppId,
          datas: [verifyCode, expireMinute],
        },
        {
          headers: {
            Authorization,
          },
        }
      );
    console.log(verifyCode)
    console.log(response);
    res.status(200).json({
        code: 0,
        data: 123
    })
}


// Unexpected default export of anonymous function
// export default async function(req:NextApiRequest, res: NextApiResponse) {
// export default async function(req, res) {
// export default function(req, res) {