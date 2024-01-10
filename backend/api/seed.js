import express from "express"
import userModel from "../model/userModel"

const handler = async (req, res) => {
    await db.connect()
    await userModel.deleteMany()
    await userModel.insertMany(data.User)
    await db.disconnect()
    res.send({msg: 'seeded succesfully'})
}

export default handler