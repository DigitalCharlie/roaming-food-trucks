const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/User')

module.exports = {
    createUser,
    getUser,
    Delete,
    signin,
    logout,
    getUserFavorites,
    toggleFavorite,
    addNewRecent
}

//changed create user and token to equal createJWTToken
async function createUser(req, res) {
    try {
        const encryptedPassword = await bcrypt.hash(req.body.password, 10)
        const createUser = await User.create({ ...req.body, password: encryptedPassword })
        const token = createJWT(createUser);
        res.status(200).json(token)
    }
    catch (error) {
        res.status(400).json(error + ' Failed to create user')
    }
}

async function getUser(req, res) {
    try {
        const getUser = await User.findOne({ userid: req.params.userid }).populate("favorites").populate("recents")
        if (!getUser) {
            throw new Error()
        }
        res.status(200).json(getUser)
    }
    catch (error) {
        res.status(400).json(error + ' Failed to retrieve user data')
    }
}

// FAVORITES 
async function getUserFavorites(req, res) {
    try {
        const getUser = await User.findOne({ _id: req.params.id }).populate("favorites").populate("recents").populate("reviews")
        if (!getUser) {
            throw new Error()
        }
        res.status(200).json(getUser)
    }
    catch (error) {
        res.status(400).json(error + ' Failed to retrieve user data')
    }
}

async function toggleFavorite(req, res) {
    try {
        const updatedUser = await User.findById(req.params.userid)
        if (!updatedUser) {
            throw new Error()
        }
        if (updatedUser.favorites.indexOf(req.body.truck) === -1) {
            updatedUser.favorites.push(req.body.truck)
        } else {
            updatedUser.favorites.splice(updatedUser.favorites.indexOf(req.body.truck), 1)
        }
        updatedUser.save()
        res.status(200).json(updatedUser)
    }
    catch (error) {
        res.status(400).json(error + ' Failed to update')
    }
}

// RECENTS

async function addNewRecent(req, res) {
    try {
        const updatedUser = await User.findById(req.params.userid)
        if (!updatedUser) {
            throw new Error()
        }
        if (updatedUser.recents.indexOf(req.body.truck) === -1) {
            updatedUser.recents.push(req.body.truck)
            if (updatedUser.recents.length > 10) {
                updatedUser.recents.pop()
            }
        }
        if (updatedUser.recents.includes(req.body.truck)) {
            updatedUser.recents.splice(updatedUser.recents.indexOf(req.body.truck), 1)
            updatedUser.recents.unshift(req.body.truck)
        }
        updatedUser.save()
        res.status(200).json(updatedUser)
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
        const user = await User.findOne({ email: req.body.email })
        if (!user) {
            throw new Error()
        }
        if (!await bcrypt.compare(req.body.password, user.password)) {
            throw new Error()
        }
        const token = createJWT(user)
        res.status(200).json(token)
    }
    catch (error) {
        res.status(400).json(error + ' Failed to sign in, username or password is incorrect')
    }
}
function createJWT(user) {
    return jwt.sign({ user }, process.env.SECRET, { expiresIn: '24h' })
}

function logout() {
    localStorage.removeItem('token')
}