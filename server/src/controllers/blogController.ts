import { Request, Response } from "express"

exports.getBlogs = async (req:Request, res:Response) => {
    res.status(200).json({
        status: 'success',
        message: 'All the blogs in database.'
    })
}