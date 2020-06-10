const config = {
    MY_PARAM: 'shinder lin',
    MYSQL_HOST: 'localhost',
    MYSQL_USER: 'root',
    MYSQL_PASS: 'root',
    MYSQL_DB_NAME: 'test',
};

for(let k in config){
    process.env[k] = proces.env[k] || config[k];
}

module.exports = config;