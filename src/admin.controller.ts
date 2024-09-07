import { Controller, Get, HostParam, UseGuards } from "@nestjs/common";
import { AuthGuard } from "./auth.guard";

@Controller('admin')
export class AdminController {
    @Get()
    @UseGuards(AuthGuard)
    getAdminData(): string {
        return 'This is restricted admin data.';
    }
}

// @Controller({host: ':account.example.com'})
// export class AccountController {
//     @Get()
//     getInfo(@HostParam('account') account: string){
//         return account;
//     }
// }