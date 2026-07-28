export const generateOtp = () => String(Math.floor(100000 + Math.random() * 900000));

export const otpExpire = () => new Date(Date.now + 10 * 60 * 1000);

export const otpValid = (user, otp) =>
  user.otp === otp && user.otpExpire && user.otpExpire > new Date();
