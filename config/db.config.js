module.exports = {
    HOST: process.env.DB_HOST || "localhost",
    USER: process.env.DB_USER || "postgres",
    PASSWORD: process.env.DB_PASSWORD || "123",
    DB: process.env.DB_NAME || "testdb",
    dialect: process.env.DB_DIALECT || "postgres",
}
