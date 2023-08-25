import User from "../models/User.js"

export const register = async (req, res) => {
    try {
        const { name, email, password, avatar } = req.body;
        let user = await User.findOne({ email });
        if (user) {
            return res.status(401).json({
                success: false,
                message: "user already exists"
            })
        }
        user = await User.create({
            name,
            email,
            password,
            avatar: { public_id: "public-id", url: "url" }
        })
        res.status(200).json({
            message: true,
            user
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}