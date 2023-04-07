"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketAdapter = void 0;
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const path_1 = require("path");
const platform_socket_io_1 = require("@nestjs/platform-socket.io");
class SocketAdapter extends platform_socket_io_1.IoAdapter {
    createIOServer(port, options) {
        const server = super.createIOServer(port, Object.assign(Object.assign({}, options), { cors: {
                origin: 'http://localhost:3000',
                methods: ['GET', 'POST'],
            } }));
        return server;
    }
}
exports.SocketAdapter = SocketAdapter;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'static'));
    app.enableCors({
        origin: 'http://localhost:3000',
    });
    app.useWebSocketAdapter(new SocketAdapter(app));
    await app.listen(3001);
}
bootstrap();
//# sourceMappingURL=main.js.map