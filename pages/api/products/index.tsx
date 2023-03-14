import { NextApiRequest, NextApiResponse } from "next";
import {products} from '../db' 


const handler = (req: NextApiRequest, res: NextApiResponse) => {

    res.status(200).json(products)

} 

export default handler