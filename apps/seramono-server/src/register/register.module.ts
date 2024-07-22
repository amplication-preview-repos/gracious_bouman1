import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RegisterModuleBase } from "./base/register.module.base";
import { RegisterService } from "./register.service";
import { RegisterController } from "./register.controller";
import { RegisterResolver } from "./register.resolver";

@Module({
  imports: [RegisterModuleBase, forwardRef(() => AuthModule)],
  controllers: [RegisterController],
  providers: [RegisterService, RegisterResolver],
  exports: [RegisterService],
})
export class RegisterModule {}
