export default (env, request, errorHandler) => ({
  get: errorHandler((user, repos, page) =>
    request.get(
      `${env.api_endpoint}/repos/${user}/${repos}/commits?page=${page}`
    )
  )
});
