function router(request, response, pathname, route) {
  if (typeof route[pathname] === "object") {
    let { file, to } = route[pathname];
    to(request, response, file);
  } else {
    // console.log(pathname + " doesn't in route.");
  }
}

module.exports = router;
