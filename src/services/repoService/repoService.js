export default (env, request, errorHandler) => ({
  getAll: errorHandler(user =>
    request.get(
      `${env.api_endpoint}/search/repositories?q=user:${user}+fork:true`
    )
  )
});
