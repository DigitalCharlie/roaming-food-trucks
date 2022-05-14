const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/user')

module.exports = { createUser, getUser, updateUser, Delete, signin, logout }

async function createUser(req, res) {
    try {
        const encryptedPassword = await bcrypt.hash(req.body.password, 10)
        const createUser = await User.create({ userid: user._id, password: encryptedPassword })
        const token = createJWT(createUser);
        res.status(200).json(token)
    }
    catch (error) {
        res.status(400).json(error + ' Failed to create user')
    }
}

async function getUser(req, res) {
    try {
        const getUser = await User.findOne({ userid: req.params.userid })
        if (!getUser) {
            throw new Error()
        }
        res.status(200).json(getUser)
    }
    catch (error) {
        res.status(400).json(error + ' Failed to retrieve user data')
    }
}

async function updateUser(req, res) {
    try {
        const userUpdate = await User.findOneAndUpdate({ userid: req.params.userid }, { ...req.body })
        if (!userUpdate) {
            throw new Error()
        }
        res.status(200).json('Successful update')
    }
    catch (error) {
        res.status(400).json(error + ' Failed to update')
    }
}

async function Delete(req, res) {
    try {
        await User.findByIdAndDelete(req.params.userid)
        if (await User.findOne({ userid: req.params.userid })) {
            res.status(200).json('Successful Deletion')
        }
    }
    catch (error) {
        res.status(400).json(error + ' Failure to delete')
    }
}

async function signin(req, res) {
    try {
        const userSignin = await User.findOne({ email: req.body.email })
        if (!userSignin) {
            throw new Error()
        }
        if (!await bcrypt.compare(req.body.password, user.password)) {
            throw new Error()
        }
        const token = createJWTToken(user)
        res.status(200).json(token)
    }
    catch (error) {
        res.status(400).json(error + ' Failed to sign in, username or password is incorrect')
    }
}
function createJWTToken(user) {
    return jwt.sign({ user }, process.env.SECRET, { expiresIn: '24h' })
}

function logout() {
    localStorage.removeItem('token')
}