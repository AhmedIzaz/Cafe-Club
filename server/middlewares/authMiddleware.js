import jwt from "jsonwebtoken";
export const is_authenticate = async (req, res, next) => {
  try {
    const { url } = req;
    if (!req.body.token)
      return res
        .status(500)
        .json({
          message: `${url == "/login" ? "User" : "Owner"} not authenticated!`,
        })
        .end();
    if (url == "/login") {
      const { user_id } = await jwt.verify(req.body.token, "secret");
      req.user_id = user_id;
    } else {
      const { owner_id } = await jwt.verify(req.body.token, "secret");
      req.owner_id = owner_id;
    }
    next();
  } catch (error) {
    return res.json({ error: error.message }).end();
  }
};

export const not_authenticate = async (req, res, next) => {
  try {
    if (req.body?.token)
      return res
        .status(500)
        .json({
          message: `${
            req.url == "/login" ? "User" : "Owner"
          } already authenticated!`,
        })
        .end();
    next();
  } catch (error) {
    return res.json({ error: error.message }).end();
  }
};
