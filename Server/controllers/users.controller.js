import bcryptjs from 'bcryptjs'
export async function registerUserController(req, res) {
    try {
        const { name, email, password } = req.body; // <--- req.body, not request.body

        if (!name || !email || !password) {
            return res.status(400).json({
                message: "Provide name, email, and password",
                error: true,
                success: false
            });
        }

        const user = await UserModel.findOne({ email });
        if (user) {
            return res.json({
                message: "Email already registered",
                error: true,
                success: false
            });
        }

        const salt = await bcryptjs.genSalt(10);
        const hashPassword = await bcryptjs.hash(password, salt);

        const newUser = new UserModel({ name, email, password: hashPassword });
        const savedUser = await newUser.save();

        return res.json({
            message: "User registered successfully",
            error: false,
            success: true,
            data: savedUser
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        });
    }
}
