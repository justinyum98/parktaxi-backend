const initializeCors = () => {
  const corsOptions = {
    origin: process.env.FRONTEND_URL,
    credentials: true
  };

  return corsOptions;
};

module.exports = {
  initializeCors
};
