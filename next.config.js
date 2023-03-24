/** @type {import('next').NextConfig} */
module.exports = {
  output: 'standalone',
  env:{
    API_HOST: process.env.API_HOST
  },
  compiler: {
    styledComponents: true,
  }
}
