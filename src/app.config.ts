export const rabbitConfig = {
    uri: process.env.rabbbitUri || 'amqp://localhost',
    workQueue: process.env.workQueue || 'bookingQueue',
}
export const SERVER_HOST = '0.0.0.0'
export const SERVER_PORT = process.env.PORT || 3000
export const SECRET = 'Hotel@@'
