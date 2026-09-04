const jwt = require('jsonwebtoken');
const User = require('./models/User');
const { createError } = require('./errors');

async function getUser(authorization) {
  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw createError('Token não informado.', 401);
  }

  try {
    const token = authorization.split(' ')[1];
    const data = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(data.userId);

    if (!user) throw new Error();
    return user;
  } catch {
    throw createError('Token inválido ou expirado.', 401);
  }
}

async function authMiddleware(request, _response, next) {
  request.user = await getUser(request.headers.authorization);
  next();
}

module.exports = { getUser, authMiddleware };
