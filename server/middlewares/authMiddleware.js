import jwt from "jsonwebtoken";
export const is_authenticate = async (req, res, next) => {
  try {
    if (!req.body.token)
      return res
        .status(500)
        .json({
          message: `User not authenticated!`,
        })
        .end();
    const { user_id } = await jwt.verify(req.body.token, "secret");
    req.user_id = user_id;
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
          message: `User already authenticated!`,
        })
        .end();
    next();
  } catch (error) {
    return res.json({ error: error.message }).end();
  }
};

export const is_owner_authenticate = async (req, res, next) => {
  try {
    if (!req.body.token)
      return res
        .status(500)
        .json({
          message: `Owner not authenticated!`,
        })
        .end();
    const { owner_id } = await jwt.verify(req.body.token, "secret");
    req.owner_id = owner_id;
    next();
  } catch (error) {
    return res.status(404).json({ error: error.message }).end();
  }
};
