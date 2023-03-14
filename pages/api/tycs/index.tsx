import { NextApiRequest, NextApiResponse } from "next";
import {tycs} from '../db' 


const handler = (req: NextApiRequest, res: NextApiResponse) => {

    res.status(200).json(tycs)

} 

export default handler