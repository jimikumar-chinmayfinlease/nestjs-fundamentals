import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { LoggerMiddleware } from "./logger.middleware";

@Module({
    controllers: [UsersController],
})

export class UsersModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware).forRoutes(UsersController); // Apply middleware to all routes in UsersController
    }
}