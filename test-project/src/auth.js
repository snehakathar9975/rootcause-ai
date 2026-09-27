function restoreAuth() {
  const token = sessionStorage.getItem("token");

  if (token) {
    return token;
  }

  return null;
}

module.exports = { restoreAuth };