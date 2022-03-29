import User from "../models/user";
import jwt from "jsonwebtoken"


export const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        //tài khoản có tồn tại không?
        const exisUser = await User.findOne({ email }).exec();
        if (exisUser) {
            return res.status(400).json({
                message: "Email đã tồn tại, vui lòng đăng ký email khác"
            })
        }
        const user = await new User({ name, email, password }).save();
        res.json({
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
            }
        });
    } catch (error) {
       
    }
}


export const signin = async (req, res) => {
    const { email, password} = req.body;
    const user = await User.findOne({email}).exec();
    if(!user){
        return res.status(400).json({
            message: "User không tồn tại"
        })
    }
    if(!user.authenticate(password)){
        return res.status(400).json({
            message: "Mật khẩu không đúng"
        })
    }
    const token = jwt.sign({_id: user._id}, "123456", { expiresIn: 60 * 60 });
    res.json({
        token,
        user: {
            _id: user._id,
            email: user.email,
            name: user.name
        }
    })
}