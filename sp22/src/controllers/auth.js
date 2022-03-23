import User from "../models/user";

export const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        //tài khoản có tồn tại không?
        const exisUser = await User.findOne({ email }).exec();
        if (exisUser) {
            res.json({
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
        res.json(400).json({
            message: "Không tạo được tài khoản"
        })
    }


}


export const signin = async (req, res) => {
   
}