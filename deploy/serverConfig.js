const SERVER_LIST = [
  {
    id: 0,
    name: '测试环境',
    domain: '',
    host: '134.175.227.86',
    port: 22,
    username: 'root',
    password: '123456rootWFC',
    path: '/home/coman/app/coman-client/dist/mp/v2.0/'
  },
  {
    id: 1,
    name: 'B-测试环境',
    domain: 'test.xxx.com',
    host: 'XX.XX.XX.XX',
    port: 22,
    username: 'root',
    password: 'xxxxxxx',
    path: '/usr/local/www/xxx_program_test/'
  }
]

module.exports = SERVER_LIST[0]
