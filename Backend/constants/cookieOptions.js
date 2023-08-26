const cookieOptions = {
  expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
  httpOnly: true,
  secure: true,
  sameSite: "none",
};

export default cookieOptions;
