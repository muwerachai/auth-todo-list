module.exports = (err, res, req, next) => {
  console.log(err);
  res.status(500).json({ message: err.message });
};
