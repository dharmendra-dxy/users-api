import type {Request, Response} from "express"


class AuthController {
  /* Register */
  register= async (req: Request, res:Response) => (
    res.status(201).json({
      success: true,
      message: "User registered succesfully"
    })
  )

  /* Login */
  login= async (req: Request, res:Response) => (
    res.status(201).json({
      success: true,
      message: "User loggedin succesfully"
    })
  )
}

export default AuthController;