export default (env, request, errorHandler) => ({
  getAll: errorHandler(async user =>
    request.get(`${env.api_endpoint}/users/${user}/repos`)
  )
});
