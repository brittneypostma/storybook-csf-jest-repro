export async function callbackRunner(cb) {
  cb();
}

export async function Http(params, cb, errCb) {
  callbackRunner(cb);
}
